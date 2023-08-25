import {AiFillPhone, AiOutlineMail} from "react-icons/ai";
import {GrFormLocation} from "react-icons/gr";
import Social from "../../components/header/Social";
const Footer=()=>{
    return (
        <div className="footer">
            <hr/>
            <div>
                <p>Theme Trang sức là một theme bán hàng thân thiện với mobile. Với cơ chế tùy chỉnh hoàn hảo cho phép quý khách tùy chỉnh màu sắc, bố cục.</p>
                <p> <GrFormLocation size={25}/> Ladeco Building, 266 Doi Can Street, Hà Nội,
                     <AiFillPhone/> <a href="#">1900 6750</a><span>,   </span>
                    <a href="#"><AiOutlineMail/> support@sapo.vn</a>
                </p>
                <div className="text-center">
                    <Social/>
                </div>
                <div>
                    © Bản quyền thuộc về <b>DQDT Team</b> | Cung cấp bởi <a href="#" className="text-decoration-none">Sapo</a>
                </div>
            </div>
        </div>
    )
}
export default Footer;
