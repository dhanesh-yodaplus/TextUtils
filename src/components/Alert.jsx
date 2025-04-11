import React from "react";

export default function Alert({ message, type = "success", show }) {
  return (
    show && (
      <div
        className={`alert alert-${type} alert-dismissible fade show`}
        role="alert"
      >
        {message}
      </div>
    )
  );
}
