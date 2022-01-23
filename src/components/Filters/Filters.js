import React from "react";
import { connect } from "react-redux";
import { getType, getPrice, getCapacity } from "../../redux/filters/actions";
import { useDispatch } from "react-redux";
import  InputSearch  from "../InputSearch/InputSearch" ;

const Filters = ({ FilterReducer }) => {
  const dispatch = useDispatch();

  const handlePrice = (e) => {
    let priceArray = FilterReducer.price;

    if (e.target.checked) {
      priceArray.push(e.target.value);
    } else {
      const i = priceArray.indexOf(e.target.value);
      if (i > -1) {
        priceArray.splice(i, 1);
      }
    }
    dispatch(getPrice(priceArray));
  }

  const handleType = (e) => {
    let typeArray = FilterReducer.typeOfProperty;

    if (e.target.checked) {
      typeArray.push(e.target.value);
    } else {
      const i = typeArray.indexOf(e.target.value);
      if (i > -1) {
        typeArray.splice(i, 1);
      }
    }
    dispatch(getType(typeArray));
  }

  const handleCapacity = (e) => {
    let capacityArray = FilterReducer.capacity;
    if (e.target.checked) {
      capacityArray.push(e.target.value);
    }
    else {
      const i = capacityArray.indexOf(e.target.value);
      if (i > -1) {
        capacityArray.splice(i, 1);
      }
    }
    dispatch(getCapacity(capacityArray));
  }

  return (
    <div className="container my-sm-5 border p-0 bg-sec-light">
      <div id="content">
        {/* <InputSearch 
        
        /> */}
        <div className="d-sm-flex flex-column ">
          <div className=" text-color m-1 d-flex shadow-sm p-1 bg-white rounded  h6">
            <b>Filter by :</b>
          </div>
          <div className=" w-100 d-flex justify-content-center ">
            <div
              id="filter"
              className="justify-content-center w-100 p-2 bg-light m-3 border d-flex "
            >
              <div className="d-flex flex-row gap-4">
                <div className="box border-bottom shadow-sm p-3 mb-5 bg-white rounded">
                
                  <div className="box-label text-uppercase d-flex align-items-center border-bottom  d-flex">
                    Property type
                    <span className="fas fa-plus"></span>
                  </div>
                  
                  <div id="inner-box" className="text-secondary collapse show">
                    <div className="my-1">
                      <label className="tick">
                        Hotels
                        <input
                          value="Hotels"
                          onChange={(e) => handleType(e)}
                          type="checkbox"
                        />
                        <span className="check"></span>
                      </label>
                    </div>
                    <div className="my-1">
                      <label className="tick">
                        Apartments
                        <input
                          value="Apartments"
                          onChange={(e) => handleType(e)}
                          type="checkbox"
                        />
                        <span className="check"></span>
                      </label>
                    </div>
                    <div className="my-1">
                      <label className="tick">
                        Houses
                        <input
                          value="Houses"
                          onChange={(e) => handleType(e)}
                          type="checkbox"
                        />
                        <span className="check"></span>
                      </label>
                    </div>
                    <div className="my-1">
                      <label className="tick">
                        on the outskirts of Barcelona
                        <input
                          value="on the outskirts of Barcelona"
                          onChange={(e) => handleType(e)}
                          type="checkbox"
                        />
                        <span className="check"></span>
                      </label>
                    </div>
                    <div className="my-1">
                      <label className="tick">
                        Resorts
                        <input
                          value="Resorts"
                          onChange={(e) => handleType(e)}
                          type="checkbox"
                        />
                        <span className="check"></span>
                      </label>
                    </div>
                    <div className="my-1">
                      <label className="tick">
                        Villas
                        <input
                          value="Villas"
                          onChange={(e) => handleType(e)}
                          type="checkbox"
                        />
                        <span className="check"></span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="box border-bottom shadow-sm p-3 h-50 mb-5 bg-white rounded">
                  <div className="border-bottom  box-label text-uppercase d-flex align-items-center d-flex">
                    Price
                    <span className="fas fa-plus"></span>
                  </div>
                  <div id="inner-box" className="text-secondary collapse show">
                    <div className="my-1">
                      <label className="tick">
                        50 - 100
                        <input
                          value="100"
                          onChange={(e) => handlePrice(e)}
                          type="checkbox"
                          data-id="0"
                        />
                        <span className="check"></span>
                      </label>
                    </div>
                    <div className="my-1">
                      <label className="tick">
                        100 - 150
                        <input
                          value="150"
                          onChange={(e) => handlePrice(e)}
                          type="checkbox"
                          data-id="1"
                        />
                        <span className="check"></span>
                      </label>
                    </div>

                    <div className="my-1">
                      <label className="tick">
                        more than 150
                        <input
                          value="151"
                          onChange={(e) => handlePrice(e)}
                          type="checkbox"
                          data-id="2"
                        />
                        <span className="check"></span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="box border-bottom shadow-sm p-3 mb-5 bg-white rounded">
                  <div className="border-bottom  box-label text-uppercase d-flex align-items-center d-flex">
                    Maximum capacity
                    <span className="fas fa-plus"></span>
                  </div>
                  <div id="inner-box" className="text-secondary collapse show">
                    <div className="my-1">
                      <label className="tick">
                        1{" "}
                        <input
                          value="1"
                          onChange={(e) => handleCapacity(e)}
                          type="checkbox"
                        />{" "}
                        <span className="check" />
                      </label>
                    </div>
                    <div className="my-1">
                      <label className="tick">
                        2{" "}
                        <input
                          value="2"
                          onChange={(e) => handleCapacity(e)}
                          type="checkbox"
                        />
                        <span className="check"></span>
                      </label>
                    </div>
                    <div className="my-1">
                      <label className="tick">
                        3{" "}
                        <input
                          value="3"
                          onChange={(e) => handleCapacity(e)}
                          type="checkbox"
                        />
                        <span className="check"></span>
                      </label>
                    </div>

                    <div className="my-1">
                      <label className="tick">
                        4{" "}
                        <input
                          value="4"
                          onChange={(e) => handleCapacity(e)}
                          type="checkbox"
                        />
                        <span className="check"></span>
                      </label>
                    </div>
                    <div className="my-1">
                      <label className="tick">
                        5{" "}
                        <input
                          value="5"
                          onChange={(e) => handleCapacity(e)}
                          type="checkbox"
                        />
                        <span className="check"></span>
                      </label>
                    </div>
                    <div className="my-1">
                      <label className="tick">
                        6 - 10{" "}
                        <input
                          value="10"
                          onChange={(e) => handleCapacity(e)}
                          type="checkbox"
                        />
                        <span className="check"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
   </div>
   </div> 
    );
};


const mapStateToProps = (state) => {
  return { FilterReducer: state.FilterReducer };
};
export default connect(mapStateToProps)(Filters);
