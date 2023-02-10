import React from "react";
import "./App.css";
import Todo from "./Components/Todo";

function App() {
	const [show, setShow] = React.useState(true);
	return (
		<div className="bg-dark-vdb min-h-screen w-full">
			<Todo />
		</div>
	);
}

export default App;
