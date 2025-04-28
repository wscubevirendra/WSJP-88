function Card(props) {

    return (
        <div className="col-4">
            <div style={{
                border: props.rating >= 4 ? "2px solid yellow" : "2px solid black"
            }} className="card" >
                <img height="200" src={props.source} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <h5>{props.rating >= 4 ? "TOP" : "Basic"}</h5>
                </div>
            </div>
        </div>


    )
}

export default Card;