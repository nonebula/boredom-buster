import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/core/Navbar";
import Hero from "./components/core/Hero";
import ActivityComponent from "./components/ActivityComponent";
import MemeFun from "./pages/MemeFun";
import Footer from "./components/core/Footer";
import RiddleComponent from "./components/RiddleComponent";
// import FunFacts from "./components/FunFacts";
import RockPaperScissorsComponent from "./components/RockPaperScissorsComponent";
import WouldYouRatherComponent from "./components/WouldYouRatherComponent";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Routes>
        <Route path="/" element={<ActivityComponent />} />
        <Route path="/memefun" element={<MemeFun />} />
        <Route path="/riddles" element={<RiddleComponent />} />
        {/* <Route path="/funfacts" element={<FunFacts />} />  */}
        <Route
          path="/rockpaperscissors"
          element={<RockPaperScissorsComponent />}
        />
        <Route path="/wouldyourather" element={<WouldYouRatherComponent />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
