import { useState, useEffect } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [movie, setMovie] = useState("");

  //useEffect
  //component did mount, component did update, component will unmount

  //Case 1
  //if passing no dependency array it keeps on running
  //infinite loop
  //   useEffect(() => {
  //     document.title = `Clicked ${counter} times`;
  //     console.log("useffect is running on every render");
  //   });

  //Case 2
  //if passing an empty dependency array
  //it will only run once when component is inserted to the dom
  //componentDidMount
  //   useEffect(() => {
  //     document.title = `Clicked ${counter} times`;

  //   }, []);

  //Case 3
  //when you pass a dependency in array
  //component did update
  //   useEffect(() => {
  //     document.title = `Clicked ${counter} times`;
  //     console.log("useEffect is running whenever counter 2 changes");
  //   }, [counter2]);
  //   useEffect(() => {
  //     //fetch the data related to the search from backend
  //   }, [movie]);

  //case 4
  //component will unmount

  //   useEffect(() => {

  //     addEventListener('click', ()=>{

  //     })
  //     return () => {
  //       removeEventListener('click', ()=>{})
  //     };
  //   }, []);

  return (
    <div>
      {/* <input
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
        placeholder="search for movies"
      /> */}
      <h1>Counter: {counter} </h1>
      <h1>Counter2: {counter2} </h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter2(counter2 + 1)}>
        Increment Counter2
      </button>
    </div>
  );
}
