import React from 'react';
import "./Fotter.css"
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Fotter = () => {
    return (
      <>

        <div className="footer">
          <div className="footer-icons">
            <FacebookIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
          <div className="footer_li">
            <ul>
              <li>Audio Description</li>
              <li>Investor relations</li>
              <li>Legal Notice</li>
              <li>Service code</li>
            </ul>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preference</li>
            </ul>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Coorporate Informaion</li>
            </ul>
            <ul>
              <li>Midea Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footer_copy-right">
            &copy; 1997-2024 Netflix, Inc.
          </div>
        </div>
      </>
    );
}

export default Fotter;
