import '../styles/carts.css';
import cart1 from '../assets/images/cart-image-1.png';
import cart2 from '../assets/images/cart-image-2.png';
import cart3 from '../assets/images/cart-image-3.png';


const cart = () => {
  return (
    <section className='content-cart'>
      <div className="cart cart1">
        <img src={cart1} alt="image-cart" />
        <div className="cart-text">
          <span className="primary-cart-text">BUY LIQUID ASSETS</span>
          <span className="second-cart-text">TRADE INSTANTLY</span>
          <p className="third-cart-text">
            Current Liquid Asset Offerings include Digital Assets, Commodities,
            And Our Own Curcised. Utters Can CUSD.
          </p>
        </div>
        <button className="button-cart">Learn More</button>
      </div>

      <div className="cart cart2">
        <img src={cart2} alt="image-cart" />
        <div className="cart-text">
          <span className="primary-cart-text">INVEST IN CRYPTO</span>
          <span className="second-cart-text">SECURE AND EASY</span>
          <p className="third-cart-text">
            Invest in a variety of cryptocurrencies with ease and security. Our
            platform ensures your investments are safe.
          </p>
        </div>
        <button className="button-cart">Get Started</button>
      </div>

      <div className="cart cart3">
        <img src={cart3} alt="image-cart" />
        <div className="cart-text">
          <span className="primary-cart-text">EXPLORE NFTS</span>
          <span className="second-cart-text">UNIQUE DIGITAL ASSETS</span>
          <p className="third-cart-text">
            Discover and trade unique digital assets in the form of NFTs. Join
            the future of digital ownership.
          </p>
        </div>
        <button className="button-cart">Explore Now</button>
      </div>
    </section>
  );
};

export default cart;
