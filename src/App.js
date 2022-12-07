import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNum, decNum } from "./actions/index";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import City from "./components/City";
import Country from "./components/Country";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
function App() {
  const dispatch = useDispatch();
  const myState = useSelector((state) => state.changeTheNumber);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>

          <Route exact path='/city' element={<City />} />
          <Route exact path='/country' element={<Country />} />
          <Route exact path='/' element={<Home />} />

        </Routes>
      </BrowserRouter>
      {/* <div className="container ">
        <button title="increment" onClick={() => dispatch(decNum(5))}>
          -
        </button>
        <label> {myState} </label>
        <button title="increment" onClick={() => dispatch(incNum(5))}>
          +
        </button>
      </div>
      <h1 className="text-3xl font-bold text-bold bg-red-100">Hello world!</h1> */}
    </div>
  );
}

export default App;
