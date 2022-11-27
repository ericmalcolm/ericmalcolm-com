import React from 'react';
import './App.scss';

interface AppProps {
	name: string;
	mainDescription: string;
	subDescription: string;
}

export const App = ({
	name,
	mainDescription,
	subDescription,
  }: AppProps):JSX.Element => {
	return (
		<div className="container">
			<h1>{name}</h1>
			<h2>
				{mainDescription}
			</h2>
			<p>
				{subDescription}
			</p>
			<a
				href="https://www.linkedin.com/in/ericmalcolm/"
				aria-label="View Eric Malcolm's LinkedIn Profile"
			>
				LinkedIn
			</a>
		</div>
	);
};

export default App;

