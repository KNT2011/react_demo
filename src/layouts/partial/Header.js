import {AiOutlineUser} from "react-icons/ai";
import Search from "../../components/header/Search";
import Social from "../../components/header/Social";
import Nav from "../../components/header/Nav";
import {LiaShoppingBagSolid} from "react-icons/lia";

const Header = () => {
    return (
        <div className="header">
            <div className="border-bottom">
                <div className='container'>
                    <div
                        className="d-flex justify-content-between align-items-center top-header">
                        <div className='header_user'>
                            <AiOutlineUser size={20}/>
                        </div>
                        <div className="d-flex">
                            <span>Gọi ngay : 1900 6750</span>
                            - <span className="text-black-50 text-i">Hỗ trợ 7 ngày trong tuần từ 9h - 21h</span>
                            <div className="right-header d-flex">
                                <Search/>
                                <div className="currency_unit"  data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="VND">
                                    <a href="#" className='VND'>VND</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container header-2">
                <div className="d-flex justify-content-between">
                    <Social/>
                    <div className="container_content">
                        <img
                            src="https://bizweb.dktcdn.net/100/191/458/themes/802014/assets/logo.png?1676015117086"
                            alt=""/>
                    </div>
                    <div className='container_cart'>
                        <LiaShoppingBagSolid
                            className="cart-icon"></LiaShoppingBagSolid>
                    </div>
                </div>

            </div>
            <div className='container'>
                <Nav/>
            </div>
        </div>
    )
}
export default Header;
