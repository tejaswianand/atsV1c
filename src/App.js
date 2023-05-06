import "./resources/styles/main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Apply from "./pages/Apply";
import CheckStatus from "./pages/CheckStatus";
import Support from "./pages/Support";
import Description from "./pages/Description";
import NewJob from "./pages/NewJob";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/jobs" Component={Jobs}></Route>
        <Route path="/jobs/desc/:postId" Component={Description}></Route>
        <Route path="/new-job" Component={NewJob}></Route>

        <Route path="/apply" Component={Apply}></Route>
        <Route path="/check-status" Component={CheckStatus}></Route>
        <Route path="/support" Component={Support}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
