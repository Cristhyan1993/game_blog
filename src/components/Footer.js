import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join my adventure and return soon for more reviews.
        </p>
        <p className='footer-subscription-text'>
          More reviews coming soon.
        </p>
        {/* <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div> */}
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2><Link to='/aboutme'>About Me</Link></h2>
          </div>
          <div className='footer-link-items'>
            <h2>Contact</h2>
            <p>cristhyancalderon@gmail.com</p>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='https://www.instagram.com/cristhyan93/' target='_blank'>Instagram</Link>
            <Link to='https://www.facebook.com/cristhyan.calderon/' target='_blank'>Facebook</Link>
            <Link to='https://www.youtube.com/@nayhtsirc' target='_blank'>Youtube</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              my-Gmz
              <i className="fa-solid fa-gamepad"></i>
            </Link>
          </div>
          <small className='website-rights'>my-Gmz © 2023</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='https://www.facebook.com/cristhyan.calderon/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='https://www.instagram.com/cristhyan93/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='https://www.youtube.com/@nayhtsirc'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link linkedIn'
              to='https://www.linkedin.com/in/criscalderon/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;