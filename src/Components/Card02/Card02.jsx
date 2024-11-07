import '../../index.css';
import './Card02.css';
import Photo from '../../assets/photo_2.png';
import { IoBagHandleSharp } from "react-icons/io5";

function Card01() {
    return (
        <div className="card-01">
            <div className="circle">
                <IoBagHandleSharp color='cyan' />
            </div>
            <h1 className="card-title">Ask Targeted and Specific Questions</h1>
            <p className="card-paragraph">Avoid vague or open-ended questions that may not yield actionable insights.</p>
            <img src={Photo} alt="Photo 2" />
        </div>
    );
}

export default Card01;
