import React from "react";
import "./App.css";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useParams,
} from "react-router-dom";
import RepositoryIssues from "./pages/RepositoryIssues";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/:id"} element={<RepositoryIssues />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
