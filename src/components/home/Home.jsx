import Header from "./Header"
import Slider from "./Slider";

function Home() {
    return (
      <div className="home">
        <Header />
        <section className="section">
          <div className="container">
    
            <div className="section_header">
              <h3 className="section_subtitle">We work with</h3>
              <h2 className="section_title">Amazing Services</h2>
            </div>
    
            <div className="services">
              <div className="services_item services_item--border">
                <img className="services_icon" src="assets/services/1-photography.png" alt="" />
                <div className="services_title">Photography</div>
                <div className="services_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
              </div>
    
              <div className="services_item services_item--border">
                <img className="services_icon" src="assets/services/2-webdesign.png" alt="" />
                <div className="services_title">Web design</div>
                <div className="services_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
              </div>
    
              <div className="services_item services_item--border">
                <img className="services_icon" src="assets/services/3-creativity.png" alt="" />
                <div className="services_title">Creativity</div>
                <div className="services_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
              </div>
    
              <div className="services_item services_item">
                <img className="services_icon" src="assets/services/4-seo.png" alt="" />
                <div className="services_title">SEO</div>
                <div className="services_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
              </div>
    
              <div className="services_item">
                <img className="services_icon" src="assets/services/5-css-html.png" alt="" />
                <div className="services_title">CSS/HTML</div>
                <div className="services_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
              </div>
    
              <div className="services_item">
                <img className="services_icon" src="assets/services/6-digital.png" alt="" />
                <div className="services_title">Digital</div>
                <div className="services_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
              </div>

            </div>
    
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Slider />
          </div>
        </section>
      </div>
    );
  }

  export default Home;