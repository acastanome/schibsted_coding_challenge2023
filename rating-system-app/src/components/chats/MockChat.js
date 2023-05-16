const MockChat = ({ chat }) => {
	return (
		<div className='flex flex-col justify-between border rounded-2xl p-3 md:p-5 border-stone-400'>
			<div>
				<div className='flex gap-5 items-center mb-2 text-gray-950'>
					{chat.userB}
				</div>
				<hr />
			</div>

			<div className='overflow-y-scroll py-2' id='messages'>
				<div className='flex flex-col gap-2'>
					{chat.messages !== undefined &&
						chat.messages.map((message, index) => {
							return (
								<div
									key={index}
									className={`flex pr-10 ${
										message.sender === 'userA' && 'justify-end pl-10 pr-1'
									}`}
								>
									<div
										className={`${
											message.sender !== 'userA'
												? 'border-2 border-gray-500 bg-white text-gray-950 rounded-bl-none'
												: 'border-2 border-gray-500 bg-gray-300 text-gray-950 rounded-tr-none'
										} p-3 rounded-xl max-w-xl flex flex-col gap-1`}
									>
										<p className='text-gray-950 text-xs md:text-sm'>
											{message.text}
										</p>
									</div>
								</div>
							);
						})}
				</div>
			</div>
			<div className='border border-gray-300 rounded-lg text-gray-400 mt-2'>
				Mock input message
			</div>
		</div>
	);
};

export default MockChat;
