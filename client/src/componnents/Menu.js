import React from 'react'
import{Link} from "react-router-dom";
const Menu = () => {
  return (
    <div>
    <Link to="/">Main Page</Link>
    <Link to="/add-video">Adding a video</Link>

    </div>
  );
}

export default Menu;
