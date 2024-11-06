import React from 'react'
import PageLinks from './PageLinks'
import IconLinks from './IconLinks'

function Footer() {
  return (
    <footer className='section footer'>
    <PageLinks parentClass='footer-links' itemClass='footer-link' id=''/>
    <IconLinks parentClass='footer-icons' itemClass='footer-icon' />
    <p className='copyright'>
        copyright &copy; Gundam company
        <span id='date'>all right reserved</span>
    </p>
    </footer>
  )
}

export default Footer