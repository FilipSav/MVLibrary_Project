import React,{useContext} from 'react'
import{Link} from "react-router-dom";
import{GlobalContext} from "../context/GlobalContext/GlobalContext"
const Menu = () => {
 const {video} = useContext (GlobalContext);
  return (
    <div>
    <Link to="/">Main Page</Link>
    <Link to="/add-video">Adding a video</Link>
    <div>{video}</div>
    </div>
  );
}

export default Menu;
