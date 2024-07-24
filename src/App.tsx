import { Routes, Route, useNavigate } from "react-router-dom";
import FormBuilder from "./routes/FormBuilder";
import { useState } from "react";
import FormList from "./routes/FormList";
import FormLoader from "./routes/FormLoader";

const startForm = [
  {
      "formName": "Form name 1",
      "formElements": [
          {
              "name": "firstname",
              "type": "text",
              "label": "First name"
          },
          {
              "name": "description",
              "type": "textarea",
              "label": "Description"
          },
          {
              "name": "happy",
              "type": "checkbox",
              "label": "Are you happy?"
          },
          {
              "name": "colour",
              "type": "select",
              "label": "Choose a colour",
              "options": [
                  {
                      "label": "Red",
                      "value": "red"
                  },
                  {
                      "label": "Blue",
                      "value": "blue"
                  },
                  {
                      "label": "Green",
                      "value": "green"
                  },
                  {
                      "label": "Yellow",
                      "value": "yellow"
                  }
              ]
          }
      ]
  }
];


function App() {
  const navigate = useNavigate();

  // TODO: type
  const [savedForms, setSavedForms] = useState<any[]>(startForm);
  const [selectedFormIndex] = useState<number | undefined>(0);

  // TODO: type
  const saveForm = (form: any) => {
    setSavedForms([...savedForms, form]);
    navigate("/");
    console.log(savedForms);
  };

  console.log(savedForms);

  return (
    <>
      <Routes>
        <Route path="/form-builder" element={<FormBuilder saveForm={saveForm} />} />
        <Route path="/form-loader" element={<FormLoader form={selectedFormIndex !== undefined ? savedForms[selectedFormIndex] : undefined}/>} />
        <Route path="/" element={<FormList forms={savedForms} />}>
        </Route>
      </Routes>
    </>
  );
}

export default App;
