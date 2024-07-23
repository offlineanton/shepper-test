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

import FormikInput from "@/components/inputs/formikInput";
import { Form, Formik } from "formik";
import * as Yup from 'yup';

const FormBuilderSchema = Yup.object().shape({
    formName: Yup.string().required("Form name is required"),
});

const FormBuilder = () => {
    return (
        <>
            <h1>Form Builder</h1>
            <Formik 
                initialValues={{
                    formName: "",
                    formElements: []
                }}
                validateOnChange={false}
                validateOnBlur={false}
                validationSchema={FormBuilderSchema}
                onSubmit={() => {}}
            >
                {({
                    values,
                    errors,
                    handleBlur,
                    handleChange
                }) => {
                    return (
                        <Form>
                            <FormikInput 
                                name="formName"
                                label="Form Name"
                                value={values.formName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.formName}
                            />

                            <button>submit</button>
                        </Form>
                    )
                }}
            </Formik>

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