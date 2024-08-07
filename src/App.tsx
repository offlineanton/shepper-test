import { Routes, Route, useNavigate } from "react-router-dom";
import FormBuilder from "./routes/FormBuilder";
import { useState } from "react";
import FormList from "./routes/FormList";
import FormLoader from "./routes/FormLoader";

function App() {
  const navigate = useNavigate();

  const [selectedFormIndex, setSelectedFormIndex] = useState<number | undefined>(0);

  const forms = !!localStorage.getItem("forms") ? JSON.parse(localStorage.getItem("forms")!) : [];

  // TODO: type
  const saveForm = (form: any) => {
    localStorage.setItem("forms", JSON.stringify([...forms, form]));
    navigate("/");
  };

  console.log("forms", forms);

  const fillInForm = (index: number) => {
    setSelectedFormIndex(index);
    navigate("/form-loader");
  }

  return (
    <>
      <Routes>
        <Route path="/form-builder" element={<FormBuilder saveForm={saveForm} />} />
        <Route path="/form-loader" element={<FormLoader form={selectedFormIndex !== undefined ? forms[selectedFormIndex] : undefined}/>} />
        <Route path="/" element={<FormList forms={forms} fillInForm={fillInForm} />}>
        </Route>
      </Routes>
    </>
  );
}

export default App;
