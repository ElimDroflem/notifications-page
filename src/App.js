import React from "react";
import "./App.css";
import notificationsArray from "./Components/NotificationsData.js";
import NotifHeader from "./Components/Header/NotifHeader";
import Notifications from "./Components/Notifications/Notifications";

function App() {
  const renderNotification = () => {
    return notificationsArray.map((notification, index) => (
      <Notifications
        key={index}
        img={notification.img}
        name={notification.name}
        text={notification.text}
        event={notification.event}
        unread={notification.unread}
        time={notification.time}
      />
    ));
  };
  return (
    <div className="App">
      <header>
        <NotifHeader />
        {renderNotification()}
      </header>
    </div>
  );
}

export default App;
