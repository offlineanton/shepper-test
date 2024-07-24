import { FormikErrors } from "formik";
import { FormElement } from "./FormElement/FormElement";
import FormikInput from "./inputs/FormikInput";
import FormikSelect from "./inputs/FormikSelect";
import FormikTextarea from "./inputs/FormikTextarea";
import { ResultObject } from "@/routes/FormLoader";

interface FormLoaderElementProps {
    formElement: FormElement;
    onChange: {
        (e: React.ChangeEvent<any>): void;
        <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
    };
    value?: string;
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => Promise<void | FormikErrors<ResultObject>>;
}

const FormLoaderElement = ({
    formElement,
    value,
    onChange,
    setFieldValue,
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
            </div>
        )
    }

    if (formElement.type === "checkbox") {
        return (
            <div>
                <FormikTextarea
                    value={value || ""}
                    name={formElement.name}
                    label={formElement.label}
                    
                    onChange={onChange}
                />
            </div>
        )
    }

    if (formElement.type === "select") {
        return (
            <div>
                <FormikSelect 
                    name={formElement.name}
                    label={formElement.label}
                    value={value || ""}
                    options={formElement.options || []}
                    // error
                    onChange={
                        (value: string) => {
                            setFieldValue(formElement.name, value)
                        }
                    }
                    // onBlur,
                    // placeholder,
                />
            </div>
        )
    }

    if (formElement.type === "textarea") {
        return (
            <div>
                <FormikTextarea
                    value={value || ""}
                    name={formElement.name}
                    label={formElement.label}
                    
                    onChange={onChange}
                />
            </div>
        )
    }
   
   return null;
};

export default FormLoaderElement