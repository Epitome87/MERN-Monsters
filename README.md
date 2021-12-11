# MERN Monsters

## Description

This is the start of my Mongoose-Express-React-Node stack app! It will be a very simple CRUD app, done simply for practice. Although tentative for now, the concept will probably be a playful app where fictitious monsters come to share, comment on, and review their favorite places to scare humans. I am choosing this concept since I can have some fun with the design and a little bit of writing. Since this is an app for merely practice and no one would find much use from most beginner CRUD apps to begin with, I figure it's best to make something at least with a bit of playfulness.

## Potential Design

My initial goals for this practice project consist of the following:

Pages

- A simple, yet visually-appealing landing page
  - Includes navigation bar with a few links and a possible text logo
  - Includes a footer
- Index to show all "Scare Sites"
  - Just a simple, perhaps sortable list of all user-submitted locations to scare humans!
- Individual "Scare Site" page
  - Contains information about that site, such as name, location
  - Contains a list of reviews for that site
  - Contains a list of images relevant to that site -- perhaps?
- User Profile Page
  - Cartoon-style monster avatar to represent each "user" (possibly retrieved from Robohash API)
  - Elements for user's name, biography, and stats such as how many reviews they have left

CRUD Functionality

- Create new reviews, scare sites
- Read reviews, scare sites, profiles
- Update reviews (if owner of it), your own profile
- Delete own reviews, and scare sites you submitted, pending admin approval to do so

Extra Features (Time Permitting)

- Map to visually see location of each scare site
- Ability to Friend other users
- Ability to comment on the reviews of other users

## Tech Stack

Frontend

- React (maybe with Redux?)
- TypeScript
- Vanilla CSS for React CSS Modules
  - Maybe SCSS?

Backend

- NodeJS
- Express
- Mongo / MongoDB

## Progress

- 12/10/2021: Initial commit
- 12/10/2021: Backend foundations complete. Basic routers for Sites and Users. Basic GET/POST/DELETE manipulations on the Site and User models, which are successfully retrieved from and updated to the Atlas MongoDB
- 12/10/2021: Some of the frontend foundations complete. This includes simple navigation bar with links to Home, Users, and Sites. The sites route correctly loops through all fetched Site models in the database and renders them as a clickable element, upon which the user is taken to a page that details that specific Site. Very basic styling, no ability to edit, add, or delete Sites via the frontend.

## List of Struggles / Insights

For personal record -- and in order to improve -- I will list difficulties I encounter with this app, as well as insights.

- 12/10/2021 (~8hr50m of typing in VS Code):
  - Some minor issues with nested React routes. Particularly, I was trying to have another Routes/Route definition inside a child Component, and wasn't having luck. I realized I forgot an `<Outlet />` in the parent Component. But then I realized that nesting routes this way would still have the parent route render when the child did. In hindsight this makes sense and should have been obvious, but this was not the behavior I intended to have
  - Harsh realization that my TypeScript with React needs _a lot_ of work! And its benefits aren't yet as prominent as I was hoping
  - Even harsher realization that two weeks away from React Context has made me forget the exact syntax and procedure!
  - It's also clear my CSS needs a lot of work
  - After doubting the benefits of NextJS a few weeks ago (when all the React database work I required was done with simple API calls to Firebase), I can see how elegant and helpful it is for assisting in React routes and removing the need for basically all the backend code I wrote today
  - Downloaded and used Insomnia for sending GET / POST / DELETE requests to my backend server's routes. I think I like it more than Postman! Which wasn't letting me log in...
