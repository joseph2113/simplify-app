import React from 'react';
import dynamic from 'next/dynamic';
import { Icolumn, initialData } from '../../lib/initialData';
import ContainerList from './containerList';

const DragDropContext = dynamic(
  () =>
    import('react-beautiful-dnd').then((mod) => {
      return mod.DragDropContext;
    }),
  { ssr: false }
);

const KanbanBoard = () => {
  const [lists, setLists] = React.useState(initialData);

  // const createNewList = (): void => {
  //   const newList = {
  //     id: `column-${Object.keys(lists.columns).length + 1}`,
  //     title: '',
  //     taskIds: []
  //   };

  //   const newState = {
  //     ...lists,
  //     columns: {
  //       ...lists.columns,
  //       [`column-${Object.keys(lists.columns).length + 1}`]: newList,
  //     },
  //     columnOrder: [...lists.columnOrder, newList.id],
  //   };
  //   setLists(newState);
  // };

  const onDragEnd = (result:any) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }


    const start = lists.columns[source.droppableId];
    const finish = lists.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...lists,
        columns: {
          ...lists.columns,
          [newColumn.id]: newColumn,
        },
      };

      setLists(newState);
      return;
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...lists,
      columns: {
        ...lists.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    setLists(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {lists.columnOrder.map((columnId) => {
        const column = lists.columns[columnId];
        const tasks = column.taskIds.map((taskId: string | number) => lists.tasks[taskId]);

        return (
          <ContainerList
            key={column.id}
            column={column}
            tasks={tasks}
          />
        );
      })}
    </DragDropContext>
  );
};

export default KanbanBoard;
