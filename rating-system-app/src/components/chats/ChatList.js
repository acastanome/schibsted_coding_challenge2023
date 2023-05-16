const ChatList = ({ chats, onChatClick }) => {
	const chatClickHandler = (chatId) => {
		if (chatId) {
			onChatClick(chatId);
		}
	};

	return (
		<div className='flex flex-col w-1/3 border rounded-2xl p-3 border-stone-400'>
			{chats !== undefined &&
				chats.map((chat, index) => {
					return (
						<div
							key={index}
							onClick={() => chatClickHandler(chat.chatId)}
							className='w-full border rounded-xl py-1 px-2 border-stone-400 mb-1 text-gray-950 text-sm cursor-pointer'
						>
							{chat.userB}
						</div>
					);
				})}
		</div>
	);
};

export default ChatList;
