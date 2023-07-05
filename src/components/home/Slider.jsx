import React from "react"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

function Slider() {
    return (
        <div className="slider">
            <AliceCarousel autoPlay autoPlayInterval="3000">
                <img src="/assets/slider/1.jpg" alt="" className="slider__img"/>
                <img src="/assets/slider/2.jpg" alt="" className="slider__img" />
                <img src="/assets/slider/3.jpg" alt="" className="slider__img" />
                <img src="/assets/slider/4.jpg" alt="" className="slider__img"/>
                <img src="/assets/slider/5.png" alt="" className="slider__img"/>
                <img src="/assets/slider/6.jpg" alt="" className="slider__img"/>
            </AliceCarousel>
        
        </div>
    )
}

export default Slider;