import React, {useState} from 'react'
const Main = () => {
  const [video, setVideo] = useState([]);
  const [serverMessage,setserverMessage] = useState("");
  
  const addingVideo = async () => {
    setserverMessage("reloading data")
    const data = await fetch("http://localhost:5000/get-video");
    const finalData = await data.json();
    const {msg,documents} = finalData;  
    setVideo(documents)
    setserverMessage(msg);
  }
  return (
    <div>
      {
        video.map((video,index) => {
          return (
            <div key={index}>{video.title}<p></p>
            {video.artist}<p></p>
            {video.album}<p></p>
            {video.year}<p></p>
            {video.description}<p></p>
            {video.link}</div>
            
          )
          
        })
      }
      <div className="btn" onClick={addingVideo}>Add video</div>
      <div className="msg">{serverMessage}</div>
    </div>
  );
}

export default Main;
