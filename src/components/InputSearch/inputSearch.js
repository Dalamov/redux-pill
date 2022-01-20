import React from "react";
import { useDispatch, connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import updateSearch from "../../redux/search/actions";


import "./inputSearch.css";

function InputSearch({ SearchReducer }) {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let city = SearchReducer.search

  function inputHandler(e) {
    let updatedCity = e.target.value
    console.log(updatedCity)
    dispatch(updateSearch(updatedCity))
  }

  function searchSubmitHandler(e){
    e.preventDefault()
    console.log(city)
    dispatch(updateSearch(city))
    navigate("/properties")
    
  }
  

  return (
    <section className="search-sec">
      <div className="container row">
        <div className="row">
          <div className="col-lg-12">
            <form onSubmit={(e) => searchSubmitHandler(e)}>
              <div className="row justify-content-end align-items-center">
                <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                  <input
                    className="m-3 form-control search-slt"
                    placeholder="Enter City"
                    type="text"
                    value={SearchReducer.search}
                    onChange={(e) => inputHandler(e)}
                  />
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                    <button
                    className="btn btn-danger wrn-btn"
                    type="submit"
                    onClick={(e) => searchSubmitHandler(e)}>
                    Search
                    </button>
                </div>
              </div>
            </form> 
          </div>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return { SearchReducer: state.SearchReducer };
};

export default connect(mapStateToProps)(InputSearch);

