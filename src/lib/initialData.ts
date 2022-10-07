export interface Itask {
    id: string;
    content: string;
}

export interface Icolumn {
    id: string;
    title: string;
    taskIds: string[];
}

export interface Istate {
    tasks: {
        [key: string]: Itask;
    };
    columns: {
        [key: string]: Icolumn;
    };
    columnOrder: string[];
}

export const initialData: Istate = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Take out the garbage' },
    'task-2': { id: 'task-2', content: 'Watch my favorite show' },
    'task-3': { id: 'task-3', content: 'Charge my phone' },
    'task-4': { id: 'task-4', content: 'Cook dinner' },
    'task-5': { id: 'task-5', content: 'Go to the gym' },
    'task-6': { id: 'task-6', content: 'do homeworks' },
    'task-7': { id: 'task-7', content: 'Go out with the dog' },
    'task-8': { id: 'task-8', content: 'make the bed' },
    'task-9': { id: 'task-9', content: 'play videgames' },
    'task-10': { id: 'task-10', content: 'play basketball' },
    'task-11': { id: 'task-11', content: 'Watch my favorite show' },
    'task-12': { id: 'task-12', content: 'send email' },
    'task-13': { id: 'task-13', content: 'Go to the gym' },
    'task-14': { id: 'task-14', content: 'do the challenge' },
    'task-15': { id: 'task-15', content: 'upload video' },
    'task-16': { id: 'task-16', content: 'watch netflix' },
    'task-17': { id: 'task-17', content: 'make the bed' },
    'task-18': { id: 'task-18', content: 'play videgames' },

  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: ['task-1', 'task-5', 'task-6', 'task-7','task-10', 'task-12', 'task-13', 'task-14', 'task-15', 'task-16', 'task-18'],
    },
    'column-2': {
      id: 'column-2',
      title: 'in progress',
      taskIds: ['task-2', 'task-3'],
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      taskIds: ['task-9'],
    },
    'column-4': {
      id: 'column-4',
      title: 'Blocked',
      taskIds: ['task-17'],
    },
    'column-5': {
      id: 'column-5',
      title: 'Backlog',
      taskIds: ['task-4'],
    },
    'column-6': {
      id: 'column-6',
      title: 'For tomorrow',
      taskIds: ['task-11'],
    },
    'column-7': {
      id: 'column-7',
      title: 'Important',
      taskIds: ['task-8'],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-1', 'column-2', 'column-3', 'column-4', 'column-5', 'column-6', 'column-7'],
};
