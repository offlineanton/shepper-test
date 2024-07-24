// example output of form builder: 
/**
 * 
 * {
 *  formName: string
 *  id: string
 *  formElements: [
 *      {
 *          type: InputType
 *          label: string
 *          name: string
 *          
 *          IF InputType === group
 *          
 *          groupFormElements: []
 *      }
 *  ]
 * }
 * 
 */

import FormElement from "@/components/FormElement/FormElement";
import FormWrapper from "@/components/FormWrapper";
import FormikInput from "@/components/inputs/FormikInput";
import { Button } from "@/components/ui/button";
import { Form, Formik } from "formik";
import * as Yup from 'yup';

const formBuilderSchema = Yup.object().shape({
    formName: Yup.string().required("Form name is required"),
    formElements: Yup.array()
        .of(
            Yup.object({
                type: Yup.string().required("Input type is required"),
                name: Yup.string().required("Input name is required"),
                label: Yup.string().required("Label is required"),
            })
        )
        .min(1, "Please add a form element")
});

export interface EmptyFormElement {
    name: string;
    type: string;
    label: string;
}

export const emptyFormElement = {
    name: "",
    type: "",
    label: "",
}

const FormBuilder = () => {
    return (
        <>
            <FormWrapper>
                <h1 className="text-4xl mb-10">Form Builder</h1>
                <Formik 
                    initialValues={{
                        formName: "",
                        formElements: [] as EmptyFormElement[],
                    }}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validationSchema={formBuilderSchema}
                    onSubmit={() => {
                        console.error("dont")
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        setFieldValue,
                    }) => {
                        console.log("errors", errors);
                        console.log("values", values);

                        const handleAddFormElement = () => {
                            setFieldValue("formElements", [...values.formElements, emptyFormElement]);
                        }

                        const handleRemoveFormElement = (index: number) => {
                            setFieldValue(
                                "formElements",
                                values.formElements.filter((_, i) => i !== index)
                            );
                        };

                        return (
                            <Form>
                                <FormikInput
                                    name="formName"
                                    label="Form Name"
                                    value={values.formName}
                                    onChange={handleChange}
                                    error={touched.formName ? errors.formName : undefined}
                                    placeholder={"Enter the name of your form here"}
                                />

                                {values.formElements.map((formElement, i) => {
                                    return (
                                        <FormElement
                                            key={i}
                                            index={i}
                                            setFieldValue={setFieldValue}
                                            handleRemoveFormElement={handleRemoveFormElement}
                                            formElement={formElement}
                                            errors={
                                                errors.formElements 
                                                ? (errors.formElements[i] as { [key: string]: string }) 
                                                : undefined}
                                        />
                                    )
                                })}

                                <Button 
                                    className="mt-5"
                                    type="button" 
                                    variant="outline"
                                    onClick={handleAddFormElement}
                                >
                                    Add form element
                                </Button>

                                <div className="flex justify-end">
                                    <Button 
                                        className="mt-10"
                                        variant="default"
                                    >
                                        Submit
                                    </Button>
                                </div>
                            </Form>
                        )
                    }}
                </Formik>
            </FormWrapper>
            

            {/* Add a form title */}
            {/* generates ID */}
            {/* Add new form element button */}
            {/* Select an input type */}
            {/* Input name, input label */}
            {/* If its a select, need to add select items */}
            {/* Groups? */}
            {/* Finish form button */}
        </>
    )
}

export default FormBuilder;