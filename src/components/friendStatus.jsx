/* Clean up */

import React, { useState, useEffect } from "react";
import userFriendStatus from "./useFriendsStatus";

/* with custom hook */

function FriendStatus(props) {
	const isOnline = userFriendStatus(props.friend.id);

	if (isOnline === null) {
		return "Loading...";
	}

	return isOnline ? "Online" : "Offline";
}

/* function FriendStatus(props) {
	const [isOnline, setIsOnline] = useState(null);

	function handleStatusChange(status) {
		setIsOnline(status.isOnline);
	}

	useEffect(() => {
		ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
		return () => {
       With this react would unsubscribe
      from our CHATAPI when the coponent
      unmounts, as well as before re-running the 
      effect de to a subsequent render. 
			ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
		};
	});
}

  if (isOnline === null){
    return "Loading...";
  }

  return isOnline ? 'Online' : 'Offline';
} */
