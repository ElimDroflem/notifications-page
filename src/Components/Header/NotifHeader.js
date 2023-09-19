import React, { useState } from "react";
import "./NotifHeader.css";

const NotifHeader = () => {
  return (
    <div className="header">
      <div className="header__notifs">
        <h1>Notifications</h1>
        <p>3</p>
      </div>
      <div className="header__read">
        <p>Mark all as read</p>
      </div>
    </div>
  );
};

export default NotifHeader;
