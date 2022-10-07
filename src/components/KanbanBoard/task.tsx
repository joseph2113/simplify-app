import React from 'react'
import dynamic from 'next/dynamic';
import { Itask } from '../../lib/initialData';
const Draggable = dynamic(
  () =>
    import('react-beautiful-dnd').then(mod => {
      return mod.Draggable;
    }),
  {ssr: false},
);
type Props = {
  task: Itask,
  index: number
}

const Task = ({ task, index }: Props) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div 
          className="w-full h-12  top-0 left-0 my-4"
          {...provided.draggableProps} 
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className={`${snapshot.isDragging ? 'bg-green-400' : 'bg-blue-500' }  flex items-center justify-between h-full p-4  rounded cursor-pointer border border-solid border-[rgba(25, 4, 69, 0.1)]`}>
            <p className='text-ellipsis text-white'>{task.content}</p>
          </div>
        </div>
      )}
    </Draggable>
  )
}

export default Task
