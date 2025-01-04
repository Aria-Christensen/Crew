import React, {useState, useEffect } from "react";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Header />
			<Login />
			<Footer />
		</div>
	);
}

function Header() {
	return (
		<header>
			THE <span className="Title">CREW </span>THE QUEST FOR PLANET 9
		</header>
	);
}

function Footer() {
	return (
		<footer>
		© 2024 <a href="github.com/Aria-Christensen/Crew" className="link">Aria Christensen</a>
		</footer>
	);
}
function Login() {
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
		<div className="Login">
			<p> "Hello World!" </p>
			<p>{intro}</p>
			<p>{message}</p>
		</div>
	);
}

export default App
