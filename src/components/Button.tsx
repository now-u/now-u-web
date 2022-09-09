interface ButtonProps {
    buttonText: string;
    onClick: () => void;
}

export const Button = (props: ButtonProps): JSX.Element => {
    return (
        <button className="bg-orange-500 hover:bg-orange-700 text-black font-bold py-2 px-2 rounded-md" onClick={props.onClick}>
            { props.buttonText }
        </button>
    )
}
