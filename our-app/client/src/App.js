import {
  BrowserRouter,
  BrowserRouter as router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import Tests from "./Pages/Tests/Tests";
import EditingQuestions from "./components/EditingQuestions/EditingQuestions";
import Grade from "./Pages/Grade/Grade.js";
import DataEntry from "./components/DataEntry/DataEntry.js";


function App() { 
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/מבחנים" element={<Tests />} />
        </Routes>
      </BrowserRouter>{" "}
    </>
  );
}

export default App;
