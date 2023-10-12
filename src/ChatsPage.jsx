/*import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced"

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('b5854010-b7ae-46d7-b63d-6d2537e4c9cb',
     // eslint-disable-next-line react/prop-types
     props.user.username,
      // eslint-disable-next-line react/prop-types
      props.user.secret
      );
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <MultiChatSocket{...chatProps}/>
      <MultiChatWindow {...chatProps} style={{height:'100%'}}/>
    </div>
  );
};

export default ChatsPage;*/
import { PrettyChatWindow } from "react-chat-engine-pretty";
import PropTypes from 'prop-types';

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <PrettyChatWindow
        projectId={'b5854010-b7ae-46d7-b63d-6d2537e4c9cb'}
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
};

ChatsPage.propTypes = { // Corrected the propTypes assignment here
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    secret: PropTypes.string.isRequired,
  }).isRequired,
};

export default ChatsPage; // Make sure you're exporting the correct component name
