import { useState } from 'react';
import './App.css';
import About from './components/about/About';
import Techskills from './components/tech/Techskills';
import Projects from './components/projects/projects';

function App() {

	return (
		<main className="my-10 xl:my-[75px] mx-10 xl:mx-36 space-y-6">
			<div className="grid grid-cols-1 xl:grid-cols-3 gap-6 relative z-10">
				<About/>
				<Techskills />
			</div>
			<Projects />
		</main>
	)
}

export default App;
