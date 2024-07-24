import { FormElement } from "./FormElement/FormElement";
import FormikInput from "./inputs/FormikInput";

interface FormLoaderElementProps {
    formElement: FormElement;
    onChange: {
        (e: React.ChangeEvent<any>): void;
        <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
    };
    value?: string;
}

const FormLoaderElement = ({
    formElement,
    value,
    onChange
}: FormLoaderElementProps) => {

    if (formElement.type === "text") {
        return (
            <div>
                <FormikInput 
                    value={value || ""}
                    name={formElement.name}
                    label={formElement.label}
                    
                    onChange={onChange}
                />
                {/* text */}
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