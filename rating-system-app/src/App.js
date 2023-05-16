import { useState } from 'react';
import ChatList from './components/chats/ChatList';
import MockChat from './components/chats/MockChat';
import RatingInterface from './components/RatingInterface/RatingInterface';
// import Review from './components/Review/Review.js';

const App = () => {
	// return <Review />;
	const [chats] = useState([
		{
			chatId: 45,
			userAId: 123,
			userA: 'Hannah Banana',
			userBId: 22,
			userB: 'Emma',
			messages: [
				{
					text: 'Hello! I would like to buy this. Can I pick it up tomorrow at 15? ',
					sender: 'userA',
				},
				{
					text: 'Sure',
					sender: 'userB',
				},
				{ text: 'Coolio', sender: 'userA' },
			],
			exchangeStatusA: 0,
			exchangeStatusB: 0,
		},
		{
			chatId: 46,
			userAId: 123,
			userA: 'Hannah Banana',
			userBId: 34,
			userB: 'Mark',
			messages: [
				{
					text: 'Hello! I would like to buy this. Can I pick it up tomorrow at 15? ',
					sender: 'userA',
				},
				{
					text: 'No, only today at midnight',
					sender: 'userB',
				},
			],
			exchangeStatusA: 0,
			exchangeStatusB: 0,
		},
		{
			chatId: 47,
			userAId: 123,
			userA: 'Hannah Banana',
			userBId: 44,
			userB: 'Sibelius',
			messages: [
				{
					text: 'Hello! I would like to buy this. Can I pick it up tomorrow at 15? ',
					sender: 'userA',
				},
				{
					text: 'Sure, the address is MoomiValley 3 B',
					sender: 'userB',
				},
				{ text: 'Coolio', sender: 'userA' },
				{
					text: 'Feedback time!',
					sender: 'userB',
				},
			],
			exchangeStatusA: 2,
			exchangeStatusB: 2,
		},
		{
			chatId: 50,
			userAId: 123,
			userA: 'Hannah Banana',
			userBId: 55,
			userB: 'Salla',
			messages: [
				{
					text: 'Hello! I would like to buy this. Can I pick it up tomorrow at 15? ',
					sender: 'userA',
				},
				{
					text: 'Sure',
					sender: 'userB',
				},
				{ text: 'Coolio', sender: 'userA' },
				{
					text: 'Best day ever, gave you a great review!',
					sender: 'userB',
				},
			],
			exchangeStatusA: 3,
			exchangeStatusB: 3,
		},
	]);

	const [selectedChat, setSelectedChat] = useState(chats[0]);

	const chatClickHandler = (selectedId) => {
		const chat = chats.filter((c) => c.chatId === selectedId);
		setSelectedChat(() => {
			return chat[0];
		});
	};

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
				<ChatList chats={chats} onChatClick={chatClickHandler} />
				<div className='flex-row md:w-2/4 min-h-full text-center p-2'>
					<MockChat chat={selectedChat} />
					<RatingInterface chat={selectedChat} />
				</div>
			</div>
		</div>
	);
};

export default App;
