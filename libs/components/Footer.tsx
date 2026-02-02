"use client";

import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Stack, Box } from "@mui/material";

const Footer = () => {
  return (
    <Stack className="footer-container">
      <Stack className="main">
        <Stack className="left">
          <Box className="footer-box">
            <img src="/img/logo/logoWhite.svg" alt="logo" className="logo" />
          </Box>

          <Box className="footer-box">
            <span>Customer Care</span>
            <p>+82 10 4867 2909</p>
          </Box>

          <Box className="footer-box">
            <span>Need Live Support?</span>
            <p>Contact us anytime</p>
          </Box>

          <Box className="footer-box">
            <p>Follow us on social media</p>
            <div className="media-box">
              <FacebookOutlinedIcon />
              <TelegramIcon />
              <InstagramIcon />
              <TwitterIcon />
            </div>
          </Box>
        </Stack>

        <Stack className="right">
          <Box className="top">
            <strong>Keep yourself up to date</strong>
            <div className="subscribe-box">
              <input type="text" placeholder="Your Email" />
              <span>Subscribe</span>
            </div>
          </Box>

          <Box className="bottom">
            <div>
              <strong>Popular Search</strong>
              <span>Property for Rent</span>
              <span>Low Price Houses</span>
            </div>

            <div>
              <strong>Quick Links</strong>
              <span>Terms of Use</span>
              <span>Privacy Policy</span>
              <span>Pricing Plans</span>
              <span>Our Services</span>
              <span>FAQs</span>
            </div>

            <div>
              <strong>Discover</strong>
              <span>Seoul</span>
              <span>Gyeongido</span>
              <span>Busan</span>
              <span>Jejudo</span>
            </div>
          </Box>
        </Stack>
      </Stack>

      <Stack className="second">
        <span>© Nestar - All rights reserved</span>
        <span>Privacy · Terms · Sitemap</span>
      </Stack>
    </Stack>
  );
};

export default Footer;
