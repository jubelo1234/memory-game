import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Setupstate = {
  theme: string;
  number_of_players: number;
  grid_size: number;
  start: boolean;
  gameEnd: boolean;
  currentPlayer: number;
  time: string;
  moves: number;
  matchedItems: (string | number)[];
  gridItems: (string | number)[];
  gridItemsStore: (string | number)[];
  card1: string | number | null;
  card2: string | number | null;
  pickedCardIndex: number[];
  player1Score: number;
  player2Score: number;
  player3Score: number;
  player4Score: number;
  seconds: number;
  stopTimer: boolean;
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
  gameEnd: false,
  gridItems: [],
  gridItemsStore: [],
  player1Score: 0,
  player2Score: 0,
  player3Score: 0,
  player4Score: 0,
  seconds: 0,
  stopTimer: false,
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
    setGameEnd: (state) => {
      state.gameEnd = true;
    },
    setGameStart: (state) => {
      state.gameEnd = false;
    },
    setGridItems: (state, action: PayloadAction<number[] | string[]>) => {
      state.gridItems = action.payload;
      state.gridItemsStore = action.payload;
    },
    deleteGridItem: (state, action: PayloadAction<number | string>) => {
      state.gridItems = state.gridItems.filter(
        (item) => item != action.payload
      );
    },
    setSeconds: (state) => {
      state.seconds += 1;
    },
    setStopTimer: (state, action: PayloadAction<boolean>) => {
      state.stopTimer = action.payload;
    },
    restart: (state) => {
      state.gridItems = state.gridItemsStore;
      state.time = "0";
      state.moves = 0;
      state.pickedCardIndex = [];
      state.matchedItems = [];
      state.card1 = null;
      state.card2 = null;
      state.currentPlayer = 1;
      state.gameEnd = false;
      state.seconds = 0;
      state.player1Score = 0;
      state.player2Score = 0;
      state.player3Score = 0;
      state.player4Score = 0;
    },
    newGame: (state) => {
      (state.theme = "icons"),
        (state.number_of_players = 1),
        (state.grid_size = 4),
        (state.start = false),
        (state.gridItems = []);
      state.seconds = 0;
      state.gridItemsStore = [];
      state.time = "0";
      state.moves = 0;
      state.pickedCardIndex = [];
      state.matchedItems = [];
      state.card1 = null;
      state.card2 = null;
      state.currentPlayer = 1;
      state.gameEnd = false;
      state.player1Score = 0;
      state.player2Score = 0;
      state.player3Score = 0;
      state.player4Score = 0;
    },
    scorePlayer: (state, action: PayloadAction<number>) => {
      switch (action.payload) {
        case 1:
          state.player1Score += 1;
          break;
        case 2:
          state.player2Score += 1;
          break;
        case 3:
          state.player3Score += 1;
          break;
        case 4:
          state.player4Score += 1;
          break;

        default:
          state.player1Score = action.payload;
      }
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
  setGameEnd,
  setGridItems,
  deleteGridItem,
  setGameStart,
  restart,
  newGame,
  scorePlayer,
  setSeconds,
  setStopTimer,
} = setupSlice.actions;
export default setupSlice.reducer;
