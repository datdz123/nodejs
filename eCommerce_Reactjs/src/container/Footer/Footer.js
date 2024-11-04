import React from 'react';

function Footer(props) {
  return (
    <div>
      <footer className="footer-area p-5">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-md-6 single-footer-widget">
        <h4 className="text-white text-14">SCRIPT LANGUAGE</h4>
        <p>
          Headquarters: 234 Hoang Quoc Viet, Hanoi City, Vietnam
          Phone: 0344585777 Email: admin@gmail.com
        </p>
      </div>

      <div className="col-lg-6 col-md-6 single-footer-widget">
        <h4 className="text-white text-14">Customer Support</h4>
        <ul className="text-14">
          <li><a href="#">General Terms</a></li>
          <li><a href="#">Membership Policy</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>


    </div>
  </div>
</footer>
    </div>
  );
}

export default Footer;