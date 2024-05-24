import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import './BaseLayout.css'

export default function BaseLayout(props) {
  return (
    <div className='baseLayout'>
        <NavBar/>
        <div className='baseLayoutBody'>
            {props.children}
        </div>
        <Footer/>
    </div>
  )
}
