
## Moviesverse

Moviesverse is a website that allows users to explore a diverse collection of movies and access detailed information about each film. The website leverages a dedicated movie API to ensure that the movie list and individual movie details are always current and up-to-date.


## Tech Stack

**Client:** React, Hooks , TailwindCSS , Flowbite , dotenv




## Features

- **Explore a Diverse Movie Collection:** Moviesverse offers an extensive array of movies, spanning popular titles, timeless classics, and captivating indie films. Users can effortlessly navigate the movie list based on name .
- **In-Depth Movie Information:** For every movie listed on Moviesverse, users can access comprehensive details such as RunTime ,Budget ,Revenue ,Release Date, rating, and user reviews.
- **Browse Movies:** Users can search  movie collection by input box  give movie list of related movies.
- **Popular Movie List:** The website presents a list of popular movies, along with their descriptions, allowing users to quickly discover trending titles.
- **Top Movie List:** Users can access curated lists of top-rated and most popular movies, providing a convenient way to find highly regarded films.
- **Upcoming Movie List:** This page offers insights into upcoming movies, helping users stay informed about exciting releases.





## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. for API key visit [TMDB](https://developer.themoviedb.org/)

#### Get item

link example : 
https://api.themoviedb.org/3/movie/550?api_key=api_key(from_TMDB) 
## Run Locally

Clone the project

```bash
  git clone git@github.com:omkeshborse/moviesverse.git
```

Go to the project directory

```bash
  cd moviesverse
```

Install dependencies

```bash
  npm install


##  Environment Variables

To run this project, you will need to create .env file then  add the following environment variables to your .env file

REACT_APP_API_KEY=<TMDB API_KEY>
  

  

Start the server

```bash
  npm run start
```

🎉 Feel free to clone or fork this repository if you're also diving into moviesverse . Let's master the art of navigation in React together! 🎉"


Enjoy Moviesverse!

Start the server

```bash
  npm run start
```

🎉 Feel free to clone or fork this repository if you're also diving into moviesverse . Let's master the art of navigation in React together! 🎉"


Enjoy Moviesverse!