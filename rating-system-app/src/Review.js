import './Review.css'
import Wheel from './components/Wheel.js'
import { useState } from 'react'

function Review() {
  const [state, setState] = useState({
    percentage: 100,
    currentAngle: 0,
    showReviewForm: 0,
    showReviewSent: 0
  })

  const updateState = state => {
    setState({...state})
  }

  function handleReview () {
   if (!state.showReviewForm) {
    if (state.percentage < 60) {
      updateState({
        ...state,
        showReviewForm: 1
      })
      return ;
    }
   } 
    updateState({
      ...state,
      showReviewSent: 1
    })
  }
  
  if (state.showReviewForm && !state.showReviewSent) {
    return (
      <div className="container">
        <div className="review-card review-form">
          <div className="review-card__title">
            What was the problem?
          </div>
          <div>
            <input type="checkbox" id="no_show" name="no_show" />
            <label for="no_show">They didn't show up</label>
          </div>
          <div>
            <input type="checkbox" id="not_as_expected" name="not_as_expected" />
            <label for="not_as_expected">Product wasn't as expected</label>
          </div>
          <div>
            <input type="checkbox" id="late" name="late" />
            <label for="late">They were late</label>
          </div>
          <div>
            <input type="checkbox" id="unpleasant" name="unpleasant" />
            <label for="unpleasant">They were unpleasant</label>
          </div>
            <textarea placeholder="Other" />

            <div className="review-card__send-btn">
              <div className="btn" onClick={() => handleReview()}>send</div>
            </div>
          
        </div>
      </div>
    )
  } else if (state.showReviewSent) {
    return (
      <div className="container">
        <div className="review-card review-card-sent">
            Thank you for your review!
        </div>
      </div>
  
    );
  }
  else {
    // console.log("score: " + state.percentage)
    return (
      <div className="container">
        <div className="review-card">
          <div className="review-card__title">
              How did it go?
          </div>
          
          <div className="review_card__wheel-section">
            <Wheel
              percentage={state.percentage}
              currentAngle={state.currentAngle}
              updateState={updateState}
            />
          </div>
          <div className="review-card__review-box">
              <textarea placeholder="do you want to leave a review?" />
          </div>
          <div className="review-card__send-btn">
            <div className="btn" onClick={() => handleReview()}>send</div>
          </div>
      
        </div>
        
      </div>
  
    );
  }
}

export default Review;
