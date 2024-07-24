interface FormWrapperProps {
    children: any
}

const FormWrapper = ({ children }: FormWrapperProps) => {
    return (
        <div className="max-w-3xl mx-auto mt-20 mb-10">
            {children}
        </div>
    )
}

export default FormWrapper;