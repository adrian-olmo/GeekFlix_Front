import { Component } from "react";
import "./Carousel.css"

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
        <div class="container-all">
            <div class="slide">

                <div class="item-slide">
                    <img src={Kong} />
                </div>

                <div class="item-slide">
                    <img src={BadBoys} />
                </div>

                <div class="item-slide">
                    <img src={RoboSiglo} />
                </div>

            </div>

        </div>
    )

}