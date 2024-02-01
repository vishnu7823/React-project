import React, { useState, useEffect } from "react";

function About() {
  const [message, setmessage] = useState("post");
  const [item,setItem]= useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${message}`)
      .then((response) => response.json())
      .then((json) => setItem(json));
  }, [message]);

  return (
    <>
    <div>
      <button onClick={() => setmessage("Post")}>Post</button>
      <button onClick={() => setmessage("User")}>User</button>
      <button onClick={() => setmessage("Account")}>Account</button>
      <h1>{message}</h1>
      {item.map(ele => <pre>{JSON.stringify(ele)}</pre>)}
      
    </div>
    </>
  );
}

export default About;
