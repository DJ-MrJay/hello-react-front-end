import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Set the API URL for greetings
const apiUrl = 'http://localhost:3000/api/random_greeting';

// Create an asynchronous thunk to fetch greetings
export const fetchGreeting = createAsyncThunk('greetings/fetchGreeting', async () => {
  const response = await axios.get(apiUrl);
  return response.data.greeting;
});

export default fetchGreeting;
