const PlayMethod = ({order, title, content}) => {
    return (
        <div className="flex flex-col">
            <div>{order}</div>
            <div>{title}</div>
            <div>{content}</div>
        </div>
    )
}

export default PlayMethod;