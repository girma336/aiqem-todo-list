import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
    id: number;
    name: string;
    catagory: string;
    completed: boolean;
}

interface TaskStore {
    tasks: Task[];
    loading: boolean;
    error: string | undefined;
}


const storedTasks = localStorage.getItem('tasks');
const initialState: TaskStore = {
  tasks: storedTasks ? JSON.parse(storedTasks) : [],
  loading: false,
  error: undefined,
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: {
            reducer: (state, action: PayloadAction<Task>) => {
                state.tasks.push(action.payload);
            },
            prepare: (name: string, catagory: string) => ({
                payload: {
                    id: Date.now(),
                    name,
                    catagory,
                    completed: false,
                },
            }),
        },
        deleteTask: (state, action: PayloadAction<number>) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        },
        toggleTask: (state, action: PayloadAction<number>) => {
          const task = state.tasks.find((task) => task.id === action.payload);
          if (task) {
            task.completed = !task.completed;
          }
        },
    }
})


export const { addTask, deleteTask, toggleTask } = tasksSlice.actions;

export default tasksSlice.reducer;