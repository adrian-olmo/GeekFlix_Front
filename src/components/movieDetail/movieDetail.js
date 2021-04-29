import "./movieDetail.css"
import Kong from "../../img/carousel/kong.jpg"
import { useEffect, useState } from "react"
import { getMovieDetail } from "../../services/fetchDetail"

export const MovieDetail = (props) => {

    let [detail, setDetail] = useState([])


    useEffect(() => {
        getDetail();
    }, [])

    const getDetail = async () => {
        try {

            const result = await getMovieDetail(props.id);
            let json = await result.json();
            setDetail(json[0])
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <div className="card">


                <div className="image">
                    <img src={detail.poster_path} />
                </div>
                <div class="title">{detail.title}</div>
                <div class="desc">{detail.overview}</div>
                <button className="button button-card">Alquilar</button>
            </div>

        </>



    )
}