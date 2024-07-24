import FormWrapper from "@/components/FormWrapper"
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";

interface FormListProps {
    // TODO: type
    forms: any[]
}

const FormList = ({
    forms
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

            {forms.map(form => (
                <Card className="p-5 mt-10 flex justify-between items-center">
                    <p>
                        {form.formName}
                    </p>

                    <Link to="/form-loader">
                        <Button>
                            Fill in form
                        </Button>
                    </Link>
                </Card>
            ))}
        </FormWrapper>
    )
}

export default FormList;