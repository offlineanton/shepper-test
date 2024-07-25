import { Element } from "@/components/FormElement/FormElement";
import FormLoaderElement from "@/components/FormLoaderElement";
import FormWrapper from "@/components/FormWrapper";
import { Button } from "@/components/ui/button";
import { Form, Formik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";

interface FormLoaderProps {
    form: {
        formName: string;
        formElements: Element[];
    };
}

export type ResultObject = {
    [key: string]: undefined;
};

const FormLoader = ({
    form
}: FormLoaderProps) => {
    // TODO: type
    const [formSubmitted, setFormSubmitted] = useState<any>();

    return (
        <FormWrapper>
            <div className="mb-10">
                <Link to="/" >
                    <Button>
                        Back to list
                    </Button>
                </Link>
            </div>

            <h1 className="text-4xl mb-10">{form.formName}</h1>

            {formSubmitted ? 
                <pre>
                    {JSON.stringify(formSubmitted, null, 4)}
                </pre>
            :
                <Formik
                    initialValues={form.formElements.reduce<ResultObject>((acc, curr) => {
                        acc[curr.name] = undefined;
                        return acc;
                    }, {})}
                    validateOnChange={false}
                    validateOnBlur={false}
                    //TODO: schema
                    // validationSchema={formBuilderSchema}
                    onSubmit={(values) => {
                        // TODO: Submit form
                        setFormSubmitted(values);
                    }}
                >
                    {({
                        values,
                        handleChange,
                        setFieldValue,
                    }) => {
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