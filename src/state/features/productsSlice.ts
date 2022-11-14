import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {initialState, IpropDataType} from './intialstate';

export const productsSlice = createSlice({
  name: 'prouducts',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<IpropDataType[]>) => {
      state.data = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const {setProducts, setLoading} = productsSlice.actions;
export default productsSlice.reducer;
