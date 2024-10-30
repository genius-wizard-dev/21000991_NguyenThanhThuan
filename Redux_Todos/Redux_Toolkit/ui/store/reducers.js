import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'https://6716278c33bc2bfe40bcaadb.mockapi.io/todos';

export const fetchData = createAsyncThunk('todos/fetchData', async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Failed to fetch data');
  return response.json();
});

export const addTodo = createAsyncThunk('todos/addTodo', async (todo) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo),
  });
  if (!response.ok) throw new Error('Failed to add todo');
  return response.json();
});

export const editTodo = createAsyncThunk('todos/editTodo', async (todo) => {
  const response = await fetch(`${API_URL}/${todo.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo),
  });
  if (!response.ok) throw new Error('Failed to edit todo');
  return response.json();
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete todo');
  return id; // Return the id of the deleted todo
});

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Data
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Add Todo
      .addCase(addTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload);
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Edit Todo
      .addCase(editTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editTodo.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.data.findIndex((todo) => todo.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      .addCase(editTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Delete Todo
      .addCase(deleteTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.data = state.data.filter((todo) => todo.id !== action.payload);
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default todosSlice.reducer;
