# schibsted_coding_challenge2023

## Idea:

    A rating system for transactions to make sales smoother and fight scams.

## Team members:

    André Backmann, Alba Castaño, Margot DeMaulmont and Roope Vuorenlehto.

## Defining the project:

- We want to minimize negative experiences. Examples:

  - Users agree on a deal, but the product is sold to someone else.
  - Users agree, but the buyer cancels.
  - Scam situations

- Our solution should:

  - Discourage such behaviours
  - Be easy to use
  - Low to none maintenance from Schibsted's part

- Because of time constraints, we will focus on the rating system from the user perspective, developing an MVP frontend.
- We will develop the rating system logic, but won't aim for it's implementation.

## MoSCoW:

- M:
  Easy to use: 3-5 steps max.
  Feedback pages.
- S:
  Engaging interface: Thumbs up.
  Reviews.
  Rating logic.
- C:
  Profile page.
- W:
  Backend, saving to db.
  Sort reviews by rating/ time.

## Parts:

- How to gather the info:
  - Entering an agreement interface.
  - Feedback the exchange: Rate the exchange. If the review is negative, choose a reason from a predefined list. Writing a review is optional in any case.
  - Exceptions and default values and timeframe for not completed reviews should be handled.
- How to make use of this info?
  - Users total rating displayed next to username when searching products, and in the individual product pages.
  - Username will be clickable, and direct to a user profile page, containing: Username, user total rating, link to users products, and reviews from previous sells/ buys.
- To add transparency to the reviews, both seller and buyer reviews will be displayed next to each other.

## Running the project:
- To run the project, clone the repo, and in the rating-system-app directory, run the command "npm install". After that, run the command "npm start".
- The previous step should open your browser, running the project in http://localhost:3000/ Make sure your port 3000 is free.
- The project was developed in Chrome.
- The step 3 of the rating process, the feedback, has not been connected with the rest of the project. To see it in action, you can follow this steps. In App.js:
  1. Comment out everything inside the App component.
	2. Uncomment line 8, which contains return Review.
	3. Uncomment line 5, which imports Review component
	4. Save the file, then reload the browser.

## Other important info:
- The feedback process aims to gather data. In the presentation_media directory there is 3 videos, which show how the process work.
- The rating algorithm: the user-rating becomes visible to other users when five (5) ratings have been given to a user, emphasising the latest ratings. It can be found in AverageScore.js file, since it wasn't connected to the rest of the interface yet.
- To showcase how the gathered information could be used, we have added 3 pdf files in presentation_media directory:
  1. product_page and search_page: The username and user rating could be displayed next to the announcements.
  2. Clicking on a username would lead to a profile page, showcasing that users information, a link to active products, and the reviews that user has given and received.

## Stack:
  React.js, TailwindCSS.

## Sources

- circle-stop.svg: https://github.com/FortAwesome/Font-Awesome/blob/6.x/svgs/regular/circle-stop.svg

- circle-check: https://github.com/FortAwesome/Font-Awesome/blob/6.x/svgs/regular/circle-check.svg

- wheel animation: https://codepen.io/Coderesting/pen/BaaELKv


