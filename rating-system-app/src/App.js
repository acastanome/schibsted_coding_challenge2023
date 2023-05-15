import MockChat from './components/MockChat';
import RatingInterface from './components/RatingInterface/RatingInterface';

const App = () => {
	return (
		<div className='flex flex-col w-screen min-h-screen p-1'>
			<div className='w-screen max-h-min p-2'>
				<img
					className='h-8'
					src='https://d11vpufrumhcpn.cloudfront.net/img/tori_logo.svg'
					alt='tori_logo'
				></img>
			</div>
			<div className='flex flex-row w-screen min-h-full p-1 justify-center'>
				<div className='flex flex-col w-1/3 border rounded-2xl p-3 border-stone-400'>
					<div className='w-full border rounded-xl py-1 px-2 border-stone-400 mb-1 text-gray-950 text-sm'>
						Mock chat 1
					</div>
					<div className='w-full border rounded-xl py-1 px-2 border-stone-400 text-gray-950 text-sm'>
						Mock chat 2
					</div>
				</div>
				<div className='flex-row md:w-2/4 min-h-full text-center p-2'>
					<MockChat />
					<RatingInterface />
				</div>
			</div>
		</div>
	);
};

export default App;
