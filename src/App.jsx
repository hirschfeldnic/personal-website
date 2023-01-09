import './App.css'
import { Route, Routes } from "react-router-dom";
import Hellopage from "./Pages/Hellopage/Hellopage";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Hellopage />}></Route>
 
    </Routes>
  )
}

export default App
