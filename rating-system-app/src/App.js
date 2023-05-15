import RatingInterface from './components/RatingInterface/RatingInterface';

const App = () => {
	return (
		<div className='flex-col w-screen min-h-screen p-1'>
			<div className='w-1/3 border-2 rounded-md text-center border-stone-400'>
				Mock chat list page layout
			</div>
			<div className='flex-row w-2/4 min-h-full border-2 rounded-md text-center border-stone-400'>
				<div>Mock chat</div>
				<RatingInterface />
			</div>
		</div>
	);
};

export default App;
