import { Component, useEffect, useState } from "react";
import "./Carousel.css"

//Images
import Kong from "../../img/carousel/kong.jpg"
import WonderWoman from "../../img/carousel/WW.jpg"
import BadBoys from "../../img/carousel/BadBoys.jpg"
import RoboSiglo from "../../img/carousel/robo.jpg"
import Scooby from "../../img/carousel/scooby.jpg"
import Wick from "../../img/carousel/wick.jpg"
import MK from "../../img/carousel/mk.jpg"
import Vengadores from "../../img/carousel/vengadores.jpg"
import Doorman from "../../img/carousel/doorman.jpg"
import Skyline from "../../img/carousel/skyline.jpg"
import Agencia from "../../img/carousel/agencia.jpg"
import Soul from "../../img/carousel/soul.jpg"

export function Carousel() {



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

                <div class="item-slide">
                    <img src={WonderWoman} />
                </div>

                <div class="item-slide">
                    <img src={Scooby} />
                </div>

                <div class="item-slide">
                    <img src={Wick} />
                </div>

                <div class="item-slide">
                    <img src={MK} />
                </div>
                <div class="item-slide">
                    <img src={Vengadores} />
                </div>

                <div class="item-slide">
                    <img src={Doorman} />
                </div>

                <div class="item-slide">
                    <img src={Skyline} />
                </div>

                <div class="item-slide">
                    <img src={Agencia} />
                </div>

                <div class="item-slide">
                    <img src={Soul} />
                </div>

            </div>

        </div>
    )

}