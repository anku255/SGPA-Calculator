import React from "react";

export default function Notification({ hideNotification, isVisible }) {
  if (isVisible) {
    return (
      <div className="notification is-info">
        <button className="delete" onClick={hideNotification} />
        The CGPA Calculation has been done according to the table given below.
        It may not be correct.
      </div>
    );
  }

  return null;
}
