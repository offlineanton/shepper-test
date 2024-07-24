import { FormElement } from "./FormElement/FormElement";

interface FormLoaderElementProps {
    formElement: FormElement;
}

const FormLoaderElement = ({
    formElement
}: FormLoaderElementProps) => {

    if (formElement.type === "text") {
        return (
            <div>
                text
            </div>
        )
    }

    if (formElement.type === "checkbox") {
        return (
            <div>
                checkbox
            </div>
        )
    }

    if (formElement.type === "select") {
        return (
            <div>
                select
            </div>
        )
    }

    if (formElement.type === "textarea") {
        return (
            <div>
                textarea
            </div>
        )
    }
   
   return null;
};

export default FormLoaderElement