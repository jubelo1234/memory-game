import { useSelector } from "react-redux";
import "./App.css";
import GamePage from "./pages/GamePage";
import Home from "./pages/Home";
import { RootState } from "./state/store";
import { AnimatePresence } from "framer-motion";

function App() {
  const gamePage = useSelector((state: RootState) => state.setup.start);

  return (
    <AnimatePresence mode="wait">
      {!gamePage ? <Home /> : <GamePage />}
    </AnimatePresence>
  );
}

export default App;
