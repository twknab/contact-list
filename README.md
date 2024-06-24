# Contact List

## Summary

This application is just a small demo application utilizing [React](https://reactjs.org/) and [Redux](https://redux.js.org/) demonstrating how we can store, fetch, and add to our data store. Data is initialized with JSON data to mock an API call, and then stored in local storage, so that this data will persist on page reload or closing the tab. When new data is added, it is pushed to the data store and saved to local storage.

For our component stylings, we're using [Chakra UI](https://chakra-ui.com/) and Chakra's CSS utilities, rather than Tailwind CSS.

This application is written to be scalable, so you could delete the JSON data fetching and saving to local storage, and instead use an API call via Axios or GraphQL if desired. The aim of this project was to get more familiar with how Redux works.

## Technologies Used

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Chakra UI](https://chakra-ui.com/)
- [Vercel](https://vercel.com/)

## How to Run

- Clone repository
- `npm install`
- `npm run dev`
- Load the URL provided by Vite into your browser

## Features

- See all contacts
- View contact details (click a contact)
- Add a new contact
