import { useState } from "react";
import AnotherChild from "../components/AnotherChild";
import Child from "../components/Child";

export default function Parent() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
    // console.log(data);
  };
  
  const handleClick = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <Child {...data} handleChange={handleChange} />
      <AnotherChild {...data} handleChange={handleChange} />
      <button onClick={handleClick}>Send</button>
    </div>
  );
}
