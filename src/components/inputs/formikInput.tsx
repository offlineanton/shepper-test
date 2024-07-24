
import ErrorMessage from "../ErrorMessage";
import { Input } from "../ui/input";

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

const FormikInput = ({
    name,
    label,
    value,
    error,
    onChange,
    placeholder,
}: FormikInputProps) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <Input
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                // onBlur={onBlur}
                placeholder={placeholder}
            />
            {error && 
                <ErrorMessage>{error}</ErrorMessage>
            }
        </>
    )
};

export default FormikInput;