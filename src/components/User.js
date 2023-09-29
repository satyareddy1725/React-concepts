import { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count_2] = useState(1);


  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <h1>Count2 = {count_2}</h1>
      <h1>{name}</h1>
      <h3>Location : hyd</h3>
      <h4>Contact : satyareddy1725@gmail.com</h4>
    </div>
  );
};

export default User;
