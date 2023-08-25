
const Nav = () => {



    return (
        <div className="header_nav-bottom">
            <ul className="header-3 list justify-content-center">
                <li className="header-3_item">
                    <a href="/">TRANG CHỦ</a>
                </li>
                <li className="header-3_item">
                    <a href="/products">SẢN PHẨM </a>
                    <button type="button"
                            className="btn-link btn dropdown-toggle dropdown-toggle-split"
                            data-bs-toggle="dropdown" aria-expanded="false"
                            data-bs-reference="parent">
                        <span className="visually-hidden">hi</span>
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Nhẫn</a></li>
                        <li><a className="dropdown-item" href="#">Bông tai</a></li>
                        <li><a className="dropdown-item" href="#">Dây chuyền</a></li>
                        <li><a className="dropdown-item" href="#">Trâm cài </a></li>
                    </ul>
                </li>
                <li className="header-3_item">
                    <a href="/blog">BLOG</a>
                </li>
                <li className="header-3_item">
                    <a href="/introduce">GIỚI THIỆU</a>
                </li>
                <li className="header-3_item">
                    <a href="/contact">LIÊN HỆ</a>
                </li>
            </ul>

        </div>
    )
}

export default Nav
