import React from "react";

export default function AnotherChild({ data, handleChange }) {
  return (
    <>
      <input
        type="email"
        name="email"
        value={data?.email}
        onChange={handleChange}
      />
      <br />
      <input
        type="password"
        name="password"
        value={data?.password}
        onChange={handleChange}
      />
       <br />
    </>
  );
}
