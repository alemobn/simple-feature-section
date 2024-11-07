import '../../index.css';
import './Card01.css';
import Photo from '../../assets/photo_1.png';
import { MdFrontHand } from "react-icons/md";

function Card01() {
    return (
        <div className="card-01">
            <div className="circle">
                <MdFrontHand color='yellow' />
            </div>
            <h1 className="card-title">Collect Feedback at Multiple Touchpoints</h1>
            <p className="card-paragraph">Provide a comprehensive understanding of the customer experience.</p>
            <img src={Photo} alt="Photo 1" />
        </div>
    );
}

export default Card01;
