import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import { List } from "./components/list/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
