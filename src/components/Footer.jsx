import React from 'react'
import Facebook from '../assets/Facebook'
import Instagram from '../assets/Instagram'
import Telegram from '../assets/Telegram'
import Whatsapp from '../assets/Whatsapp'

export default function Footer() {

  // eslint-disable-next-line
  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
      <footer className="App-footer">
        <div className="footer-container">
          <div className="grid-container">
            <div>
              <pre>{`JOIN OUR\nEMAIL LIST FOR FREE\nGUIDE AND CHECKLISTS`}</pre>
              <div className="container">
                <form className="input-form" onSubmit={handleSubmit}>
                  <input type="email" className="input-field" placeholder="Enter your email" name="email" autoComplete="email"/>
                  <input type="submit" className="submit-button" value="JOIN" />
                </form>
              </div>
            </div>
            <div className="footer-services">
              <p>
                SERVICES
              </p>
              <ul>
                <li><a href="https://#">Build Your Wealth Corporate Solution</a></li>
                <li><a href="https://#"> Career</a></li>
                <li><a href="https://#"> Join Our Team</a></li>
              </ul>
            </div>
            <div className="footer-social-media">
              <p>
                SOCIAL MEDIA
              </p>
              <div className="social-media-list">
                <Facebook />
                <Instagram />
                <Whatsapp />
                <Telegram />
              </div>
              <ul>
                <li><a href="https://#">Useful Links</a></li>
                <li><a href="https://#">Home</a></li>
                <li><a href="https://#">Contact Us</a></li>
                <li><a href="https://#">Member Exclusive</a></li>
              </ul>
            </div>
          </div>
          
          <div className="disclaimer">
            <p>
              ATO Partners<br/>
              A group of agency units of Prudential Assurance Company Singapore (Pte) Ltd<br/>
              Reg No. 199002477Z
            </p>
            <p>
              Please note that the ownership of Website/Social Media account (e.g. Facebook Page/Instagram Profile/LinkedIn Profile/Blog) belongs to an Agency Unit/a group of Agency Units of Prudential Assurance Company Singapore (PACS). They are wholly responsible for the content contained in this Website/Facebook Page/Blog. It only contains their personal views, thoughts, and opinions.
            </p>
            <p>
              The Website/Social Media account is for informational purposes only and is not endorsed by PACS nor does it constitute any official communication of PACS. PACS is an indirect subsidiary of Prudential plc, a company incorporated in the United Kingdom. Neither PACS nor Prudential plc is affiliated in any manner with Prudential Financial Inc, a company whose principal place of business is the United States of America.
            </p>
            <p>
              Approval code 091/19Aug20
            </p>
          </div>
          <hr />
          <div className="footer-end">
            <span>
              2023 Ato Partners. All rights reserved
            </span>
            <a href="https://#">
              Privacy Policy
            </a>
            <a href="https://#">
              Terms and Conditions
            </a>
          </div>
        </div>
      </footer>
  )
}