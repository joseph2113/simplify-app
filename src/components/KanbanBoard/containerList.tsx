import React from 'react';
import dynamic from 'next/dynamic';
import Task from './task';

import { Itask } from '../../lib/initialData';

const Droppable = dynamic(
  () =>
    import('react-beautiful-dnd').then((mod) => {
      return mod.Droppable;
    }),
  { ssr: false }
);

type ContainerListProps = {
  column: {
    [key: string]: any;
  };
  tasks: Itask[];
};

const ContainerList = ({ column, tasks }: ContainerListProps) => (
  <div className="flex flex-col w-72 h-full px-2.5 pt-8 pb-0 align-top bg-white border border-x-gray-100 border-solid">
    <div className="flex flex-shrink-0 flex-grow-0 items-center justify-center text-center relative mx-7 mb-8">
      <span className="flex flex-col">
        <input
          className="text-center py-2 outline-none rounded hover:bg-[rgba(80,80,81,0.28)] focus:bg-[rgba(80,80,81,0.28)] ease-out duration-300"
          placeholder="List name"
          defaultValue={column.title}
        />
        <p className="font-normal text-sm text-[rgba(25,4,69,0.5)]">{`${tasks.length} JOBS`}</p>
      </span>
    </div>
    <div className="flex-shrink-0 flex-grow-0 basis-11">
      <button className="w-full text-center rounded text-[rgba(25,4,69,0.5)] text-2xl border border-solid border-[rgba(25,4,69,0.1)] shadow-[0px_10px_20px_0px_rgba(25,4,69,0.1)]">
        +
      </button>
    </div>
    <Droppable key={column.id} droppableId={column.id} type="task">
      {(provided) => (
        <div
          className="flex-grow relative mt-3 py-2 overflow-y-auto  scrollbar"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {tasks.map((task: Itask, index: number) => (
            <Task key={task.id} task={task} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </div>
);

export default ContainerList;
