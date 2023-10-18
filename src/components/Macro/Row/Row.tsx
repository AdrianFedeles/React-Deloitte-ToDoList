import React from 'react';
import './Row.scss';
import Button from '../../Atomic/Button/Button';
import ArrowDown from '../../../assets/Arrows/ArrowDown.svg';
import ArrowUp from '../../../assets/Arrows/ArrowUp.svg';
import Edit from '../../../assets/Arrows/Edit.svg';
import CheckBox from '../../../assets/Arrows/CheckBox.svg';
import UnCheckBox from '../../../assets/Arrows/UnCheckBox.svg';
import Delete from '../../../assets/Arrows/Delete.svg';
import { rowDataModelProps } from './Row.interface';

const Row = (props: { item: rowDataModelProps; maxIndex: number; actionHandler: Function }) => {
	const { item, maxIndex, actionHandler } = props;
	const { idRow, index, isDone, text } = item;

	const updateParentState = (actionType: string) => {
		actionHandler(actionType, item);
	};

	return (
		<li id={idRow} className='wrapper-row'>
			<div className='container-row'>
				<div className='container-arrows'>
					<Button
						callbackFunction={updateParentState}
						actionType='ArrowUp'
						isDisabled={index === 0 ? true : false}
						iconSource={ArrowUp}
						iconAlt={'ArrowUp'}
						addedStyle={{
							border: '1px solid #950f0f',
							fontSize: '30px',

							//sa recunosc proprietatile de stilizare custom
							// display: '',
							// height: '',
							// width: '',
							// padding: '',
							// margin: '',
							// backgroundColor: '',
							// cursor: '',
							// borderRadius: '',
							// fontWeight: '',
						}}
					/>
					<Button
						callbackFunction={updateParentState}
						actionType='ArrowDown'
						isDisabled={index === maxIndex - 1 ? true : false}
						iconSource={ArrowDown}
						iconAlt={'ArrowDown'}
						addedStyle={{
							border: '1px solid #950f0f',
							fontSize: '30px',
						}}
					/>
				</div>
				<div className='todo-row'>
					<p className={`todo-paragraph ${isDone ? 'underlineParagraph' : ''}`}>{text}</p>
				</div>
				<div className='container-action'>
					<Button
						callbackFunction={updateParentState}
						actionType='Edit'
						iconSource={Edit}
						iconAlt={'Edit'}
						addedStyle={{
							border: '1px solid #3333e6',
							fontSize: '30px',
						}}
					/>
					<div className='container-checked-box'>
						<Button
							callbackFunction={updateParentState}
							actionType='CheckBox'
							iconSource={CheckBox}
							iconAlt={'CheckBox'}
							addedStyle={{
								display: `${isDone ? 'block' : 'none'}`,
								border: '1px solid #c8c451',
								fontSize: '30px',
							}}
						/>
						<Button
							callbackFunction={updateParentState}
							actionType='UnCheckBox'
							iconSource={UnCheckBox}
							iconAlt={'UnCheckBox'}
							addedStyle={{
								display: `${isDone ? 'none' : 'block'}`,
								border: '1px solid #d900ff',
								fontSize: '30px',
							}}
						/>
					</div>
					<Button
						callbackFunction={updateParentState}
						actionType='Delete'
						iconSource={Delete}
						iconAlt={'Delete'}
						addedStyle={{
							border: '1px solid #ff0000',
							fontSize: '30px',
						}}
					/>
				</div>
			</div>
		</li>
	);
};

export default Row;
