import React, { useState } from 'react';
import './Row.scss';
import Button from '../../Atomic/Button/Button';
import ArrowDown from '../../../assets/Arrows/ArrowDown.svg';
import ArrowUp from '../../../assets/Arrows/ArrowUp.svg';
import Edit from '../../../assets/Arrows/Edit.svg';
import CheckBox from '../../../assets/Arrows/CheckBox.svg';
import UnCheckBox from '../../../assets/Arrows/UnCheckBox.svg';
import Delete from '../../../assets/Arrows/Delete.svg';

const Row = () => {
	const [parentState, setParentState] = useState<object>({});
	const [isDisabled, setIsDisabled] = useState<boolean>(false);

	console.log(parentState, 'parentState din useState din app');

	const updateParentState = (data: object) => {
		setParentState({ data });
	};

	return (
		<li id='' className='wrapper-row'>
			<div className='container-row'>
				<div className='container-arrows'>
					<Button
						callbackFunction={updateParentState}
						isDisabled={isDisabled}
						iconSource={ArrowDown}
						iconAlt={'ArrowDown'}
						index={0}
						addedtyle={{
							border: '1px solid #950f0f',
							fontSize: '30px',
							//sa recunosc proprietatile de stilizare custom
							display: '',
							height: '',
							width: '',
							padding: '',
							margin: '',
							backgroundColor: '',
							cursor: '',
							borderRadius: '',
							fontWeight: '',
						}}
					/>
					<Button
						callbackFunction={updateParentState}
						isDisabled={isDisabled}
						iconSource={ArrowUp}
						iconAlt={'ArrowUp'}
						index={0}
						addedtyle={{
							border: '1px solid #950f0f',
							fontSize: '30px',
						}}
					/>
				</div>
				<div className='todo-row'>
					<p className='todo-paragraph'>
						Bacovia este un Jmecher Moldovean cu parinti Bucuresteni si Ilfoveni care de mic a
						mancat pamant radioactiv si i s-a aprins ochi
					</p>
				</div>
				<div className='container-action'>
					<Button
						callbackFunction={updateParentState}
						isDisabled={isDisabled}
						iconSource={Edit}
						iconAlt={'Edit'}
						index={0}
						addedtyle={{
							border: '1px solid #3333e6',
							fontSize: '30px',
						}}
					/>
					<div className='container-checked-box'>
						<Button
							callbackFunction={updateParentState}
							isDisabled={isDisabled}
							iconSource={CheckBox}
							iconAlt={'CheckBox'}
							index={0}
							addedtyle={{
								border: '1px solid #0000ff',
								fontSize: '30px',
							}}
						/>
						<Button
							callbackFunction={updateParentState}
							isDisabled={isDisabled}
							iconSource={UnCheckBox}
							iconAlt={'UnCheckBox'}
							index={0}
							addedtyle={{
								display: 'none',
								border: '1px solid #c13ee6',
								fontSize: '30px',
							}}
						/>
					</div>
					<Button
						callbackFunction={updateParentState}
						isDisabled={isDisabled}
						iconSource={Delete}
						iconAlt={'Delete'}
						index={0}
						addedtyle={{
							border: '1px solid #ff0044',
							fontSize: '30px',
						}}
					/>
				</div>
			</div>
		</li>
	);
};

export default Row;
