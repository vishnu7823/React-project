import React from 'react'

function Footer() {
  return (
    <div className='content'>
      <box>
        <h1>A Movie Rating Portal</h1>

        <footercontainer className="footer">
            <div className='info'>
            <header>About us</header>
            <ul>
                <li>About VMDB</li>
                <li>Contact Us</li>
                <li>System status</li>
            </ul>
            </div>

            <div className='info'>
            <header>Services</header>
            <ul>
                <li>Movie Rating</li>
                <li>Tv show Rating</li>
                <li>Distrubution</li>
            </ul>
            </div>

            <div className='info'>
            <header>Community</header>
            <ul>
                <li>Guidelines</li>
                <li>Discussions</li>
                <li>Leaderboard</li>
            </ul>
            </div>

            <div className='info'>
            <header>Legal</header>
            <ul>
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
                <li>Legal Use</li>
            </ul>
            </div>
        </footercontainer>
      </box>
    </div>
  )
}

export default Footer
