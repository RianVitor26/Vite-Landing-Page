type TweetProps = {
    text: String
    // text?: string => not obligatory
}

export function Tweet(props: TweetProps) {
    return (
        <>
            <div>{ props.text}</div>
        </>
    )
}