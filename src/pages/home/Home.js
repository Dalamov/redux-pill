//home components imports
import { useRef } from "react";
import updateSearch from "../../redux/search/actions";
import { connect } from "react-redux";
import { useDispatch } from "react-redux"

const Home = ({searchMapped}) => {
  const propertyRef = useRef();
  const dispatch = useDispatch();

  return (
    <>
      <input className="m-3" type="text" ref={propertyRef} />
      <button
        onClick={() => 
          dispatch(updateSearch(propertyRef.current.value))
        }
      >
        Search
      </button>
      {searchMapped}
    </>
  );
};

const mapStateToProps = (state) =>{
  return {
    searchMapped: state.search
  }
}

const reduxHoc = connect(mapStateToProps)

export default reduxHoc(Home);

