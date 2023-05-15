import { useState } from 'react';
import EnterAgreement from './Steps/EnterAgreement';
import WaitingAgreement from './Steps/WaitingAgreement';
import FeedbackAgreement from './Steps/FeedbackAgreement';
import CancelledAgreement from './Steps/CancelledAgreement';
import FinishedAgreement from './Steps/FinishedAgreement';

// exchangeStatus possible values:
// 	0 Beginning, haven't entered agreement yet
// 	1 Entered agreement: Waiting for other user
// 	2 Entered agreement: Feedback
// 	3 Finished agreement: Review has been sent
// 	4 Exchange was cancelled

const RatingInterface = () => {
	const [exchangeStatusA, setExchangeStatusA] = useState(0);
	const [exchangeStatusB, setExchangeStatusB] = useState(0);

	if (exchangeStatusA === 0) {
		return (
			<EnterAgreement
				exchangeStatusA={exchangeStatusA}
				setExchangeStatusA={setExchangeStatusA}
				exchangeStatusB={exchangeStatusB}
				setExchangeStatusB={setExchangeStatusB}
			/>
		);
	} else if (exchangeStatusA === 1) {
		return (
			<WaitingAgreement
				setExchangeStatusA={setExchangeStatusA}
				setExchangeStatusB={setExchangeStatusB}
			/>
		);
	} else if (exchangeStatusA === 2) return <FeedbackAgreement />;
	else if (exchangeStatusA === 4) return <CancelledAgreement />;
	else return <FinishedAgreement />;
};

export default RatingInterface;
