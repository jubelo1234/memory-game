import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Setupstate = {
  theme: string;
  number_of_players: number;
  grid_size: number;
  start: boolean;
};

const initialState: Setupstate = {
  theme: "icons",
  number_of_players: 1,
  grid_size: 4,
  start: false,
};

const setupSlice = createSlice({
  name: "setup",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "icons" ? "numbers" : "icons";
    },
    toggleGridSize: (state) => {
      state.grid_size = state.grid_size === 4 ? 6 : 4;
    },
    setNoOfPlayers: (state, action: PayloadAction<number>) => {
      state.number_of_players = action.payload;
    },
    startGame: (state) => {
      state.start = !state.start;
    },
  },
});

export const { toggleTheme, toggleGridSize, setNoOfPlayers, startGame } =
  setupSlice.actions;
export default setupSlice.reducer;
