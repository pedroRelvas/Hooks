import React, { useState, useEffect } from "react";
import userFriendStatus from "./useFriendsStatus";

/* with custom hook */

function FriendListItem(props) {
	const isOnline = userFriendStatus(props.friend.id);

	return (
		<li style={{ color: isOnline ? "green" : "black " }}>
			{props.friend.name}
		</li>
	);
}
