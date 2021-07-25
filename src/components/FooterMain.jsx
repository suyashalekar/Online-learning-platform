import React from 'react';
import '../FooterMain.css';
function FooterMain() {
  return (
    <div className="footerMain-container">
      <div className="footerMain-upper">
        <div className="footerMain-left">
          <div className="footerMain-column">
            <p style={{ fontWeight: 'bold' }}> About</p>
            <p> What We Offer </p>
            <p>Leadership </p>
            <p> Careers</p>
            <p>Catalog </p>
            <p>Coursera Plus </p>
            <p>Professional </p>
            <p> Certificates </p>
            <p> MasterTrack™ Certificates</p>
          </div>
          <div className="footerMain-column">
            <p style={{ fontWeight: 'bold' }}>Community</p>
            <p>Learners </p>
            <p>Partners </p>
            <p>Developers </p>
            <p> Beta Testers </p>
            <p>Translators </p>
            <p>Blog </p>
            <p>Tech Blog </p>
            <p>Teaching Center </p>
          </div>
          <div className="footerMain-column">
            <p style={{ fontWeight: 'bold' }}>More</p>
            <p>Affiliates </p>
            <p>Terms </p>
            <p>Privacy </p>
            <p>Help </p>
            <p>Accessibility </p>
            <p>Press </p>
            <p>Contact </p>
          </div>
        </div>
        <div className="footerMain-right">
          <img className="footerMain-img" src="https://d3njjcbhbojbot.cloudfront.net/web/images/icons/download_on_the_app_store_badge_en.svg" alt="" srcset="" />
          <img className="footerMain-img" src="https://d3njjcbhbojbot.cloudfront.net/web/images/icons/en_generic_rgb_wo_45.png" alt="" />
        </div>
      </div>
      <div className="footerMain-lower">
        <div class="text-center p-3">
          © 2020 Copyright:
          <a href="#">
            <span> </span> Suyash & Team
          </a>
        </div>
      </div>
    </div>
  );
}

export default FooterMain;
