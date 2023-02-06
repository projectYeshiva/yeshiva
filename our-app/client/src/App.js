import {
  BrowserRouter,
  BrowserRouter as router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import Tests from "./Pages/Tests/Tests";
import Grade from "./Pages/Grade/Grade.js";
import Diaries from "./Pages/Diaries/Diaries.js";
import NotFound from "./Pages/NotFound/NotFound.js";

function App() {
  const masectot = [
    "שבת",
    "ברכות",
    "ראש השנה",
    "זרעים",
    "עירובין",
    "פסחים",
    "שקלים",
    "יומא",
    "סוכה",
    "ביצה",
    "תענית",
    "מגילה",
    "מועד קטן",
    "חגיגה",
    "כתובות",
    "נדרים",
    "נזיר",
    "סוטה",
    "יבמות",
    "גיטין",
    "קידושין",
    "בבא קמא",
    "בבא מציעא",
    "בבא בתרא",
    "סנהדרין",
    "מכות",
    "שבועות",
    "עבודה זרה",
    "זבחים",
    "מנחות",
    "חולין",
    "בכורות",
    "תמורה",
  ];
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/מבחנים" element={<Tests masectot={masectot} />} />
          <Route path="/ציונים" element={<Grade />} />
          <Route path="/יומנים" element={<Diaries masectot={masectot}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>{" "}
    </>
  );
}

export default App;
