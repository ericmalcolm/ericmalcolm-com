import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App
			name="Eric Malcolm"
			mainDescription="Front-End Developer / Architect specializing in UX and Accessibility, based in Michigan."
			subDescription="I help architect and develop solutions to create usable, human-friendly and accessible websites, interfaces, and apps."
		/>
	</React.StrictMode>
);
