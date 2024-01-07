import React from 'react'
import MovieRow from './MoviesRow' 

const movies = [
  "https://www.tallengestore.com/cdn/shop/products/Dora_The_Explorer_And_The_Lost_City_Of_Gold_-_Hollywood_English_Movie_Poster_1_3fd98041-803c-4491-9d4a-a0a1d5533aae.jpg?v=1577693642",
  "https://www.movieposters.com/cdn/shop/products/108b520c55e3c9760f77a06110d6a73b_240x360_crop_center.progressive.jpg?v=1573652543",
  "https://s.yimg.com/ny/api/res/1.2/ZzAHlDHi8a2xdBRRbruaYQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTkyOA--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5",
  "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg",
  "https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/6408f6e7b5811271dc883aa8_batman-min.png",
  "https://marketplace.canva.com/EAFTl0ixW_k/1/0/1131w/canva-black-white-minimal-alone-movie-poster-YZ-0GJ13Nc8.jpg",
  "https://i.pinimg.com/736x/f6/22/a7/f622a7e876f7d768f07f2af092a23e40.jpg",
  "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61AQxIy0yoL._AC_UF894,1000_QL80_.jpg",
  "https://marketplace.canva.com/EAFDOGkiqeA/1/0/1131w/canva-green-brown-classic-action-adventure-movie-poster-_yltw7BlZrk.jpg",
  "https://i.etsystatic.com/18242346/r/il/34abac/2835655237/il_570xN.2835655237_4h8m.jpg",
  "https://artloversaustralia.com.au/wp-content/uploads/2022/02/Sue-Dowse_Jaws-Movie-Poster_Primary-scaled.jpg"
];

function Contents(props) {
  return (
    <div>
      <MovieRow movies={movies} title = "Netflix Original" isNetflix={true}/>
      <MovieRow movies={movies} title = "Trending Movies"/>
      <MovieRow movies={movies} title = "Top Rated Movies"/>
      <MovieRow movies={movies} title = "Action Movies"/>
      <MovieRow movies={movies} title = "Comedy Movies"/>
      <MovieRow movies={movies} title = "Horror Movies"/>
      <MovieRow movies={movies} title = "Romance Moives"/>
      <MovieRow movies={movies} title = "Documentaries"/>

    </div>
  )
}
export default Contents;