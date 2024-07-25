import { FormikErrors } from "formik";
import FormElementWrapper from "./FormElementWrapper";
import FormikSelect from "../inputs/FormikSelect";
import FormikInput from "../inputs/FormikInput";
import { Button } from "../ui/button";
import FormElementSelectOptions, { FormElementSelectOption } from "./FormElementSelectOptions";
import IndexMarker from "../IndexMarker";
  
type FormElementType = "text" | "textarea" | "checkbox" | "select" | "";

export interface Element {
    type: FormElementType;
    name: string;
    label: string;
    options?: FormElementSelectOption[];
}

interface FormElementProps {
    index: number;
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => Promise<void | FormikErrors<{
        formName: string;
        formElements: Element[];
    }>>;
    handleRemoveFormElement: (index: number) => void;
    formElement: Element;
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
                    // TODO: groups
                    // { value: "group", label: "Group" },
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

export default FormElement;