import React from "react";
import ReactDOM from "react-dom";

import Hook from "./components/hooks";

const rootElement = document.getElementById("root");
ReactDOM.render(
	<React.StrictMode>
		<Hook />
	</React.StrictMode>,
	rootElement
);
