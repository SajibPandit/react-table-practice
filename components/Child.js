import React from "react";

export default function Child({ data, handleChange }) {

  return (
    <>
      <input
        type="text"
        name="name"
        value={data?.name}
        onChange={handleChange}
      />
       <br />
    </>
  );
}
