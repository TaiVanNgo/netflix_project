import { IoDocumentSharp} from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { HiTrendingUp } from "react-icons/hi";
import { FaStar, FaGhost } from "react-icons/fa";
import { FaGun } from "react-icons/fa6";
import { MdOutlineTheaterComedy } from "react-icons/md";
import { RiHeartsFill } from "react-icons/ri";

import MenuItems from "./MenuItems"
import styled from "styled-components";

function Menus(props){
  return(
    <MenusPane>
      <MenuItems name="Home" Icon={IoMdHome}/>
      <MenuItems name="Trending" Icon={HiTrendingUp}/>
      <MenuItems name="Top Rated" Icon={FaStar}/>
      <MenuItems name="Actions Movies" Icon={FaGun}/>
      <MenuItems name="Comedy Movies" Icon={MdOutlineTheaterComedy}/>
      <MenuItems name="Horror Movies" Icon={FaGhost}/>
      <MenuItems name="Romance Movies" Icon={RiHeartsFill}/>
      <MenuItems name="Documentary" Icon={IoDocumentSharp}/>

    </MenusPane>
  )
}

export default Menus;

const MenusPane = styled.div`
  position: fixed;
  left: 0;
  top: 20%;
  width: 40px;
  padding: 4px 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 100;
  display: flex;
  flex-direction: column;
  transform-origin: left center;
  transition: all 0.3s linear;
  overflow: hidden;

  &:hover{
    width: 180px;
    background: rgba(0, 0, 0, 0.7);

  }

  .subMenu{
    display: left;
    align-items: center;
    width: max-content;
    margin-left: 2px;
    padding 4px 6px;
    cursor: pointer;
    
    .icon{
      font-size: 30px;
      margin-right: 8px;
    }

    span{
      font-size: 16px;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.5);

      &:hover{
        color: #fff
      }
    }
  }

`;