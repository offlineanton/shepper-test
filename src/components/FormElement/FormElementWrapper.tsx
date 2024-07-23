import { Card } from "../ui/card"

const FormElementWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="mt-10 mb-10">
            <Card>
                <div className="p-5">
                    {children}
                </div>
            </Card>
        </div>
    )
};

export default FormElementWrapper;