import { FormikErrors } from "formik";
import FormElementWrapper from "./FormElementWrapper";
import FormikSelect from "../inputs/FormikSelect";
  
interface FormElementProps {
    index: number;
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => Promise<void | FormikErrors<{
        formName: string;
        formElements: never[];
    }>>;
    formElement: {
        type: string;
        name: string;
        label: string;
    }
}

const FormElement = ({
    index,
    setFieldValue,
    formElement,
}: FormElementProps) => {
    return (
        <FormElementWrapper>
            <FormikSelect
                name={`formElements[${index}].type`}
                onChange={
                    (value: string) => {
                        setFieldValue(`formElements[${index}].type`, value)
                    }
                }
                options={[
                    { value: "text", label: "Text" },
                    { value: "textarea", label: "Textarea" },
                    { value: "checkbox", label: "Checkbox" },
                    { value: "select", label: "Select" },
                    { value: "group", label: "Group" },
                ]}
                value={formElement.type}
                label="Type"
            />
        </FormElementWrapper>
    )
}

/*

- `text` - a standard short-form text field.
- `textarea` - a standard long-form text field.
- `checkbox` - a checkbox that outputs true/false.
- `select` - a select dropdown, accepts possible options, allows customer to select one.
- `group` - Allows depth within a form. Can hold child fields, and has a label of it's own.

*/

export default FormElement;