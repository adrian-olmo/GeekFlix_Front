import { Component, useEffect, useState } from "react";
import "./Carousel.css"

//Images
import Kong from "../../img/carousel/kong.jpg"
import WonderWoman from "../../img/carousel/WW.jpg"
import BadBoys from "../../img/carousel/BadBoys.jpg"
import RoboSiglo from "../../img/carousel/robo.jpg"

export function Carousel() {

    const [images, setImages] = useState(null);

    useEffect(() => {
        fetchImages()
    })

    return (
        <div class="container-all">
            <div class="slide">

                <div class="item-slide">
                    {images.map(imagen => (
                        <img src={imagen} />
                    ))}

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