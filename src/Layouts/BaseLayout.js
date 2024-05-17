import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

export default function BaseLayout(props) {
  return (
    <div>
        <NavBar/>
        <div>
            {props.children}
        </div>
        <Footer/>
    </div>
  )
}
