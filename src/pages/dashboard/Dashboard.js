import "./dashboard.css";
export default function Dashboard() {
  return (
    <div class="container my-sm-5 border p-0 bg-sec-light">
      <div id="content">
        <div class="d-flex align-items-sm-center py-sm-3 px-md-3 location">
          {" "}
          <input
            type="text"
            required
            placeholder="Location"
            class="w-50 my-sm-0 my-2 form-control"
          />{" "}
          <input
            type="submit"
            value="search"
            class="btn btn-primary mx-3 my-sm-0 mb-2"
          />{" "}
        </div>

        <div class="d-sm-flex flex-column ">
          <div class=" text-color m-1 d-flex shadow-sm p-1 bg-white rounded  h6">
            <b>Filter by :</b>
          </div>
          <div class=" w-100 d-flex justify-content-center ">
            <div
              id="filter"
              class="justify-content-center w-100 p-2 bg-light m-3 border d-flex "
            >
              <div className="d-flex flex-row gap-4">
                <div class="box border-bottom shadow-sm p-3 mb-5 bg-white rounded">
                  <div class="box-label text-uppercase d-flex align-items-center border-bottom  d-flex">
                    Property type{" "}
                    <button
                      class="btn ms-auto"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#inner-box"
                      aria-expanded="false"
                      aria-controls="inner-box"
                    >
                      {" "}
                      <span class="fas fa-plus"></span>{" "}
                    </button>{" "}
                  </div>

                  <div id="inner-box" class="text-secondary collapse show">
                    <div class="my-1">
                      {" "}
                      <label class="tick">
                        Hotels <input type="checkbox" />{" "}
                        <span class="check"></span>{" "}
                      </label>{" "}
                    </div>
                    <div class="my-1">
                      {" "}
                      <label class="tick">
                        Apartments <input type="checkbox" />{" "}
                        <span class="check"></span>{" "}
                      </label>{" "}
                    </div>
                    <div class="my-1">
                      {" "}
                      <label class="tick">
                        Guest houses <input type="checkbox" />{" "}
                        <span class="check"></span>{" "}
                      </label>{" "}
                    </div>
                    <div class="my-1">
                      {" "}
                      <label class="tick">
                        Resorts <input type="checkbox" />{" "}
                        <span class="check"></span>{" "}
                      </label>{" "}
                    </div>
                    <div class="my-1">
                      {" "}
                      <label class="tick">
                        Villas <input type="checkbox" />{" "}
                        <span class="check"></span>{" "}
                      </label>{" "}
                    </div>
                  </div>
                </div>

                <div class="box border-bottom shadow-sm p-3 h-50 mb-5 bg-white rounded">
                  <div class="border-bottom  box-label text-uppercase d-flex align-items-center d-flex">
                    Price{" "}
                    <button
                      class="btn ms-auto"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#inner-box"
                      aria-expanded="false"
                      aria-controls="inner-box"
                    >
                      {" "}
                      <span class="fas fa-plus"></span>{" "}
                    </button>{" "}
                  </div>
                  <div id="inner-box" class="text-secondary collapse show">
                    <div class="my-1">
                      {" "}
                      <label class="tick">
                        3000 - 4500 <input type="checkbox" />{" "}
                        <span class="check"></span>{" "}
                      </label>{" "}
                    </div>
                    <div class="my-1">
                      {" "}
                      <label class="tick">
                        4500 - 6000 <input type="checkbox" />{" "}
                        <span class="check"></span>{" "}
                      </label>{" "}
                    </div>

                    <div class="my-1">
                      {" "}
                      <label class="tick">
                        10,000 and Above <input type="checkbox" />{" "}
                        <span class="check"></span>{" "}
                      </label>{" "}
                    </div>
                  </div>
                </div>

                <div class="box border-bottom shadow-sm p-3 mb-5 bg-white rounded">
                  <div class="border-bottom  box-label text-uppercase d-flex align-items-center d-flex">
                    Maximum capacity{" "}
                    <button
                      class="btn ms-auto"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#inner-box"
                      aria-expanded="false"
                      aria-controls="inner-box"
                    >
                      {" "}
                      <span class="fas fa-plus"></span>{" "}
                    </button>{" "}
                  </div>
                  <div id="inner-box" class="text-secondary collapse show">
                    <div class="my-1">
                      {" "}
                      <label class="tick">
                        1 <input type="checkbox" /> <span class="check" />{" "}
                      </label>{" "}
                    </div>
                    <div class="my-1">
                      {" "}
                      <label class="tick">
                        2 <input type="checkbox" /> <span class="check"></span>{" "}
                      </label>{" "}
                    </div>
                    <div class="my-1">
                      {" "}
                      <label class="tick">
                        3 <input type="checkbox" /> <span class="check"></span>{" "}
                      </label>{" "}
                    </div>

                    <div class="my-1">
                      {" "}
                      <label class="tick">
                        4 <input type="checkbox" /> <span class="check"></span>{" "}
                      </label>{" "}
                    </div>
                    <div class="my-1">
                      {" "}
                      <label class="tick">
                        5 <input type="checkbox" /> <span class="check"></span>{" "}
                      </label>{" "}
                    </div>
                    <div class="my-1">
                      {" "}
                      <label class="tick">
                        6 - 10 <input type="checkbox" />{" "}
                        <span class="check"></span>{" "}
                      </label>{" "}
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-8 mx-auto">
            <ul class="d-flex flex-column gap-3">
              <li class="list-group-item shadow-lg p-3 bg-white rounded m-3 border-0 bg-white">
                <div class="media align-items-lg-center flex-row d-flex p-3">
                  <div class="media-body order-2 order-lg-1">
                    <h5 class="mt-0 font-weight-bold mb-2">
                      NH Collection Barcelona Gran Hotel Calderon
                    </h5>
                    <p class="font-italic text-muted mb-0 small">
                      Eixample, Barcelona. <br/>
                      <hr/>
                      Property The elegant NH Collection Barcelona Gran Hotel
                      Calderón has an excellent location just off Passeig de
                      Gràcia Boulevard in central Barcelona.
                    </p>
                    <div class="d-flex align-items-center justify-content-between mt-1">
                      <h6 class="font-weight-bold my-2">162€</h6>
                      <ul class="list-inline small">
                        <li class="list-inline-item m-0">
                          <i class="fa fa-star text-success"></i>
                        </li>
                        <li class="list-inline-item m-0">
                          <i class="fa fa-star text-success"></i>
                        </li>
                        <li class="list-inline-item m-0">
                          <i class="fa fa-star text-success"></i>
                        </li>
                        <li class="list-inline-item m-0">
                          <i class="fa fa-star text-success"></i>
                        </li>
                        <li class="list-inline-item m-0">
                          <i class="fa fa-star-o text-gray"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <img
                    src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/330445543.jpg?k=9550684fae718c42bda728d891844d83fca209d8a02cb7a465b4019322af2070&o=&hp=1"
                    alt="Generic placeholder image"
                    width="320"
                    class="ml-lg-5 order-1 order-lg-2 border m-2"
                  />
                </div>
              </li>

              <li class="list-group-item shadow-lg p-3 mb-5 bg-white rounded m-3 border-0 bg-white">
                <div class="media align-items-lg-center flex-row d-flex p-3">
                  <div class="media-body order-2 order-lg-1">
                    <h5 class="mt-0 font-weight-bold mb-2">
                      NH Collection Barcelona Gran Hotel Calderon
                    </h5>
                    <p class="font-italic text-muted mb-0 small">
                      Eixample, Barcelona. <br/>
                      AccessBeach. <br/>
                      Nearby 2.5 km from beach Travel Sustainable. 
                      <hr/>
                      Property The elegant NH Collection Barcelona Gran Hotel
                      Calderón has an excellent location just off Passeig de
                      Gràcia Boulevard in central Barcelona.
                    </p>
                    <div class="d-flex align-items-center justify-content-between mt-1">
                      <h6 class="font-weight-bold my-2">162€</h6>
                      <ul class="list-inline small">
                        <li class="list-inline-item m-0">
                          <i class="fa fa-star text-success"></i>
                        </li>
                        <li class="list-inline-item m-0">
                          <i class="fa fa-star text-success"></i>
                        </li>
                        <li class="list-inline-item m-0">
                          <i class="fa fa-star text-success"></i>
                        </li>
                        <li class="list-inline-item m-0">
                          <i class="fa fa-star text-success"></i>
                        </li>
                        <li class="list-inline-item m-0">
                          <i class="fa fa-star-o text-gray"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <img
                    src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/330445543.jpg?k=9550684fae718c42bda728d891844d83fca209d8a02cb7a465b4019322af2070&o=&hp=1"
                    alt="Generic placeholder image"
                    width="320"
                    class="ml-lg-5 order-1 order-lg-2 border m-2"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
