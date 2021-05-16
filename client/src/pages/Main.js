import React, {useState,useEffect} from 'react'
import Videos from "../componnents/Videos"
const Main = () => {
  const [video, setVideo] = useState([]);
  const [serverMessage,setserverMessage] = useState("");
  
  useEffect(() => {
    addingVideo()
  },[])
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
            <Videos key={index}
            title={video.title}
            artist ={video.artist}
            album ={video.album}
            year ={video.year}
            desription ={video.desription}
            link ={video.link}
            />
           
            
          )
          
        })
      }
      <div className="msg">{serverMessage}</div>
    </div>
  );
}

export default Main;
