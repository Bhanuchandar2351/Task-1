import Header from "../Header";
import Footer from "../Footer";
const PageNotFound = () =>{
    return(
        <>
        <Header />
        <div className="pageNotFound">
            <h2>Page Not Found!</h2>
        </div>
        <Footer />
        </>
    );
}
export default PageNotFound