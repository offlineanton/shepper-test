import { FormElement } from "@/components/FormElement/FormElement";
import FormLoaderElement from "@/components/FormLoaderElement";
import FormWrapper from "@/components/FormWrapper";
import { Button } from "@/components/ui/button";
import { Form, Formik } from "formik";
import { useState } from "react";

interface FormLoaderProps {
    // TODO: type
    form: {
        formName: string;
        formElements: FormElement[];
    };
}

export type ResultObject = {
    [key: string]: undefined;
};

const FormLoader = ({
    form
}: FormLoaderProps) => {
    console.log(form.formElements);
    // TODO: type
    const [formSubmitted, setFormSubmitted] = useState<any>();

    console.log("formSubmitted", formSubmitted);

    return (
        <FormWrapper>
            <h1 className="text-4xl mb-10">{form.formName}</h1>

            {formSubmitted ? 
                <pre>
                    {JSON.stringify(formSubmitted, null, 4)}
                </pre>
            :
                <Formik
                    //TODO: init values
                    initialValues={form.formElements.reduce<ResultObject>((acc, curr) => {
                        acc[curr.name] = undefined;
                        return acc;
                    }, {})}
                    validateOnChange={false}
                    validateOnBlur={false}
                    //TODO: schema
                    // validationSchema={formBuilderSchema}
                    onSubmit={(values) => {
                        // saveForm(values);
                        console.log("submit", values);
                        setFormSubmitted(values);
                    }}
                >
                    {({
                        values,
                        // errors,
                        // touched,
                        handleChange,
                        setFieldValue,
                    }) => {
                        console.log("values", values);
                        return (
                            <Form>
                                {form.formElements.map(formElement => {
                                    return (
                                        <FormLoaderElement 
                                            formElement={formElement} 
                                            onChange={handleChange} 
                                            value={values[formElement.name]}
                                            setFieldValue={setFieldValue} 
                                        />
                                    )
                                })}

                                <div className="flex justify-end mt-10">
                                    <Button> 
                                        Submit
                                    </Button>
                                </div>
                            </Form>
                        )
                    }}
                
                </Formik>
            }
        </FormWrapper>
    )
};

export default FormLoader;