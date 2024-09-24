import { configureStore, createSlice } from '@reduxjs/toolkit';

// Student slice
const studentsSlice = createSlice({
  name: 'students',
  initialState: [],
  reducers: {
    addStudent: (state, action) => {
      state.push({ id: state.length + 1, ...action.payload });
    },
    deleteStudent: (state, action) => {
      return state.filter(student => student.id !== action.payload);
    },
    updateStudent: (state, action) => {
      return state.map(student =>
        student.id === action.payload.id ? action.payload : student
      );
    }
  }
});

export const { addStudent, deleteStudent, updateStudent } = studentsSlice.actions;

const store = configureStore({
  reducer: {
    students: studentsSlice.reducer
  }
});

export default store;
