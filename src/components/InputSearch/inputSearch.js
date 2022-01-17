import React from "react";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import updateSearch from "../../redux/search/actions";

import "./inputSearch.css";

function InputSearch() {
  const propertyRef = useRef();
  const dispatch = useDispatch();
  return (
    <section className="search-sec">
      <div className="container row">
        <div className="row">
          <div className="col-lg-12">
            <div className="row justify-content-end align-items-center">
              <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                <input
                  className="m-3 form-control search-slt"
                  placeholder="Enter City"
                  type="text"
                  ref={propertyRef}
                />
                </div>
                  <div className="col-lg-3 col-md-3 col-sm-12 p-0">

                <button
                  className="btn btn-danger wrn-btn"
                  onClick={() =>
                    dispatch(updateSearch(propertyRef.current.value))
                  }
                >
                  Search
                </button>
                  </div>
              </div>
            </div>
          </div>
        </div>

    </section>
  );
}

export default InputSearch;
