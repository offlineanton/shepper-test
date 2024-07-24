import FormWrapper from "@/components/FormWrapper"
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";

interface FormListProps {
    // TODO: type
    forms: any[];
    fillInForm: (index: number) => void;
}

const FormList = ({
    forms,
    fillInForm
}: FormListProps) => {

    return (
        <FormWrapper>
            <div className="flex justify-between">
                <h1 className="text-4xl mb-10">Your forms</h1>


                <Link to="/form-builder" >
                    <Button>
                        Add another form
                    </Button>
                </Link>
            </div>

            {forms.map((form, index) => (
                <Card className="p-5 mt-10 flex justify-between items-center">
                    <p>
                        {form.formName}
                    </p>

                    <Button onClick={() => fillInForm(index)}>
                        Fill in form
                    </Button>
                </Card>
            ))}
        </FormWrapper>
    )
}

export default FormList;