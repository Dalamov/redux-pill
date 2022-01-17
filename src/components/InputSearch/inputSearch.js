import React from "react";

import "./inputSearch.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function InputSearch(){

    return(
        <section className="search-sec">
            <div className="container row">
                <form action="#" method="post" novalidate="novalidate">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row justify-content-end">
                            <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                <input type="text" className="form-control search-slt" placeholder="Enter City"></input>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                <button type="button" className="btn btn-danger wrn-btn"><FontAwesomeIcon icon="search"/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            </div>
        </section>
    )
}

export default InputSearch