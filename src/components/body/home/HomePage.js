import BestSelling from "./components/BestSelling";
import HotDeal from "./components/HotDeal";

const HomePage=()=>{
    return (
        <div className="homepage">
            <div className="banner">
                <img src="https://bizweb.dktcdn.net/100/191/458/themes/802014/assets/slider_1.jpg?1676015117086" alt="banner"/>
            </div>
            <div className='introduce'>

                <div className="introduce_item">
                    <img src="https://bizweb.dktcdn.net/100/191/458/themes/802014/assets/banner_1.jpg?1676015117086" alt="" />
                </div>
                <div className="introduce_item">
                    <img src="https://bizweb.dktcdn.net/100/191/458/themes/802014/assets/banner_2.jpg?1676015117086" alt="" />
                </div>
                <div className="introduce_item">
                    <img src="https://bizweb.dktcdn.net/100/191/458/themes/802014/assets/banner_3.jpg?1676015117086" alt="" />
                </div>
                <div className="introduce_item">
                    <img src="https://bizweb.dktcdn.net/100/191/458/themes/802014/assets/banner_4.jpg?1676015117086" alt="" />
                </div>
            </div>
        {/*    Best Selling*/}
            <BestSelling/>

        {/*    Hot Deal*/}
            <HotDeal/>
            {/*Introduce Shops*/}
            <div className="info_product">
                <div className="intro_content">
                    <h1 className="content_title">Giới thiệu cửa hàng</h1>
                    <hr className='line' />
                    <p className="content_desc">CHÚNG TÔI CUNG CẤP BẠN CÁC HÀNG HÓA UNIQUE VỀ SẢN PHẨM CỦA CHÚNG TÔI LÀ BẢO QUẢN REAL.</p>
                    <p className="content_desc">Với kinh nghiệm 100 năm sản xuất trang sức thủ công, chúng tôi tin rằng bạn sẽ hài lòng với sản phẩm của chúng tôi. Giá cả phải chăng, mẫu mã đẹp mắt, màu sắc đa dạng, chúng tôi cam kết sẽ làm bạn hài lòng.</p>
                </div>

            </div>
        </div>
    );
}

export default HomePage;
