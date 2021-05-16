import React, {useState} from 'react'
const Main = () => {
  const [video, setVideo] = useState([
    {title:"muzika"},
    {artist:"John"},
    {album:"you need to save"},
    {year:1980},
    {description:"je to hudba"},
    {link:"www.seznam.cz"}
  ]);
  const addingVideo = () => {
    const array = [...video];
    array.push({title:"muzika"});
    array.push({artist:"Adam"});
    array.push({album:"Helo helo"});
    array.push({year:1980});
    array.push({description:"je to písnička"});
    array.push({link:"www.google.com"});
    setVideo(array);
  }
  return (
    <div>
      {
        video.map((video,index) => {
          return (
            <div key={index}>{video.title}{video.artist}
            {video.album}{video.year}{video.description}{video.link}</div>
            
          )
          
        })
      }
      <div className="btn" onClick={addingVideo}>Add video</div>
    </div>
  );
}

export default Main;
