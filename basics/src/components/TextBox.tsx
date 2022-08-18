type TextBoxProps = {
    text: String
    // text?: string => not obligatory
}

export function TextBox(props: TextBoxProps) {
    return (
        <>
             <p>{props.text}</p>
        </>
    )
}