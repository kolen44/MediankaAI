import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import Experience from './components/Experience.tsx'
import SpeechToText from './components/SpeechToText.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<div className='canvas3d'>
			{/* <AvatarCanvas />
			 */}
			<Experience />
			<SpeechToText />
		</div>
	</React.StrictMode>
)
