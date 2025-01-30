import '../styles/footer.css';

const footer = () => {
  return (
    <footer>
        <div className='footer-content'>
      <div className='col-1'>
        <span className='text-logo'>Linear Buildr</span>
        <p>Users Can Purchase Our Liquids With USD Built From <br /> Callateralized LINA Or Purchased.</p>
      </div>
      <div className='col-2'>
        <span className='title-col'>Support</span>
        <ul className='list-items'>
            <li>Contact Us</li>
            <li>Online Chat</li>
            <li>Whatsapp</li>
            <li>Telegram</li>
        </ul>
      </div>
      <div className='col-3'>
      <span className='title-col'>About</span>
      <ul className='list-items'>
        <li>About Us</li>
        <li>Blog</li>
        <li>Careers</li>
        <li>Jobs</li>
      </ul>
      </div>
      <div className='col-4'>
      <span className='title-col'>Support</span>
      <ul className='list-items'>
        <li>Contact Us</li>
        <li>Online Chat</li>
        <li>Whatsapp</li>
        <li>Telegram</li>
      </ul>
      </div>
      <div className='col-5'>
      <span className='title-col'>FAQ</span>
      <ul className='list-items'>
        <li>Account</li>
        <li>Manage Deliveries</li>
        <li>Orders</li>
        <li>Payments</li>
      </ul>
      </div>
        </div>

    <div className='linearl'></div>

    <div className='bottom-footer'>
        <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Sitemap</li>
            <li>Terms Of Use</li>
        </ul>
        <span><span className='santy'>🤙Santy.dev<span className='aniani'>_</span></span></span>
    </div>
    </footer>
  )
}

export default footer
