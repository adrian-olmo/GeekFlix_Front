import "./MovieDetail.css"
import Kong from "../../img/carousel/kong.jpg"

export const MovieDetail = () => {


    return (
        <>
            <div className="card">
                <div className="image">
                    <img src={Kong} />
                </div>
                <div class="title">Godzilla vs Kong</div>
                <div class="desc">Godzilla y Kong, dos de las fuerzas más poderosas de un planeta habitado por todo tipo de aterradoras criaturas, se enfrentan en un espectacular combate que sacude los cimientos de la humanidad. Monarch (Kyle Chandler) se embarca en una misión de alto riesgo y pone rumbo hacia territorios inexplorados para descubrir los orígenes de estos dos titanes, en un último esfuerzo por tratar de salvar a dos bestias que parecen tener las horas contadas sobre la faz de la Tierra.</div>
            </div>
        </>

    )
}