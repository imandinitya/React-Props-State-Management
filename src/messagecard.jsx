function MessageCard(props){
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.message}</p>
        </div>
    );
}

export default MessageCard;