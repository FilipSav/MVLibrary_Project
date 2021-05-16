import React from 'react'
const Videos = (props) => {
  return (
    <div>
    {props.title}<p></p>
    {props.artist}<p></p>
    {props.album}<p></p>
    {props.year}<p></p>
    {props.description}<p></p>
    {props.link}

    </div>
  );
}

export default Videos;
