import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import BasicBio from './components/BasicBio/BasicBio';
import basicBioData from './content/basicBioData.json';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<BasicBio
			name={basicBioData.name}
			mainDescription={basicBioData.mainDescription}
			subDescription={basicBioData.subDescription}
		/>
	</React.StrictMode>
);
