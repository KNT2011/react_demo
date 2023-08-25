import {MdOutlineFacebook} from "react-icons/md";
import {BsPinterest} from "react-icons/bs";
import {AiFillGoogleCircle, AiFillInstagram} from "react-icons/ai";

const Social = () => {
    return (
        <div className='social_meida'>
            <ul className="list">
                <li className="list_item">
                    <MdOutlineFacebook size={18} />
                </li>
                <li className="list_item">
                    <BsPinterest size={18} />
                </li>
                <li className="list_item">
                    < AiFillGoogleCircle size={18} />
                </li>
                <li className="list_item">
                    <AiFillInstagram size={18} />
                </li>
            </ul>

        </div>
    )
}

export default Social
