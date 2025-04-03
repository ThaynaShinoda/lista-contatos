import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FilterState = {
  search?: string;
  category: "All" | "Normal" | "Favorites" | "Work"
}

const initialState: FilterState = {
  search: "",
  category: "All",
}

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    newSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    modifyCategory: (state, action: PayloadAction<"All" | "Normal" | "Favorites" | "Work">) => {
      state.category = action.payload
    }

  }
})

export const { newSearch, modifyCategory } = filterSlice.actions
export default filterSlice.reducer