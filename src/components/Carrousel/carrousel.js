import React from "react";

function Carrousel(){

    return (
    <section>
        <div id="carouselExampleFade" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="https://pbs.twimg.com/media/EGHYvttU4AAYKb7?format=jpg&name=large" className="d-block w-100" alt="..."></img>
            </div>
            <div className="carousel-item">
                <img src="https://pbs.twimg.com/media/EGHYvtkUcAAuc8T?format=jpg&name=large" className="d-block w-100" alt="..."></img>
            </div>
            <div className="carousel-item">
                <img src="https://pbs.twimg.com/media/EGHYvtjU0AAO8w1?format=jpg&name=large" className="d-block w-100" alt="..."></img>
            </div>
        </div>
        </div>  
    </section>
    )
}

export default Carrousel