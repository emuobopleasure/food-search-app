import { Route, BrowserRouter, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import SingleMeal from "./pages/SingleMeal";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/singlemeal/:id" element={<SingleMeal/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
