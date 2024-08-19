import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  name: string;
  price: number;
  qty: number;
  total: number;
  description: string;
  image: string;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state: any,
      action: PayloadAction<{
        id: string;
        name: string;
        price: number;
        qty: number;
        description: string;
        image: string;
        total: number;
      }>
    ) => {
      const existingItem = state.items.find(
        (item: any) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.qty += 1;
        existingItem.total = existingItem.qty * existingItem.price;
      } else {
        state.items.push({
          id: action.payload.id,
          name: action.payload.name,
          description: action.payload.description,
          price: action.payload.price,
          image: action.payload.image,
          qty: 1,
          total: action.payload.total,
        });
      }
    },
    removeFromCart: (
      state: any,
      action: PayloadAction<{ id: string; qty: number }>
    ) => {
      const existingItems = state.items.find(
        (item: any) => item.id === action.payload.id
      );
      if (existingItems) {
        state.items = state.items.filter(
          (item: any) => item.id != action.payload.id
        );
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
