const IndexMarker = ({
    index,
    color = "bg-blue-500"
}: {
    index: number,
    color?: string
}) => {
    return (
        <div 
            className={`absolute -top-2.5 -left-2.5 p-1 text-white w-7 h-7 flex items-center justify-center rounded-full ${color}`}
        >
            {index}
        </div>
    )
}

export default IndexMarker;