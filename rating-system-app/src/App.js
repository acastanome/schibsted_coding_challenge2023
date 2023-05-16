import MockChat from './components/MockChat';
import RatingInterface from './components/RatingInterface/RatingInterface';
import Review from './Review.js'

const App = () => {
	// return (
	// 	<Review />
	// )
	return (
		<div className='flex flex-col w-screen min-h-screen p-1'>
			<div className='w-screen max-h-min p-2'>
				<img
					className='h-8'
					src='https://d11vpufrumhcpn.cloudfront.net/img/tori_logo.svg'
					alt='tori_logo'
				></img>
			</div>
			<div className='flex flex-row w-screen min-h-full p-1'>
				<div className='w-1/3 border-2 rounded-md text-center border-stone-400'>
					Mock chat list page layout
				</div>
				<div className='flex-row w-2/4 min-h-full text-center p-2'>
					<MockChat />
					<RatingInterface />
				</div>
			</div>
		</div>
	);
};

export default App;
