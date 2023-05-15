import CheckButton from '../CheckButton';

const WaitingAgreement = ({ setExchangeStatusA, setExchangeStatusB }) => {
	const buttonClickHandler = (action) => {
		if (action === 'no') {
			setExchangeStatusB(() => {
				return 4;
			});
			setExchangeStatusA(() => {
				return 4;
			});
		}
	};

	return (
		<div className='flex-row w-full p-1 border-2 rounded-md text-center border-stone-400'>
			<p className='text-xs text-center'>
				Waiting for other user to enter the agreement
			</p>
			<div className='max-h-min p-1 flex justify-evenly'>
				<CheckButton onButtonClick={buttonClickHandler} content={'no'} />
			</div>
		</div>
	);
};

export default WaitingAgreement;
