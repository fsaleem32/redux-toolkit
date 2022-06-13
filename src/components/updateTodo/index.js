import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function Index() {
  const [addValue, setAddValue] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const HandleSubmit = () => {
    useDispatch(addValue);
  };
  return (
    <div>
      <form>
        <label for="fname">First name:</label>
        <br />
        <input
          type="text"
          name="fname"
          value={addValue.fname}
          onChange={handleChange}
        />
        <br />
        <label for="lname">Last name:</label>
        <br />
        <input
          type="text"
          name="lname"
          value={addValue.lname}
          onChange={handleChange}
        />
        <br />
        <label for="email">E-mail:</label>
        <br />
        <input
          type="email"
          name="email"
          value={addValue.email}
          onChange={handleChange}
        />
        <br />
        <label for="password">Password:</label>
        <br />
        <input
          type="password"
          name="password"
          value={addValue.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <input type="submit" value="Submit" onClick={HandleSubmit} />
      </form>
    </div>
  );
}
