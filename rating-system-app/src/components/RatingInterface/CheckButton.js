import CheckIcon from './Icons/CheckIcon';
import StopIcon from './Icons/StopIcon';

const CheckButton = ({ onButtonClick, content }) => {
	const clickHandler = () => {
		if (content === 'yes') {
			onButtonClick('yes');
		} else if (content === 'no') {
			onButtonClick('no');
		}
	};

	return (
		<button
			type='button'
			className='w-1/12 hover:scale-105'
			onClick={clickHandler}
		>
			{content === 'no' ? <StopIcon /> : <CheckIcon />}
		</button>
	);
};

export default CheckButton;
