import { Component } from "react";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


//Images
import Kong from "../../img/carousel/kong.jpg"
import WonderWoman from "../../img/carousel/WW.jpg"
import BadBoys from "../../img/carousel/BadBoys.jpg"
import RoboSiglo from "../../img/carousel/robo.jpg"

export function Carousel() {

    /* constructor(props, context) {
        super(props, context);
        this.state = {
            galleryItems: []
        }
    }

    getImages() {

        const urlImages = 'http://localhost:5000/movies/poster';
        const resultImages = await fetch(urlImages, {
            method: 'GET',
            headers: { 'Content.Type': 'application/json' }
        });

        return resultImages
    }
 */
    return (
        <>
            <AliceCarousel autoPlay autoPlayInterval="3000">
                <img src={Kong} className="sliderimg" />
                <img src={WonderWoman} className="sliderimg" />
                <img src={BadBoys} className="sliderimg" />
            </AliceCarousel>
        </>
    )

}