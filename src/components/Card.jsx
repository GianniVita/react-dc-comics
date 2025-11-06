export default function Card({img, title}) {

    return (

        <div className="col-6 col-md-3 p-2">
            <img className="img-fluid comic-thumb" src={img} alt="Img" />
            <h6 className="text-light">{title}</h6>

        </div>
    )


}



