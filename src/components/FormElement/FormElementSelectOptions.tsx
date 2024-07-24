import { emptyFormElement, EmptyFormElement } from "@/routes/FormBuilder";
import { Button } from "../ui/button";
import { FormikErrors } from "formik";
import FormElement from "./FormElement";
import { Card } from "../ui/card";
import FormikInput from "../inputs/FormikInput";
import IndexMarker from "../IndexMarker";
import { useState } from "react";

interface FormElementSelectOptionsProps {
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => Promise<void | FormikErrors<{
        formName: string;
        formElements: EmptyFormElement[];
    }>>;
    index: number;
    options: FormElementSelectOption[];
}

export type FormElementSelectOption = {
    value: string;
    label: string;
}

const emptyOption = {
    label: "",
    value: "",
}

const FormElementSelectOptions = ({
    setFieldValue,
    index,
    options,
}: FormElementSelectOptionsProps) => {
    const [optionsHidden, setOptionsHidden] = useState(false);

    const handleAddNewSelectOption = () => {
        setFieldValue(`formElements[${index}].options`, [...options, emptyOption])
    };

    const handleRemoveSelectOption = (optionIndex: number) => {
        setFieldValue(`formElements[${index}].options`, options.filter((_, i) => i !== optionIndex));
    }

    return (
        <>
            <div className="flex justify-end mt-5">
                {!optionsHidden &&
                    <Button type="button" onClick={handleAddNewSelectOption}>
                        Add an option
                    </Button>
                }

                {options.length > 0 &&
                    <Button 
                        type="button" 
                        onClick={() => setOptionsHidden(!optionsHidden)} 
                        className="ml-3"
                        variant="outline"
                    >
                        {optionsHidden ? "Show" : "Hide"} options
                    </Button>
                }
            </div>
                {!optionsHidden && (
                    <>
                        {options.map((option, optionIndex) => (
                            <Card className="mt-5 p-5 relative">
                                <IndexMarker index={optionIndex + 1} color="bg-blue-800" />

                                <div className="flex justify-end">
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        onClick={() => handleRemoveSelectOption(optionIndex)}
                                    >
                                        Remove Option
                                    </Button>
                                </div>

                                <FormikInput
                                    name={`formElements[${index}].options[${optionIndex}].label`}
                                    onChange={
                                        (e: React.ChangeEvent<any>) => {
                                            setFieldValue(
                                                `formElements[${index}].options[${optionIndex}].label`, e.currentTarget.value
                                            )
                                        }
                                    }
                                    value={option.label}
                                    label={"Label"}
                                    // TODO: error handling for options
                                    // error={errors ? errors["label"] : undefined}
                                />

                                <FormikInput
                                    name={`formElements[${index}].options[${optionIndex}].value`}
                                    onChange={
                                        (e: React.ChangeEvent<any>) => {
                                            setFieldValue(
                                                `formElements[${index}].options[${optionIndex}].value`, e.currentTarget.value
                                            )
                                        }
                                    }
                                    value={option.value}
                                    label={"Value"}
                                    // TODO: error handling for options
                                    // error={errors ? errors["label"] : undefined}
                                />
                            </Card>
                        ))}
                    </>
                )}
        </>
    )
};

export default FormElementSelectOptions;