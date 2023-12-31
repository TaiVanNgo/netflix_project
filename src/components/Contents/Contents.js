import styled from "styled-components";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useRef } from "react";
import { SmoothHorizontalScrolling } from "../../utils";
import { VscCommentUnresolved } from "react-icons/vsc";
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

function Contents(props){
    const sliderRef = useRef();
    const movieRef = useRef();

    const handleScrollRight = () => {
      console.log(sliderRef.current.scrollWidth);
      console.log(sliderRef.current.clientWidth);

    }
    return(
      <MovieRowContainer>
        <h1 className="heading">Netflix Originals</h1>
        <MovieSlider ref={sliderRef}>
            {
              movies.map((movie, index) => (
                <div key={index} className="movieItem" ref={movieRef}>
                  <img src={movie} alt="" />
                  <div className="movieName">Movie Name</div>
                </div>
              ))
            }
        </MovieSlider>
        <div className="btnLeft">
            <FiArrowLeft />
        </div>
        <div className="btnRight" onClick={handleScrollRight}>
            <FiArrowRight />
        </div>
      </MovieRowContainer>
    )
}

export default Contents;

const MovieRowContainer = styled.div`
  background-color: var(--color-background);
  color: var(--color-white);
  padding: 20px 20px 0;
  position: relative;
  width: 100%;
  height: 100%;

  .heading{
    font-size: 18px;
    user-select: none;
  }

  .btnLeft{
    position: absolute;
    top: 50%;
    left: 30px;
    z-index: 20;
    transform-origin: center;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100px;
    width: 50px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    transform: translateY(-20%);
    &:hover{ 
      background-color: rgba(0, 0, 0, 0.8);
    }
    &:hover svg{
      opacity: 1;
      transform: scale (1.2);
    }

    svg{
        opacity: 0.7;
        font-size: 50px;
        transition: all 0.3s linear;
    }
  }
  .btnRight{
    position: absolute;
    top: 50%;
    right: 30px;
    z-index: 20;
    transform-origin: center;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100px;
    width: 50px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    transform: translateY(-20%);
    &:hover{ 
      background-color: rgba(0, 0, 0, 0.8);
    }
    &:hover svg{
      opacity: 1;
      transform: scale (1.2);
    }

    svg{
        opacity: 0.7;
        font-size: 50px;
        transition: all 0.3s linear;
    }
  }
`;

const MovieSlider = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(${movies.length}, 300px);
  transition: all 0.3s linear;
  user-select: none;
  overflow-y: hidden;
  overflow-x: auto;
  overflow: hidden;
  padding-top: 28px;
  padding-bottom: 28px;
  scroll-behavior: smooth;

  &:hover .movieItem{
    opacity: 0.5;
  }

  .movieItem{
    transform: scale(1);
    max-width: 400px;
    max-height: 500px;
    width: 100%;
    height: 100%;
    transition: all 0.3s linear;
    user-select: none;
    overflow: hidden;
    border-radius: 6px;
    transform: center left;
    position: relative;
    
    &:hover{
      opacity: 1;
      transform: scale(1.2);
      z-index: 10;
    }

    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .movieName{
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 4px;
      text-align: center;
      font-size: 14px;
      background-color: rgba(0, 0, 0, 0.65);
    }
  }
`;
