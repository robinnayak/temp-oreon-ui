

interface Props {
    onClick: () => void
    btn_name: string
    className?: string
}


const NextButton = ({onClick, btn_name, className}: Props) => {
    return (
        <div className={className}>
            <button onClick={onClick} className="bg-purple-500 text-white px-4 py-2 rounded-md w-24 text-center">
                {btn_name}
            </button>
        </div>
    )
}

export default NextButton