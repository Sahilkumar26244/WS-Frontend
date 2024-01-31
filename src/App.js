import AllRoutes from "./Routes/AllRoutes";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "./Components/Footer";
import ScrollToTop from "./Function/ScrollTop";
import MoveToTop from "./Components/SubComponents/MoveToTop";
import { FloatingWhatsApp } from 'react-floating-whatsapp'

AOS.init();


AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
});


function App() {
  return (
    <div>
      <AllRoutes/>
      <Footer/>
      <ScrollToTop/>
      <MoveToTop/>
      <FloatingWhatsApp phoneNumber="+917004190523" accountName="Shiv Kumar" notificationSound={true} chatboxStyle={{bg:"black",height:"400px"}} />
    </div>
  );
}

export default App;
