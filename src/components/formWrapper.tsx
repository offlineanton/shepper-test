interface FormWrapperProps {
    children: any
}

const FormWrapper = ({ children }: FormWrapperProps) => {
    return (
        <div className="max-w-xl mx-auto mt-20">
            {children}
        </div>
    )
}

export default FormWrapper;