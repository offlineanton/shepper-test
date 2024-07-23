import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface FormikSelectProps {
    name: string;
    value: string;
    label: string;
    error?: string;
    onChange: (e: string) => void;
    // onBlur: {
    //     (e: React.FocusEvent<any>): void;
    //     <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
    // }
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
    // onBlur,
    placeholder,
}: FormikSelectProps) => {
    return (
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
    )
}

export default FormikSelect;