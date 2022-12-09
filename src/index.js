import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import Billboard from './components/Billboard/Billboard';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<main id="main">
			<Billboard />
		</main>
	</React.StrictMode>
);
