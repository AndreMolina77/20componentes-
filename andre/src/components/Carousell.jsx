import imagen1 from "../img/1.png"
import imagen2 from "../img/2.png"
import imagen3 from "../img/3.jpg"

const Carousell = ({}) => {
    return(
        <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={imagen1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={imagen2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={imagen3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>    
    )
}

export default Carousell