import HomePage from "../../components/body/home/HomePage";
import ProductPage from "../../components/body/product/ProductPage";
import ContactPage from "../../components/body/contact/ContactPage";
import BlogPage from "../../components/body/blog/BlogPage";
import IntroducePage from "../../components/body/introduce/IntroducePage";

const Body=()=>{

    if(window.location.pathname.split('/')[1] === ""){
        return (<HomePage/>)
    }
    if(window.location.pathname.split('/')[1] === "products"){
        return (<ProductPage/>)
    }
    if(window.location.pathname.split('/')[1] === "contacts"){
        return (<ContactPage/>)
    }
    if(window.location.pathname.split('/')[1] === "blog"){
        return (<BlogPage/>)
    }
    if(window.location.pathname.split('/')[1] === "introduce"){
        return (<IntroducePage/>)
    }
    if(window.location.pathname.split('/')[1] === "contact"){
        return (<ContactPage/>)
    }
}
export default Body;



