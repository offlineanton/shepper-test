import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import ErrorMessage from "../ErrorMessage";

interface FormikSelectProps {
    name: string;
    value: string;
    label: string;
    error?: string;
    onChange: (e: string) => void;
    placeholder?: string;
    options: {
        value: string;
        label: string;
    }[];
}
  
const FormikSelect = ({
    name,
    label,
    value,
    options,
    error,
    onChange,
    placeholder,
}: FormikSelectProps) => {
    return (
        <>
            <label>
                {label}
                <Select
                    name={name}
                    value={value}
                    onValueChange={onChange}
                >
                    <SelectTrigger>
                        <SelectValue placeholder={placeholder} />
                    </SelectTrigger>
                    <SelectContent>
                        {options.map(option => (
                            <SelectItem 
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </label>
            
            {error && 
                <ErrorMessage>{error}</ErrorMessage>
            }
        </>

    )
}

export default FormikSelect;