import { Routes, Route } from "react-router-dom";
import FormBuilder from "./routes/FormBuilder";

function App() {
  return (
    <>
      <Routes>
        <Route path="/form-builder" element={<FormBuilder />} />
        <Route path="*" element={<div>404</div>} />
        <Route path="/" element={<div>root</div>}>
        </Route>
      </Routes>
    </>
  );
}

export default App;
