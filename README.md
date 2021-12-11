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

`12/10/2021: Initial commit`
`12/10/2021: Backend foundations complete. Basic routers for Sites and Users. Basic GET/POST/DELETE manipulations on the Site and User models, which are successfully retrieved from and updated to the Atlas MongoDB`
