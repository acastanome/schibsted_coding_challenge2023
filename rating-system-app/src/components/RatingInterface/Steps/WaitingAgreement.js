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
		<div className='flex flex-col w-full p-2 border rounded-2xl text-center border-stone-400 mt-1'>
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
