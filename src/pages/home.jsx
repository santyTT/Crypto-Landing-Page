import "../styles/home.css";
import Image from "../assets/images/imageMovil.png";

const home = () => {
  return (
    <section className="home">
      <div className="content-l">
        <div className="content-text">
        <span className="top-txt">CRIPTO EXCHANGE</span>
        <h2>Our Custom Bulidt Propietary Trading Exchange.</h2>
        <p>
          Creative Thematic Expousers In Addition To Standard Liquids Such As
          Digital Assets, Commoditines, And Indices.
        </p>
        </div>
        <div>
          <button className="button-home-1">LAUNCH EXCHANGE</button>
          <button className="button-home-2">LAUNCH BUILDR</button>
        </div>
        <div className="divider"></div>
        <div className="stadistics">
          <span className="stadistic-1">50K+</span>
          <span className="stadistic-2">30K+</span>
          <span className="stadistic-3">15K+</span>

          <span className="sub-text-1">DOWLOADS</span>
          <span className="sub-text-2">ACTIVE USERS</span>
          <span className="sub-text-3">GOOD FEEDBACK</span>
        </div>
      </div>
      <div className="content-r">
        <img src={Image} alt="home" className="image-ini"/>
      </div>
    </section>
  );
};

export default home;
