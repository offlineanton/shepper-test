
import ErrorMessage from "../ErrorMessage";
import { Checkbox } from "../ui/checkbox";


interface FormikInputProps {
    name: string;
    value: string;
    label: string;
    error?: string;
    onChange: {
        (e: React.ChangeEvent<any>): void;
        <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
    };
    placeholder?: string;
}

const FormikCheckbox = ({
    name,
    label,
    value,
    error,
    onChange,
    placeholder,
}: FormikInputProps) => {
    return (
        <div className="flex items-center space-x-2">
            <label htmlFor={name}>{label}</label>

            <Checkbox 
                checked={!!value}
                id={name}
                name={name}
                value={value}
                onClick={onChange}
            />

            {error && 
                <ErrorMessage>{error}</ErrorMessage>
            }            
        </div>
    )
};

export default FormikCheckbox;