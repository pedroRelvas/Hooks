/* Clean up */
/* Building our own hooks */
import React, { useState, useEffect } from "react";

function useFriendStatus(friendID) {
	const [isOnline, setIsOnline] = useState(null);

	function handleStatusChange(status) {
		setIsOnline(status.isOnline);
	}

	useEffect(() => {
		ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
		return () => {
			/* With this react would unsubscribe
      from our CHATAPI when the coponent
      unmounts, as well as before re-running the 
      effect de to a subsequent render. */
			ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
		};
	});

	/*   if (isOnline === null){
    return "Loading...";
  } */

	return isOnline;
}
