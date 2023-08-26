// YourComponent.js
import React, { useContext } from "react";
import { AuthContext } from '../../firebase/AuthContext'

function Test() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      {currentUser ? (
        <div>
          <p>Welcome, {currentUser.displayName}</p>
          <p>Email: {currentUser.email}</p>
          {/* Display other user information */}
        </div>
      ) : (
        <p>Please log in.</p>
      )}
    </div>
  );
}

export default Test;
