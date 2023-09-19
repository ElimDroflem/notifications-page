import "./Notifications.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";

const Notifications = (props) => {
  return (
    <div className="notification">
      <div className="notification__img">
        <img src={props.img} />
      </div>
      <div className="notification__text">
        <p>This is the Name</p>
        <p>This is the example text</p>
        <p>This is the Event</p>
      </div>
      <div className="notification__unread">
        <FontAwesomeIcon icon={faAsterisk} />
      </div>
    </div>
  );
};

export default Notifications;
