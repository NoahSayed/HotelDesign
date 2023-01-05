import "./Featured.css";
import styled from "styled-components";
const Featured = () => {
    return (
<div className="featured">

        <div className="featuredItem">
          <img
            src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk= "
            alt=""
            className="featuredI"
          />
          
        </div>
        <wrap>
        <img  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"            alt=""
          className="featuredImg"
          />
          <img src="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="            alt=""
          className="featuredImg"
          />
           <img src="https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg"            alt=""
          className="featuredImg"
          />
           <img src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"            alt=""
          className="featuredImg"
          />


        </wrap>

        </div>
    )}

export default Featured;