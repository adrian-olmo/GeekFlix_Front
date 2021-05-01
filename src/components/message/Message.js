import './Message.css'

const Message = (props) => {
    return (
        <h4 className="message">
            {props.msg}
        </h4>
    )
}

export default Message;