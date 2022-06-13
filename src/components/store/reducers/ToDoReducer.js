import { createSlice, current } from "@reduxjs/toolkit";

export const addProduct = createSlice({
  name: "add Product",
  initialState: {
    Product: [],
  },
  reducers: {
    addProductAction: (state, action) => {
      const { id } = action.payload;
      state.Product = [
        ...state.Product,
        {
          id: id,
          data: action.payload.data,
        },
      ];
      //   console.log(state.Product);
    },
    delProductAction: (state, action) => {
      let stateData = current(state);
      console.log(stateData);
      // let data = JSON.stringify(state, undefined, 2)
      let product = stateData.Product.filter(
        (item) => item.id !== action.payload
      );
      state.Product = product;
    },
    editProductItem: (state, action) => {
      //   console.log("payload-- ", action.payload);
      let stateData = current(state.Product);
      //   console.log("state-- ", stateData);

      let product = stateData.find((item) => item.id == action.payload.id);

      //   console.log("Product==!! ", product.data.id);
      const index = stateData.indexOf(product);
      //   console.log("index==!! ", index);
      state.Product[index].data = action.payload.data;
      const p1 = current(state.Product);
      console.log("state==!! ", p1);
      // console.log(product)
    },
  },
});

export const { addProductAction, delProductAction, editProductItem } =
  addProduct.actions;

export default addProduct.reducer;
