import React, { useState, useEffect } from "react";

export default props => {
	const [contador, setContador] = useState(0);
	const [status, setParOuImpar] = useState("Par");

	useEffect(() => {
		contador % 2 === 0 ? setParOuImpar("Par") : setParOuImpar("Impar");
		document.title = `You clicked ${contador} times`;
	});

	/* Only re-render the component is contador changes
	useEffect(() => {
		contador % 2 === 0 ? setParOuImpar("Par") : setParOuImpar("Impar");
	}, [count]);
	*/

	return (
		<div>
			<h1>{contador}</h1>
			<h1>{status}</h1>
			<p>You clicked {contador}</p>
			<button onClick={() => setContador(contador + 1)}>Inc</button>
		</div>
	);
};
