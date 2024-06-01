import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Setupstate = {
  theme: string;
  number_of_players: number;
  grid_size: number;
  start: boolean;
  currentPlayer: number;
  time: string;
  moves: number;
  matchedItems: (string | number)[];
  card1: string | number | null;
  card2: string | number | null;
  pickedCardIndex: number[];
};

const initialState: Setupstate = {
  theme: "icons",
  number_of_players: 1,
  grid_size: 4,
  start: false,
  currentPlayer: 1,
  time: "0",
  moves: 0,
  matchedItems: [],
  card1: null,
  card2: null,
  pickedCardIndex: [],
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
    changePlayer: (state) => {
      if (state.currentPlayer >= state.number_of_players) {
        state.currentPlayer = 1;
      } else {
        state.currentPlayer += 1;
      }
    },
    setTime: (state, action: PayloadAction<string>) => {
      state.time = action.payload;
    },
    setMoves: (state) => {
      state.moves += 1;
    },
    matchedArray: (state, action: PayloadAction<string | number>) => {
      state.matchedItems = [...state.matchedItems, action.payload];
    },
    setCard1: (state, action: PayloadAction<string | number | null>) => {
      state.card1 = action.payload;
    },
    setCard2: (state, action: PayloadAction<string | number | null>) => {
      state.card2 = action.payload;
    },
    setPickedIndex: (state, action: PayloadAction<number>) => {
      state.pickedCardIndex = [...state.pickedCardIndex, action.payload];
    },
    clearPickedIndex: (state) => {
      state.pickedCardIndex = [];
    },
  },
});

export const {
  toggleTheme,
  toggleGridSize,
  setNoOfPlayers,
  startGame,
  changePlayer,
  setTime,
  setMoves,
  matchedArray,
  setCard2,
  setCard1,
  setPickedIndex,
  clearPickedIndex,
} = setupSlice.actions;
export default setupSlice.reducer;
