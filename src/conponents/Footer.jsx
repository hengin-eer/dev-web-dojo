import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <footer>
      <div className="footer__inner">
        <div className="copyright__By">Created with &hearts; by hengineer </div>
        <div className="copyright__txt">&copy; ~ 2022 Web道場 All rights reserved.</div>
        <a href="#root" className="scroll__top">
          <FontAwesomeIcon className='scroll__ico' icon={faAngleUp} />
        </a>
      </div>
    </footer>
  )
}

export default Footer