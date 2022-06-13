import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProductAction } from "../store/reducers/ToDoReducer";

export default function Todo() {
  const [addProductInput, setAddProductInput] = useState("");
  const dispatch = useDispatch();
  const AddProductDispatcher = () => {
    // console.log("addPINPUT - ", addProductInput);
    if (!addProductInput) {
    } else {
      dispatch(
        addProductAction({ id: new Date().getTime(), data: addProductInput })
      );
      setAddProductInput("");
    }
  };
  return (
    <>
      <div>
        <input
          type="text"
          name="addProduct"
          value={addProductInput}
          onChange={(e) => setAddProductInput(e.target.value)}
        />
        <button type="#" onClick={AddProductDispatcher}>
          Add Product
        </button>
      </div>
    </>
  );
}
