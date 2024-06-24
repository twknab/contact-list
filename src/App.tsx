import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactList from "./views/ContactList";
import ContactDetails from "./views/ContactDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactList />} />
        <Route path="/contact/:id" element={<ContactDetails />} />
      </Routes>
    </Router>
  );
}

export default App
