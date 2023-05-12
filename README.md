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

## Sources

- circle-stop.svg: https://github.com/FortAwesome/Font-Awesome/blob/6.x/svgs/regular/circle-stop.svg

- circle-check: https://github.com/FortAwesome/Font-Awesome/blob/6.x/svgs/regular/circle-check.svg
