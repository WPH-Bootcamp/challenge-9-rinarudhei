import { FoodCartItem } from "@/types/restaurant";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { items: FoodCartItem[] } = { items: [] };

const foodSlice = createSlice({
  name: "foodSlice",
  initialState,
  reducers: {
    addFood: (state, action: PayloadAction<FoodCartItem>) => {
      let foodIndex = state.items.findIndex((f) => f.id === action.payload.id);
      if (foodIndex >= 0) {
        state.items[foodIndex].quantity++;
      } else {
        state.items.push(action.payload);
      }
    },
    removeFood: (state, action: PayloadAction<number>) => {
      let foodIndex = state.items.findIndex((f) => f.id === action.payload);
      if (foodIndex < 0) return;

      state.items[foodIndex].quantity--;

      state.items = state.items.filter((f) => f.quantity > 0);
    },
  },
});

export const { addFood, removeFood } = foodSlice.actions;
export default foodSlice.reducer;
