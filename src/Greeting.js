import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRandomGreeting } from './redux/actions';

const Greeting = () => {
  const dispatch = useDispatch();
  const randomGreeting = useSelector(state => state.randomGreeting);

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  return (
    <div>
      <h1>{randomGreeting}</h1>
    </div>
  );
};

export default Greeting;
