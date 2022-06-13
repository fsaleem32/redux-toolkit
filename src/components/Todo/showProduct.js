import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  delProductAction,
  editProductItem,
} from "../store/reducers/ToDoReducer";

export default function ShowProduct() {
  const [ToggleEdit, setToggleEdit] = useState(false);
  const [textAreaTetx, setTextAreaText] = useState("");
  const [editTextValue, setEditTextValue] = useState(null);
  const dispatch = useDispatch();

  let store = useSelector((state) => {
    // console.log(state.addProductred.Product);
    return state.addProductred.Product;
  });
  const DelItem = (id) => {
    dispatch(delProductAction(id));
  };
  const EditItem = (id) => {
    let newEditedData = store.find((item) => {
      return item.id === id;
    });
    setEditTextValue(newEditedData.id);
    setToggleEdit(true);
    setTextAreaText(newEditedData.data);
  };
  const cancelAction = () => {
    setToggleEdit(false);
  };
  const saveEditText = () => {
    setToggleEdit(false);
    if (ToggleEdit && editTextValue) {
      //   console.log("--- ", textAreaTetx);
      dispatch(editProductItem({ id: editTextValue, data: textAreaTetx }));
    }
  };
  return (
    <>
      <div>
        {store.map((item) => {
          //   console.log("item.id ==> ", item.id);
          //   console.log("editTextVal ==> ", editTextValue);
          return (
            <div key={item.id}>
              {ToggleEdit && item.id === editTextValue ? (
                <div>
                  <div>
                    <input
                      value={textAreaTetx}
                      onChange={(e) => setTextAreaText(e.target.value)}
                    />
                  </div>
                  <div>
                    <button onClick={saveEditText}>Save</button>
                    <button onClick={cancelAction}>Cancel</button>
                  </div>
                </div>
              ) : (
                <h3 className="item_name">
                  {item.data}

                  <div>
                    <div>
                      <button onClick={() => DelItem(item.id)}>
                        Delete Item
                      </button>
                    </div>
                    <div>
                      <button onClick={() => EditItem(item.id)}>
                        Edit Item
                      </button>
                    </div>
                  </div>
                </h3>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
