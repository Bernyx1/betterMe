import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
	return (
		<div className='footer'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-4 offset-1 col-sm-2'>
						<h5>Links</h5>
						<ul className='list-unstyled'>
							<li>
								<Link to='/home'>Home</Link>
							</li>
							<li>
								<Link to='/aboutus'>About Us</Link>
							</li>
							<li>
								<Link to='/menu'>Courses Offered</Link>
							</li>
							<li>
								<Link to='/contactus'>Contact Us</Link>
							</li>
						</ul>
					</div>
					<div className='col-7 col-sm-5'>
						<h5>Our Address</h5>
						<address>
							Al-Waleed bin Talai Highway
							<br />
							Nima, Accra
							<br />
							Ghana
							<br />
							<i className='fa fa-phone fa-lg'></i>: +233 59 401 0464
							<br />
							<i className='fa fa-fax fa-lg'></i>: +233 54 276 4646
							<br />
							<i className='fa fa-envelope fa-lg'></i>:{' '}
							<a href='support@divcareers.com'>support@divcareers.com </a>
						</address>
					</div>
					<div className='col-12 col-sm-4 align-self-center'>
						<div className='text-center'>
							<a
								className='btn btn-social-icon btn-google'
								href='https://www.google.com/search?q=developers+in+vogue&source=lmns&hl=en&ved=2ahUKEwj43P7WiNzoAhVD0RoKHQa0BrAQ_AUoAHoECAEQAA#'
							>
								<i className='fa fa-google-plus'></i>
							</a>
							<a
								className='btn btn-social-icon btn-facebook'
								href='https://web.facebook.com/devinvogue/?_rdc=1&_rdr'
							>
								<i className='fa fa-facebook'></i>
							</a>
							<a
								className='btn btn-social-icon btn-linkedin'
								href='https://www.linkedin.com/company/devinvogue/'
							>
								<i className='fa fa-linkedin'></i>
							</a>
							<a className='btn btn-social-icon btn-twitter' href='https://twitter.com/devinvogue'>
								<i className='fa fa-twitter'></i>
							</a>
							<a
								className='btn btn-social-icon btn-google'
								href='https://www.youtube.com/channel/UCY40vfemMCYJdbE3Zolr1-w'
							>
								<i className='fa fa-youtube'></i>
							</a>
							<a className='btn btn-social-icon' href='mailto:support@divcareers.com'>
								<i className='fa fa-envelope-o'></i>
							</a>
						</div>
					</div>
				</div>
				<div className='row justify-content-center'>
					<div className='col-auto'>
						<p>© Copyright 2020 Div Training Courses</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
