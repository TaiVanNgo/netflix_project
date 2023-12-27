import styled from 'styled-components';
import NetflixLogo from '../../assets/images/Netflix_logo.png'
import { MdSearch } from 'react-icons/md'

function Navbar(props){
    return (
        <Navigation>
          <div className='nav-container'>
            <div className='logo'>
                <img src={NetflixLogo} alt="" />
            </div>
            <div className='nav-search'>
                <MdSearch className='icon-search'/>
                <input type="text" placeholder="Input title, genres, people"></input>
            </div>
          </div>
        </Navigation>
    )
}   

export default Navbar;

const Navigation = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  transition-timing-function: ease-in;
  transition: all 1s

  @media only screen and (max-witdh: 600px){
    height: 100px;
  }

  .nav-container{
    background-color: #222;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    height: 100%;

    @media only screen and (max-witdh: 600px){
        flex-direction: column;
    }

    .logo{
      width: 120px;
      cursor: pointer;
      img{
          width: 100%;
        }
    }

    .nav-search{
      color: white;
      padding-right: 20px;
      display: flex;
      justify-content: flex-end;

      &:hover .icon-search{
        color: white;
      }

      .icon-search{
        width: 20px;
        height: 20px;
        cursor: pointer;
        transform: translateX(24px) translateY(10px);
        color: #bbb;
      }

      input{
        font-size: 14px;
        border: 1px solid #fff;
        color: white;
        outline: none;
        width: 0;
        padding: 10px;
        cursor: pointer;
        opacity: 0;
        background: #222;
        transition: width 0.5s;

        &: focus{
          padding-left: 26px;
          width: 300px;
          cursor: text;
          opacity: 1;
          border-radius: 4px;
        }
      }
    }
  }
`;