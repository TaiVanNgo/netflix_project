import ReactPlayer from "react-player";
import { VscMute, VscUnmute } from "react-icons/vsc";
import styled from "styled-components";
import { useState } from "react";

function Intro(props){
    const [isMuted, setIsMuted] = useState(false);

    return (
        <IntroContainer>
          <ReactPlayer 
            playing={true}
            loop={true}
            width="100%"
            height="100%"
            volume={1}
            muted={ isMuted }
            url="https://vimeo.com/877812590"
            className="video-intro"
          />
          <div className="info-intro">
            <h1 className="heading-intro">Dying for Beginners</h1>
            <p className="overview-intro">A short animation, voiced by Dr Kathryn Mannix, which guides you gently on a step by step journey through the process of dying.
Acclaimed author, speaker and former palliative care physician Dr Kathryn Mannix has spent her medical career working with people who have incurable, advanced illnesses. The author of two Sunday Times Bestsellers – With The End in Mind and Listen, Dr Mannix is on a mission to reclaim the public’s understanding of dying.</p>
          </div>
          {
            isMuted ? (
                <VscMute className="btn-volume"
                  onClick={() => setIsMuted(prev => !prev)}
                />
            ) : (
                <VscUnmute className="btn-volume"
                  onClick={() => setIsMuted(prev => !prev)}
                />
            )
          }

          <div className="fadeBottom"></div>

        </IntroContainer>
    )
}

export default Intro;

const IntroContainer = styled.div`
  background-color: var(--color-background);
  position: relative;
  color: var(--color-white);
  padding-top: 56%;

  .video-intro {
    position: absolute;
    top: 0;
    left: 0;
  }

  .info-intro{
    position: absolute;
    top: 140px;
    left: 30px;

    @media screen and (max-width: 800px){
        top: 120px;
        left: 25px;
    }

    @media screen and (max-width: 600px){
        top: 100px;
        left: 15px;
    }

    .heading-intro{
      font-size: 60px;
      transition: all 0.3s ease;

      @media screen and (max-width: 800px){
        font-size: 40px;
      }

      @media screen and (max-width: 600px){
        font-size: 24px;
      }
    }

    
    .overview-intro{
      max-width: 550px;
      width: 100%;
      line-height: 1.3;
      padding-top: 50px;
      font-size: 18px;

      @media screen and (max-width: 800px){
        font-size: 16px;
      }

      @media screen and (max-width: 600px){
        font-size: 14px;
      }
    }
  }

  .btn-volume{
    position: absolute;
    height: 40px;
    width: 40px;
    right: 10%;
    top: 50%;
    cursor: pointer;
    border-radius: 50%;
    padding: 6px;
    color: #bbb;
    border: #fff solid 1px;
    transition: all 0.3s ease  ;
    transform: scale(1);
    &:hover{
      color: #fff;
      transform: scale(1.2);
      background-color: rgba(211, 211, 211, 0.18);
    }

    @media screen and (max-width: 800px){
      height: 30px;
      width: 30px;
      padding: 4px;
    }

    @media screen and (max-width: 600px){
      height: 20px;
      width: 20px;
      padding: 1px;
    }
  }

  .fadeBottom{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background-image: linear-gradient(
        180def,
        transparent,
        rgba(15, 15, 15, 0.6) 40%,
        rgb(17, 17, 17),
        rgb(17, 17, 17)
    )
  }
`;