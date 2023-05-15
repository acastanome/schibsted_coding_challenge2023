import React from 'react';

function calculateAverageEmphasis(scores) {
	if (scores.length >= 5)
	{
		// Calculate the sum of all scores
		const sum = scores.reduce((total, score) => total + score, 0);

		// Get the five latest scores
		const latestScores = scores.slice(-5);

		// Multiply last five increasingly to give emphasis
		const result = latestScores.map((rating, index) => (index + 1) * rating);
		const weightedSum = result.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

		return Math.round((sum + weightedSum) / (scores.length + 15));
	}
	else
	{
		const sum = scores.reduce((total, score) => total + score, 0);
		return Math.round(sum / scores.length);
	}
}

function calculateFullyAverage(scores) {
	const sum = scores.reduce((total, score) => total + score, 0);
	const average = sum / scores.length;
	return (Math.round(average));
}

function AverageScore() {
  // Example usage
  const scores = [51, 23, 25, 72, 85, 95, 95, 89];
  const average = calculateFullyAverage(scores);
  const average_emphasis = calculateAverageEmphasis(scores);

  return (
    <div>
      <p>List of Scores: {scores.join(', ')}</p>
      <p>Average---------------------: {average}</p>
      <p>Average Emphasis Score-: {average_emphasis}</p>
	  <br></br>
    </div>
  );
}

export default AverageScore;


// //  buyer
// Rating: 98
// Feedback: Exceptional seller! Lightning-fast shipping and item in perfect condition. Highly recommended!
// Rating: 92
// Feedback: Great communication and prompt service. The item arrived exactly as described. A reliable seller!
// Rating: 87
// Feedback: Good seller, smooth transaction. The item met my expectations. Satisfied with the purchase.
// Rating: 82
// Feedback: Average seller, shipping took longer than expected. Could improve responsiveness.
// Rating: 77
// Feedback: Okay seller. Some delays in shipping and could have provided better communication.
// Rating: 72
// Feedback: Below average seller. Could have been more proactive in addressing my concerns.
// Rating: 57
// Feedback: Disappointing seller. Shipment delays and lack of professionalism.
// Rating: 52
// Feedback: Unreliable seller. Failed to provide accurate information and caused inconvenience.
// Rating: 41
// Feedback: Terrible seller. Poor communication and unmet expectations.
// Rating: 35
// Feedback: Awful seller. Bad customer service and failure to resolve issues satisfactorily.

// //  seller
// Rating: 95
// Feedback: Excellent buyer! Quick and smooth transaction. A pleasure to deal with.
// Rating: 90
// Feedback: Great communication and prompt payment. Recommended buyer!
// Rating: 85
// Feedback: Decent buyer, transaction went as expected. No issues.
// Rating: 80
// Feedback: Average buyer, payment took longer than expected. Could improve communication.
// Rating: 75
// Feedback: Mediocre buyer. Slow to respond and caused some delays in the transaction.
// Rating: 70
// Feedback: Below average buyer. Difficult to deal with and lacked proper communication.
// Rating: 55
// Feedback: Disappointing buyer. Payment delays and overall unprofessional behavior.
// Rating: 50
// Feedback: Unreliable buyer. Failed to complete the transaction and wasted my time.
// Rating: 40
// Feedback: Terrible buyer. Non-responsive and made unreasonable demands.
// Rating: 30
// Feedback: Awful buyer. Caused unnecessary complications and refused to cooperate.

// const feedback = {
// 	reviewId: 1,
// 	buyerId: 1213,
// 	buyerText: "I love my new laptop! It's super fast and has great battery life. Highly recommend!",
// 	buyerRating: 75,
// 	buyerOption: null,
// 	sellerId: 123,
// 	sellerText: null,
// 	sellerRating: 72,
// 	sellerOption: null
//   };

