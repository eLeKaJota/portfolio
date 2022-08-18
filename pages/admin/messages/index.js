import ContentBlock from "../../../components/ContentBlock";
import Messages from "../../../components/Messages";

const MessageList = (props) => {

  return (
    <>
      <ContentBlock
        title="Mensajes"
        content={<Messages />}
      />
    </>
  )
}

export default MessageList;
