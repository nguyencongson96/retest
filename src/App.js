import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import All from "./components/All/All";
import Active from "./components/Active/Active";
import Completion from "./components/Completion/Completion";
import { ListProvider } from "./components/ListContext/ListContext";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Link to="/">All</Link>
        <Link to="/active">Active</Link>
        <Link to="/done">Completion</Link>
      </div>
      <ListProvider>
        <Routes>
          <Route exact path="/" element={<All />} />
          <Route exact path="/active" element={<Active />} />
          <Route exact path="/done" element={<Completion />} />
        </Routes>
      </ListProvider>
    </div>
  );
}

export default App;
