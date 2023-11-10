import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FetAllProduct } from "./Redux/AllproductSlice";

function App() {
  const selector = useSelector((state) => state.getALLproduct);
  const dispatch = useDispatch();
  console.log(selector);
  let [data, setData] = useState([]);
  useEffect(() => {
    dispatch(FetAllProduct());
    setData(selector.data);
  }, [data]);
  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
