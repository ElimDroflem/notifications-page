import "./Notifications.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";

const Notifications = (props) => {
  return (
    <div
      className={
        props.unread
          ? "notification notification--unread"
          : "notification notification--read"
      }
    >
      <div className="notification__img">
        <img src={props.img} alt="Avatar" />
      </div>
      <div className="notification__content">
        <div className="notification__desc">
          <span className="notification__name">{props.name}</span>
          <span className="notification__text">{props.text}</span>
          <span className="notification__event">{props.event}</span>
          <span className="notification__asterix">
            {props.unread && (
              <FontAwesomeIcon icon={faAsterisk} className="asterisk-icon" />
            )}
          </span>
        </div>
        <div className="notification__time">{props.time}</div>
      </div>
    </div>
  );
};

export default Notifications;
