import "../styles/sectionThird.css";
import Image from "../assets/images/imageMovil2.png";

const sectionThird = () => {
  return (
    <section className="section-third">
      <div className="left-bar">
        <div className="sidebar">
          <a href="#">STAKE.BUILD.EARN</a>
          <a href="#">SPENDING.EST</a>
          <a href="#">TRANSFER ACROSS CHAIN</a>
          <a href="#">OUR CUSTOM BUILT</a>
        </div>
        <div className="lineal"></div>
      </div>
      <div className="image-cell-phone">
        <img src={Image} alt="" />
      </div>
      <div className="text-right">
        <span className="number-origin-back">01</span>
        <h2>Stake.Build.Earn</h2>
        <p>
          A Decentralized Application For Staking And Building LUSD, Accepting A
          Mixture Of LINA Tokens And Other Major Cryptocurrencies. <br  /> <p className="p-bottom"> Our Custom
          Built Swap Functionality That Helps Save Gas Fees And Allows
          Composability Of LINA Tokens Across Different Blockchains.</p>
        </p>
        <div className="box-numbers">
          <div className="box-numbers-2">02</div>
          <div className="box-numbers-3">03</div>
          <div className="box-numbers-4">04</div>
        </div>
      </div>
    </section>
  );
};

export default sectionThird;
