//home components imports
import { useRef } from "react";
import  updateSearch  from "../../redux/actions";

export default function Home() {
  return (
    <input className="m-3" type="text"  />
  )
  }







// const Home = ({ updateSearch }) => {
//   const propiertyRef = useRef(null);

//   <>
//   <input className="m-3" type="text" ref={propiertyRef} />
//   {/* <button
//     onClick={() => {
//       updateSearch(propiertyRef.current.value);
//     }}
//   >
//     Search
//   </button> */}

//   </>
// };

// export default Home;
