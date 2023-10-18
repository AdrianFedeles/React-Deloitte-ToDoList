import React, { useState } from 'react';
import './App.scss';
import Row from './components/Macro/Row/Row';
import { rowDataModelProps } from './components/Macro/Row/Row.interface';

let rowDataModel: rowDataModelProps[] = [
	{
		idRow: `${Date.now() + Math.random()}`,
		index: 0,
		isDone: false,
		text: '=-> 1 <-= Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
	},
	{
		idRow: `${Date.now() + Math.random()}`,
		index: 1,
		isDone: false,
		text: '=-> 2 <-= when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
	},
	{
		idRow: `${Date.now() + Math.random()}`,
		index: 2,
		isDone: false,
		text: '=-> 3 <-= It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
	},
	{
		idRow: `${Date.now() + Math.random()}`,
		index: 3,
		isDone: false,
		text: '=-> 4 <-= Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
	},
	{
		idRow: `${Date.now() + Math.random()}`,
		index: 4,
		isDone: false,
		text: '=-> 5 <-= when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
	},
	{
		idRow: `${Date.now() + Math.random()}`,
		index: 5,
		isDone: false,
		text: '=-> 6 <-= when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
	},
];

function App() {
	const [data, setData] = useState(rowDataModel);

	const actionHandlers = (actionType: string, item: rowDataModelProps) => {
		const currentIndex = data.findIndex((element) => element.idRow === item.idRow);
		// const foundIndexToReplace = data.findIndex(
		// 	(element) => element.index === data[currentIndex].index
		// );
		console.log(actionType, 'actionType');

		// function swapIndexes(data: rowDataModelProps[], currentIndex: number, targetIndex: number) {
		// 	const currentElement = data[currentIndex];
		// 	const targetElement = data[targetIndex];

		// 	if (currentElement && targetElement) {
		// 		const currentElementIndex = currentElement.index;
		// 		const targetElementIndex = targetElement.index;

		// 		currentElement.index = targetElementIndex;
		// 		targetElement.index = currentElementIndex;
		// 	}
		// }

		function swapIndexes(data: rowDataModelProps[], currentIndex: number, offset: number) {
			const foundIndexToReplace = data.findIndex(
				(element) => element.index === data[currentIndex].index + offset
			);

			data[currentIndex].index += offset;
			data[foundIndexToReplace].index -= offset;
		}

		switch (actionType) {
			case 'ArrowUp':
				if (data[currentIndex].index > 0) {
					// const foundIndexToReplace = data.findIndex(
					// 	(element) => element.index === data[currentIndex].index - 1
					// );
					// data[currentIndex].index -= 1;
					// data[foundIndexToReplace].index += 1;
					// swapIndexes(data, currentIndex, foundIndexToReplace);
					swapIndexes(data, currentIndex, -1);
				}
				break;
			case 'ArrowDown':
				if (data[currentIndex].index < data.length - 1) {
					// const foundIndexToReplace = data.findIndex(
					// 	(element) => element.index === data[currentIndex].index + 1
					// );
					// data[currentIndex].index += 1;
					// data[foundIndexToReplace].index -= 1;
					// swapIndexes(data, currentIndex, foundIndexToReplace);
					swapIndexes(data, currentIndex, 1);
				}
				break;
			case 'Edit':
				console.log(actionType, '<-=Edit');
				break;
			case 'CheckBox':
				if (actionType === 'CheckBox') data[currentIndex].isDone = false;

				break;
			case 'UnCheckBox':
				if (actionType === 'UnCheckBox') data[currentIndex].isDone = true;

				break;
			case 'Delete':
				const deleteRow = data.splice(currentIndex, 1)[0];
				data.map((item, indexToDelete) => {
					if (deleteRow.index < item.index) data[indexToDelete].index -= 1;
				});
				break;
			default:
				break;
		}
		const updatedData = [...data];
		console.log(updatedData);
		updatedData.sort((rowA, rowB) => rowA.index - rowB.index);
		setData(updatedData);
	};

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
						{data.map((item, indexMap) => (
							<Row
								key={indexMap}
								actionHandler={actionHandlers}
								item={item}
								maxIndex={rowDataModel.length}
							/>
						))}
					</ul>
				</section>
			</div>
		</div>
	);
}

export default App;
