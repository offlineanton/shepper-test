import { FormikErrors } from "formik";
import FormElementWrapper from "./FormElementWrapper";
import FormikSelect from "../inputs/FormikSelect";
import FormikInput from "../inputs/FormikInput";
import { EmptyFormElement } from "@/routes/FormBuilder";
import { Button } from "../ui/button";
import FormElementSelectOptions, { FormElementSelectOption } from "./FormElementSelectOptions";
import IndexMarker from "../IndexMarker";
  
type FormElement = {
    type: string;
    name: string;
    label: string;
    options?: FormElementSelectOption[];
}

interface FormElementProps {
    index: number;
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => Promise<void | FormikErrors<{
        formName: string;
        formElements: EmptyFormElement[];
    }>>;
    handleRemoveFormElement: (index: number) => void;
    formElement: FormElement;
    errors?: { [key: string]: string };
}

const FormElement = ({
    index,
    setFieldValue,
    handleRemoveFormElement,
    formElement,
    errors
}: FormElementProps) => {
    return (
        <FormElementWrapper>
            <IndexMarker index={index + 1} />

            <div className="flex justify-end">
                <Button
                    size="sm"
                    variant="ghost"
                    type="button"
                    onClick={() => handleRemoveFormElement(index)}
                >
                    Remove element
                </Button>
            </div>

            <FormikInput
                name={`formElements[${index}].name`}
                onChange={
                    (e: React.ChangeEvent<any>) => {
                        setFieldValue(`formElements[${index}].name`, e.currentTarget.value)
                    }
                }
                value={formElement.name}
                label={"Name"}
                error={errors ? errors["name"] : undefined}
            />

            <FormikInput
                name={`formElements[${index}].label`}
                onChange={
                    (e: React.ChangeEvent<any>) => {
                        setFieldValue(`formElements[${index}].label`, e.currentTarget.value)
                    }
                }
                value={formElement.label}
                label={"Label"}
                error={errors ? errors["label"] : undefined}
            />

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
                error={errors ? errors["type"] : undefined}
                label="Type"
            />

            {formElement.type === "select" &&
                <FormElementSelectOptions 
                    setFieldValue={setFieldValue} 
                    index={index} 
                    options={formElement.options || []} 
                />
            }
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