import { FormElement } from "@/components/FormElement/FormElement";
import FormLoaderElement from "@/components/FormLoaderElement";
import FormWrapper from "@/components/FormWrapper";
import { Form, Formik } from "formik";

interface FormLoaderProps {
    // TODO: type
    form: {
        formName: string;
        formElements: FormElement[];
    };
}

type ResultObject = {
    [key: string]: undefined;
};

const FormLoader = ({
    form
}: FormLoaderProps) => {
    console.log(form.formElements);
    return (
        <FormWrapper>
            <h1 className="text-4xl mb-10">{form.formName}</h1>

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
                }}
            >
                {({
                    values,
                    // errors,
                    // touched,
                    handleChange,
                    // setFieldValue,
                }) => {
                    console.log("values", values);
                    return (
                        <Form>
                            {form.formElements.map(formElement => {
                                return (
                                    <FormLoaderElement formElement={formElement} onChange={handleChange} value={values[formElement.name]} />
                                )
                            })}
                        </Form>
                    )
                }}
            
            </Formik>
        </FormWrapper>
    )
};

export default FormLoader;