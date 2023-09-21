import React, { useState } from "react";
import "./NotifHeader.css";

const NotifHeader = (props) => {
  return (
    <div className="header">
      <div className="header__notifs">
        <h1>Notifications</h1>
        <p>{props.unreadCount}</p>
      </div>
      <div className="header__read">
        <p onClick={props.markAllAsRead}>Mark all as read</p>
      </div>
    </div>
  );
};

export default NotifHeader;
