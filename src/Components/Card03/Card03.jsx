import '../../index.css';
import './Card03.css';
import Photo from '../../assets/photo_3.png';
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

function Card01() {
    return (
        <div className="card-01">
            <div className="circle">
                <IoChatbubbleEllipsesSharp color='white' />
            </div>
            <h1 className="card-title">Prioritize and Respond to Feedback</h1>
            <p className="card-paragraph">Communicate the changes or improvements you've made in response to their feedback.</p>
            <img src={Photo} alt="Photo 3" />
        </div>
    );
}

export default Card01;
