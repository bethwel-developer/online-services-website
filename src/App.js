import Discount from './discount/discount';
import Home from './home/Home';
import Services from './services/services';
import Topbar from './topbar/topbar';
import Servicescard from './service-card/Servicescard';
import Reputation from './reputation/reputation';
import Ordercard from './ordercards/Ordercard';
import Whyus from './whyUs/Whyus';
import Whyuscards from './whyuscards/Whyuscards';
import Request from './request/Request';
import Requestform from './requestForm/Requestform';
import Footer from './footer/footer';
import Reviews from './reviews/Reviews';
import SimpleSlider from './SimpleSlider/SimpleSlider';


function App() {
  return (
    <div >
      
      <Topbar/>
      <Home/>
      <Discount/>
      <Services/>
      <Servicescard/>
      <Reputation/>
      <Ordercard/>
      <Whyus/>
      <Whyuscards/>
      <Reviews/>
      <SimpleSlider/>
      <Request/>
      <Requestform/>
      <Footer/>
      
        
    </div>
  );
}

export default App;
