const FeedbackAgreement = () => {
	return (
		<div className='flex flex-col w-full p-2 border rounded-2xl text-center border-stone-400 mt-1'>
			<p className='text-xs text-center'>
				Review component, showcasing how the feedback works, would be here.
			</p>
			<p className='text-xs text-center'>
				To see it in action, in App.js: <br />
				1. Comment out everything inside the App component.
				<br />
				2. Uncomment line 8, which contains return Review. <br />
				3. Uncomment line 5, which imports Review component
				<br />
				4. Save and reload the browser.
			</p>
		</div>
	);
};

export default FeedbackAgreement;
