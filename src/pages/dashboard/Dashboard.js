import React from "react";
import { connect } from "react-redux";
import { getType } from "../../redux/filters/actions";
import { useDispatch } from "react-redux";
import "./dashboard.css";

const Dashboard = ( {type} ) => {
  const dispatch = useDispatch();

  // const handleType = (e) => {
  //   const selectedType= ""
  //   if (e.target.checked) {
  //       selectedType = e.target.attributes.value.value
  //     }
  //     return selectedType
  //   // dispatch(getFilteredProperties(value));
  // };

  return (
    <div className="container my-sm-5 border p-0 bg-sec-light">
      <div id="content">
        <div className="d-flex align-items-sm-center py-sm-3 px-md-3 location">
          {" "}
          <input
            type="text"
            required
            placeholder="Location"
            className="w-50 my-sm-0 my-2 form-control"
          />{" "}
          <input
            type="submit"
            value="search"
            className="btn btn-primary mx-3 my-sm-0 mb-2"
          />{" "}
        </div>

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
                    Property type{" "}
                    <button
                      className="btn ms-auto"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#inner-box"
                      aria-expanded="false"
                      aria-controls="inner-box"
                    >
                      {" "}
                      <span className="fas fa-plus"></span>{" "}
                    </button>{" "}
                  </div>

                  <div id="inner-box" className="text-secondary collapse show">
                    <div className="my-1">
                      {" "}
                      <label className="tick">
                        Hotels{" "}
                        <input
                          value="Hotels"
                          onChange={(e) => dispatch(getType(e.target.attributes.value.value))}
                          type="checkbox"
                        />{" "}
                        <span className="check"></span>{" "}
                      </label>{" "}
                    </div>
                    <div className="my-1">
                      {" "}
                      <label className="tick">
                        Apartments{" "}
                        <input
                          value="Apartments"
                          onChange={(e) => dispatch(getType(e.target.attributes.value.value))}
                          type="checkbox"
                        />{" "}
                        <span className="check"></span>{" "}
                      </label>{" "}
                    </div>
                    <div className="my-1">
                      {" "}
                      <label className="tick">
                        Houses <input type="checkbox" />{" "}
                        <span className="check"></span>{" "}
                      </label>{" "}
                    </div>
                    <div className="my-1">
                      {" "}
                      <label className="tick">
                        on the outskirts of Barcelona <input type="checkbox" />{" "}
                        <span className="check"></span>{" "}
                      </label>{" "}
                    </div>
                    <div className="my-1">
                      {" "}
                      <label className="tick">
                        Resorts <input type="checkbox" />{" "}
                        <span className="check"></span>{" "}
                      </label>{" "}
                    </div>
                    <div className="my-1">
                      {" "}
                      <label className="tick">
                        Villas <input type="checkbox" />{" "}
                        <span className="check"></span>{" "}
                      </label>{" "}
                    </div>
                  </div>
                </div>

                <div className="box border-bottom shadow-sm p-3 h-50 mb-5 bg-white rounded">
                  <div className="border-bottom  box-label text-uppercase d-flex align-items-center d-flex">
                    Price{" "}
                    <button
                      className="btn ms-auto"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#inner-box"
                      aria-expanded="false"
                      aria-controls="inner-box"
                    >
                      {" "}
                      <span className="fas fa-plus"></span>{" "}
                    </button>{" "}
                  </div>
                  <div id="inner-box" className="text-secondary collapse show">
                    <div className="my-1">
                      {" "}
                      <label className="tick">
                        3000 - 4500 <input type="checkbox" />{" "}
                        <span className="check"></span>{" "}
                      </label>{" "}
                    </div>
                    <div className="my-1">
                      {" "}
                      <label className="tick">
                        4500 - 6000 <input type="checkbox" />{" "}
                        <span className="check"></span>{" "}
                      </label>{" "}
                    </div>

                    <div className="my-1">
                      {" "}
                      <label className="tick">
                        10,000 and Above <input type="checkbox" />{" "}
                        <span className="check"></span>{" "}
                      </label>{" "}
                    </div>
                  </div>
                </div>

                <div className="box border-bottom shadow-sm p-3 mb-5 bg-white rounded">
                  <div className="border-bottom  box-label text-uppercase d-flex align-items-center d-flex">
                    Maximum capacity{" "}
                    <button
                      className="btn ms-auto"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#inner-box"
                      aria-expanded="false"
                      aria-controls="inner-box"
                    >
                      {" "}
                      <span className="fas fa-plus"></span>{" "}
                    </button>{" "}
                  </div>
                  <div id="inner-box" className="text-secondary collapse show">
                    <div className="my-1">
                      {" "}
                      <label className="tick">
                        1 <input type="checkbox" /> <span className="check" />{" "}
                      </label>{" "}
                    </div>
                    <div className="my-1">
                      {" "}
                      <label className="tick">
                        2 <input type="checkbox" /> <span className="check"></span>{" "}
                      </label>{" "}
                    </div>
                    <div className="my-1">
                      {" "}
                      <label className="tick">
                        3 <input type="checkbox" /> <span className="check"></span>{" "}
                      </label>{" "}
                    </div>

                    <div className="my-1">
                      {" "}
                      <label className="tick">
                        4 <input type="checkbox" /> <span className="check"></span>{" "}
                      </label>{" "}
                    </div>
                    <div className="my-1">
                      {" "}
                      <label className="tick">
                        5 <input type="checkbox" /> <span className="check"></span>{" "}
                      </label>{" "}
                    </div>
                    <div className="my-1">
                      {" "}
                      <label className="tick">
                        6 - 10 <input type="checkbox" />{" "}
                        <span className="check"></span>{" "}
                      </label>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 mx-auto">
            <ul className="d-flex flex-column gap-3">
              <li className="list-group-item shadow-lg p-3 mb-5 bg-white rounded m-3 border-0 bg-white">
                <div className="media align-items-lg-center flex-row d-flex p-3">
                  <div className="media-body order-2 order-lg-1">
                    <h5 className="mt-0 font-weight-bold mb-2">
                      NH Collection Barcelona Gran Hotel Calderon
                    </h5>
                    <p className="font-italic text-muted mb-0 small">
                      Eixample, Barcelona. <br />
                      AccessBeach. <br />
                      Nearby 2.5 km from beach Travel Sustainable.
                      Property The elegant NH Collection Barcelona Gran Hotel
                      Calderón has an excellent location just off Passeig de
                      Gràcia Boulevard in central Barcelona.
                    </p>
                    <div className="d-flex align-items-center justify-content-between mt-1">
                      <h6 className="font-weight-bold my-2">162€</h6>
                      <ul className="list-inline small">
                        <li className="list-inline-item m-0">
                          <i className="fa fa-star text-success"></i>
                        </li>
                        <li className="list-inline-item m-0">
                          <i className="fa fa-star text-success"></i>
                        </li>
                        <li className="list-inline-item m-0">
                          <i className="fa fa-star text-success"></i>
                        </li>
                        <li className="list-inline-item m-0">
                          <i className="fa fa-star text-success"></i>
                        </li>
                        <li className="list-inline-item m-0">
                          <i className="fa fa-star-o text-gray"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <img
                    src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/330445543.jpg?k=9550684fae718c42bda728d891844d83fca209d8a02cb7a465b4019322af2070&o=&hp=1"
                    alt="Generic placeholder image"
                    width="320"
                    className="ml-lg-5 order-1 order-lg-2 border m-2"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    type: state.typeOfPropierty,
  };
};

  const reduxHoc = connect(mapStateToProps);

  export default reduxHoc(Dashboard);

// export default connect(mapStateToProps,{updatedType})(Dashboard);
