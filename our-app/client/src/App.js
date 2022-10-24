import {
  BrowserRouter,
  BrowserRouter as router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import Tests from "./Pages/Tests/Tests";
import EditingQuestions from "./Pages/EditingQuestions/EditingQuestions";
function App() {

  const masectot = ["שבת", "ברכות", "ראש השנה"];
  const masecet = masectot.map((el) => ({ value: el, label: el }));
  const soogim = ["גפת", "רשי", "גמרשי"];
  const soog = soogim.map((el) => ({ value: el, label: el }));
  const prakim = ["א", "ב", "ג", "ד"];
  const perek = prakim.map((el) => ({ value: el, label: el }));
  const dapim = ["ב", "ג", "ד"];
  const daf = dapim.map((el) => ({ value: el, label: el }));

  const categories = [
    {
      label: "מסכת",
      select: masecet,
    },
    {
      label: "סוג",
      select: soog,
    },
    { label: "פרק", select: perek },
    {
      label: "דף",
      select: daf,
    },
  ];
  return (
    <>
 <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/מבחנים" element={<Tests/>} /> 
        <Route path="/מבחנים/עריכת שאלות" element={<EditingQuestions categories={categories}/>} /> 

        </Routes>
      </BrowserRouter>    </>
  );
}

export default App;
