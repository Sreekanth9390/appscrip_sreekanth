import React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#000", color: "#fff", padding: "30px 20px", fontSize:"1vw"}}>
      {/* Top Section */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }} className="footer-data">
        {/* Newsletter Subscription Section */}
        <div style={{ flex: "1 1 300px", marginBottom: "20px" }} >
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettä muse.</p>
          <div>
            <input
              type="email"
              placeholder="Enter your e-mail..."
              style={{
                padding: "0.3vw",
                flex: "1",
                width:"35%",
                border: "none",
                borderRadius: "0.5vw",
                fontSize: "0.8vw",
              }}
            />
            <button
              style={{
                marginLeft:"0.3vw",
                padding: "0.3vw 0.3vw",
                backgroundColor: "#fff",
                color: "#000",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize:"0.8vw"
              }}
            >
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* Contact and Currency Section */}
        <div style={{ flex: "1 1 200px", marginBottom: "20px",marginLeft:"20px" }} className="contact-us">
          <h3>CONTACT US</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h3>CURRENCY</h3>
          <p>🏁 USD</p>
          <p style={{ fontSize: "12px" }}>
            Transactions will be completed in Euro and a currency reference is available on hover.
          </p>
        </div>
      </div>

      {/* Border Line */}
      <div style={{ borderTop: "1px solid #444", margin: "20px 0" }}></div>

      {/* Bottom Section */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
        {/* mettä muse Section */}
        <div style={{ flex: "1 1 200px", marginBottom: "20px" }}>
          <h3>mettä muse</h3>
          <ul style={{ listStyleType: "none", padding: "0", margin: "0", lineHeight: "1.8" }}>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div style={{ flex: "1 1 200px", marginBottom: "20px" }}>
          <h3>QUICK LINKS</h3>
          <ul style={{ listStyleType: "none", padding: "0", margin: "0", lineHeight: "1.8" }}>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div style={{ flex: "1 1 300px", marginBottom: "20px" }}>
          <h3>FOLLOW US</h3>
          <div style={{ display: "flex", gap: "10px", margin:"20px 0"}}>
            <a href="#" style={{ color: "#fff", fontSize: "20px" }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" height="40px" />
            </a>
            <a href="#" style={{ color: "#fff", fontSize: "20px" }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png

" alt="linkedin" height="40px" />
            </a>
          </div>
          <h3>mettä muse ACCEPTS</h3>
          <div style={{ display: "flex", gap: "10px", marginTop:"30px"}}>
            <img src="https://telecomtalk.info/wp-content/uploads/2022/12/gpay-how-to-create-or-find-upi-1024x683.jpg" alt="Google Pay" height="40" width="40" />
            <img src="https://i.pinimg.com/originals/38/2f/0a/382f0a8cbcec2f9d791702ef4b151443.png" alt="Mastercard" height="40" width="40" />
            <img src="https://logowik.com/content/uploads/images/visa-payment-card1873.jpg" alt="Visa" height="40" width="40"/>
            <img src="https://logowik.com/content/uploads/images/amex-card1708.jpg" alt="Amex" height="40" width="40"/>
            <img src="https://www.top50brandsnigeria.com/wp-content/uploads/2021/10/Opay-781x1024.png" alt="O Pay" height="40" width="40"/>
            <img src="https://static-00.iconduck.com/assets.00/paypal-icon-856x1024-a3b7wbse.png" alt="PayPal" height="40" width="40"/>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div style={{ textAlign: "center", marginTop: "20px", borderTop: "1px solid #444", paddingTop: "10px" }}>
        <p>© 2024 mettä muse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;