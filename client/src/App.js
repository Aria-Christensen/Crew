import React, {useState, useEffect } from "react";
import "./App.css";

function App() {
	const [intro, setIntro] = useState("");
	const [message, setMessage] = useState("");
	
	useEffect(() => {
		fetch("http://localhost:8000/helloWorld")
		.then((res) => res.json())
		.then ((data) => setIntro(data.message));
	},[]);

	useEffect(() => {
		fetch("http://localhost:8000/message")
		.then((res) => res.json())
		.then ((data) => setMessage(data[0].content + data[0].username));
	}, []);

	return (
		<div className="App">
		<p> "Hello World!" </p>
		<p>{intro}</p>
		<p>{message}</p>
		</div>
	);
}

export default App
