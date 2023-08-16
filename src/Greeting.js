import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from './redux/actions'; // Update this import

const Greeting = () => {
  const dispatch = useDispatch();
  const { randomGreeting } = useSelector((state) => state.randomGreeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <div>
      <h1>{randomGreeting}</h1>
    </div>
  );
};

export default Greeting;
