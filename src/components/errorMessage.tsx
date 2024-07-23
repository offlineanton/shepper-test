const ErrorMessage = ({ children } : { children : React.ReactNode }) => {
    return (
        <p className="text-red-600">
            {children}
        </p>
    )
};

export default ErrorMessage;