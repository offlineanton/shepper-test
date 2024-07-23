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
    onBlur: {
        (e: React.FocusEvent<any>): void;
        <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
    }
}

const FormikInput = ({
    name,
    label,
    value,
    error,
    onChange,
    onBlur,
}: FormikInputProps) => {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <Input
                id={name}
                name={name}
                // label="Form Name"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                // error={formik.touched.formName && Boolean(formik.errors.formName)}
                // helperText={formik.touched.email && formik.errors.email} 
            />
            {error && 
                <p>{error}</p> 
            }
        </>
    )
};

export default FormikInput;