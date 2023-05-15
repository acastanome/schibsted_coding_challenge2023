import CheckButton from '../CheckButton';

const EnterAgreement = ({
	exchangeStatusA,
	exchangeStatusB,
	setExchangeStatusA,
	setExchangeStatusB,
}) => {
	const buttonClickHandler = (action) => {
		let newStatus = exchangeStatusA;
		if (action === 'yes') {
			if (exchangeStatusB === 0) {
				newStatus = 1;
			} else if (exchangeStatusB === 1) {
				newStatus = 2;
				setExchangeStatusB(() => {
					return 2;
				});
				// Add row in reviews table with columns:
				// Id (unique key), sellerId, sellerText, sellerRating, buyerId, buyerText, buyerRating
				// This unique key Id should be connected to this chats Id, so we can retrieve/update the feedback.
			} else if (exchangeStatusB === 4) {
				newStatus = 4;
			}
		} else if (action === 'no') {
			newStatus = 4;
			setExchangeStatusB(() => {
				return 4;
			});
		}
		setExchangeStatusA(() => {
			return newStatus;
		});
	};

	return (
		<div className='flex flex-col w-full p-2 border rounded-2xl text-center border-stone-400 mt-1'>
			<p className='text-xs text-center'>Do you want to enter an agreement?</p>
			<div className='max-h-min p-1 flex justify-evenly'>
				<CheckButton onButtonClick={buttonClickHandler} content={'yes'} />
				<CheckButton onButtonClick={buttonClickHandler} content={'no'} />
			</div>
		</div>
	);
};

export default EnterAgreement;
