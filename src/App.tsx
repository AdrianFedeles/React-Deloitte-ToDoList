import React from 'react';
import './App.scss';
import Row from './components/Macro/Row/Row';

function App() {
	return (
		<div className='App '>
			<div className='container-wrapper'>
				<section>
					<div className='container-title'>
						<h1 className='title-toDo'>To Do List</h1>
					</div>
				</section>
				<section>
					<div id='mainInput'></div>
					<ul className='wrapper-list' id='mainList'>
						<Row />
					</ul>
				</section>
			</div>
		</div>
	);
}

export default App;
