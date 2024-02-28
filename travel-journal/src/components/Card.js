export default function Card(props) {
    return (
        <div className="card">
            <span className="card-image">
                <img src={props.imageUrl}/>
            </span>
            <span className="card-info">
                <span className="card-location">
                    <span>
                        <span><img className="location-marker-icon" src={require("../images/location.png")}/></span>
                        <span className="card-location-name">{props.location}</span>
                    </span>
                    <a className="maps-link" href={props.googleMapsUrl}>View on Google Maps</a>
                </span>
                
                <h1 className="card-place-title">
                    {props.title}
                </h1>

                <p className="card-date">
                    {props.startDate} - {props.endDate}
                </p>

                <p className="card-description">
                    {props.description}
                </p>
            </span>
        </div>
    )
}
