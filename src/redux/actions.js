import axios from 'axios';

export const fetchRandomGreeting = () => {
  return async dispatch => {
    try {
      const response = await axios.get('/api/random_greeting');
      dispatch(setRandomGreeting(response.data.greeting));
    } catch (error) {
      console.error(error);
    }
  };
};

export const setRandomGreeting = greeting => {
  return {
    type: 'SET_RANDOM_GREETING',
    payload: greeting,
  };
};
