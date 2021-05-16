import React, {useState} from 'react'
const AddVideos = () => {
  const[inputFromAdmin,setEnterFromAdmin] = useState("");
  const[inputFromAdmin2,setEnterFromAdmin2] = useState("");
  const[inputFromAdmin3,setEnterFromAdmin3] = useState("");
  const[inputFromAdmin4,setEnterFromAdmin4] = useState("");
  const[inputFromAdmin5,setEnterFromAdmin5] = useState("");
  const[inputFromAdmin6,setEnterFromAdmin6] = useState("");

  const insertionToDb = () => {
    fetch("http://localhost:5000/save-video",{
      method:"post",
      headers:{
        "Accept":"application/json",
        "Content-type":"application/json"
      },
      body:JSON.stringify({title:inputFromAdmin,
        artist:inputFromAdmin2,
        album:inputFromAdmin3,
        year:inputFromAdmin4,
        description:inputFromAdmin5,
        link:inputFromAdmin6})
    }).then((data) => {
      return data.json();
    }).then((finalData) => {
      console.log(finalData.msg);
      setEnterFromAdmin("");
      setEnterFromAdmin2("");
      setEnterFromAdmin3("");
      setEnterFromAdmin4("");
      setEnterFromAdmin5("")
      setEnterFromAdmin6("")
    })
  }

  return (
    <div>
      <br/>
     <p>Title:</p><input type="text" value={inputFromAdmin} onInput={(e) => {
      setEnterFromAdmin(e.target.value);
    }}/><p></p><br/>
     <p>Artist:</p><input type="text" value={inputFromAdmin2} onInput={(e) => {
      setEnterFromAdmin2(e.target.value);
    }}/><p></p><br/>
     <p>Album:</p><input type="text" value={inputFromAdmin3} onInput={(e) => {
      setEnterFromAdmin3(e.target.value);
    }}/><p></p><br/>
     <p>Year:</p><input type="text" value={inputFromAdmin4} onInput={(e) => {
      setEnterFromAdmin4(e.target.value);
    }}/><p></p><br/>
     <p>Description:</p><input type="text" value={inputFromAdmin5} onInput={(e) => {
      setEnterFromAdmin5(e.target.value);
    }}/><p></p><br/>
     <p>Link:</p><input type="text" value={inputFromAdmin6} onInput={(e) => {
      setEnterFromAdmin6(e.target.value);
    }}/><p></p><br/>
    <div className="btn" onClick={insertionToDb}>Insert video</div>
    </div>
  );
}

export default AddVideos;
