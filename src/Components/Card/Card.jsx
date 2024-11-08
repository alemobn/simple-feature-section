import '../../index.css';
import './Card.css';

function Card({ icon: Icon, title, description, image, iconColor }) {
    return (
        <div className="card">
            <div className="circle">
                <Icon color={iconColor} />
            </div>
            <h1 className="card-title">{title}</h1>
            <p className="card-paragraph">{description}</p>
            <img src={image} alt="Photo 1" />
        </div>
    );
}

export default Card;
