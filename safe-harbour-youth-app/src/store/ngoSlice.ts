import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NgoDetails } from "../api/ngo";
import { AppState } from ".";

export type NgosState = NgoDetails[];

const initialState: NgosState = [];

export const ngoSlice = createSlice({
  name: "ngos",
  initialState,
  reducers: {
    loadNgos: (state, action: PayloadAction<NgosState>) => {
      return action.payload; // Correct usage of replacing state
    },
    updateNgo: (state, action: PayloadAction<NgoDetails>) => {
      const index = state.findIndex(
        (ngo) => ngo._id.toString() === action.payload._id.toString()
      );
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload }; // Ensure this merges changes rather than direct assignment if immutable changes are required
      }
    },
    deleteNgo: (state, action: PayloadAction<string>) => {
      return state.filter((ngo) => ngo._id.toString() !== action.payload); // Use the ID string directly
    },
  },
});

export const { loadNgos, updateNgo, deleteNgo } = ngoSlice.actions;

export const selectAllNgos = (state: AppState) => state.ngos;
export const selectNgoById = (id: string) => (state: AppState) =>
  state.ngos.find((ngo) => ngo._id.toString() === id);

export default ngoSlice.reducer;

// // src/store/ngoSlice.ts
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { NgoDetails } from '../api/ngo';
// import { AppState } from '.';

// export type NgosState = NgoDetails[];

// const initialState: NgosState = [];

// export const ngoSlice = createSlice({
//     name: 'ngos',
//     initialState,
//     reducers: {
//         loadNgos: (state, action: PayloadAction<NgosState>) => {
//             return action.payload; // Replace the entire state
//         },
//         addNgo: (state, action: PayloadAction<NgoDetails>) => {
//             state.push(action.payload);
//         },
//         updateNgo: (state, action: PayloadAction<NgoDetails>) => {
//             const index = state.findIndex(ngo => ngo._id.toString() === action.payload._id.toString());
//             if (index !== -1) {
//                 state[index] = action.payload;
//             }
//         },
//         deleteNgo: (state, action: PayloadAction<mongoose.Schema.Types.ObjectId>) => {
//             return state.filter(ngo => ngo._id.toString() !== action.payload.toString());
//         }
//     },
// });

// export const { loadNgos, addNgo, updateNgo, deleteNgo } = ngoSlice.actions;

// export const selectAllNgos = (state: AppState) => state.ngos;
// export const selectNgoById = (id: string) => (state: AppState) =>
//     state.ngos.find(ngo => ngo._id.toString() === id);

// export default ngoSlice.reducer;
