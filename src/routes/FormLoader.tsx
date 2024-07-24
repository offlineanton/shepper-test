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

const FormLoader = ({
    form
}: FormLoaderProps) => {
    console.log(form);
    return (
        <FormWrapper>
            <h1 className="text-4xl mb-10">{form.formName}</h1>

            <Formik
                //TODO: init values
                initialValues={{
                }}
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
                    // values,
                    // errors,
                    // touched,
                    // handleChange,
                    // setFieldValue,
                }) => {
                    return (
                        <Form>
                            {form.formElements.map(formElement => (
                                <FormLoaderElement formElement={formElement} />
                            ))}
                        </Form>
                    )
                }}
            
            </Formik>
        </FormWrapper>
    )
};

export default FormLoader;