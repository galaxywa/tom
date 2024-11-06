import React from 'react'

import about from '../images/about.png';

function About() {
  return (
    <>
        {/* <!-- About --> */}
<section className='section' id='about'>
    <div className='section-title'>
        <h2>about <span>us</span></h2>
    </div>
    <div className='section-center about-center'>
        <div className='about-img'>
            <img  src={about} className='about-photo' alt='awesome landscape' />
        </div>
        <article className='about-info'>
            <h3>explore the difference</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus amet repellendus sit corrupti. Pariatur aliquam, debitis amet rem repellendus dolorum corrupti provident id quos non.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus amet repellendus sit corrupti. Pariatur aliquam, debitis amet rem repellendus dolorum corrupti provident id quos non.</p>
        <a href='#' className='btn'>read more</a>
        </article>
    </div>
</section>
    </>
  )
}

export default About