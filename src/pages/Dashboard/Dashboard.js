import React, { useEffect } from "react";
import Filters from "../../components/Filters";
import "./dashboard.css";
import { getProperties } from "../../api/fetchProperties";

const Dashboard = () => {
  let result;

  async function propertiesList() {
    result = await getProperties();
    console.log(result);
  }
  propertiesList();

  // useEffect(() => {
  //   (async () => {
  //     result = await getProperties();

  //   })()

  return (
    <>
      <Filters />
      {result.map((property) => {
        return (
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <ul className="d-flex flex-column gap-3">
                <li className="list-group-item shadow-lg p-3 mb-5 bg-white rounded m-3 border-0 bg-white">
                  <div className="media align-items-lg-center flex-row d-flex p-3">
                    <div className="media-body order-2 order-lg-1">
                      <h5 className="mt-0 font-weight-bold mb-2">
                        {property.title}
                      </h5>
                      <p className="font-italic text-muted mb-0 small">
                        {property.street} <br />
                        {property.description}
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
                      width="320"
                      alt="carrousel img"
                      className="ml-lg-5 order-1 order-lg-2 border m-2"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Dashboard;
