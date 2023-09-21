import React, { useState } from "react";
import "./App.css";
import notificationsArray from "./Components/NotificationsData.js";
import NotifHeader from "./Components/Header/NotifHeader";
import Notifications from "./Components/Notifications/Notifications";

function App() {
  const [notifications, setNotifications] = useState(notificationsArray);

  //   Marks all notifications as read
  const markAllAsRead = () => {
    const updatedNotifications = notifications.map((notification) => ({
      ...notification,
      unread: false,
    }));
    setNotifications(updatedNotifications);
  };

  //   counts the amount of notifications that are unread
  const unreadCount = notifications.filter(
    (notification) => notification.unread
  ).length;

  const markAsRead = (index) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification, i) =>
        i === index
          ? { ...notification, unread: !notification.unread }
          : notification
      )
    );
  };

  //   uses the notifications state to update notifications
  const renderNotification = () => {
    return notifications.map((notification, index) => (
      <Notifications
        key={index}
        {...notification}
        markAsRead={() => markAsRead(index)} // Passing down the function as a prop
      />
    ));
  };

  return (
    <div className="App">
      <header>
        <NotifHeader unreadCount={unreadCount} markAllAsRead={markAllAsRead} />
        {renderNotification()}
      </header>
    </div>
  );
}

export default App;
