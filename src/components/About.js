import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import Main from './MainComponent';

function About(props) {
	const leaders = props.state.leaders.map((leader) => {
		return (
			<div key={leader.id} className='col-12 mt-5'>
				<Media tag='li'>
					<Media left middle>
						<Media object src={leader.image} alt={leader.name} />
					</Media>

					<Media body className='ml-5'>
						<Media heading>{leader.name}</Media>
						<p>{leader.description}</p>
					</Media>
				</Media>
			</div>
		);
	});

	return (
		<div className='container'>
			<div className='row'>
				<Breadcrumb>
					<BreadcrumbItem>
						<Link to='/home'>Home</Link>
					</BreadcrumbItem>

					<BreadcrumbItem active>About Us</BreadcrumbItem>
				</Breadcrumb>

				<div className='col-12'>
					<h3>About Us</h3>
					<hr />
				</div>
			</div>

			<div className=' row row-content'>
				<div className='col-12 col-md-6'>
					<h2>Our History</h2>

					<p>
						{' '}
						Developers In Vogue (DIV) was launched in 2017 by
						<em>Ivy Berley</em> and <em> Maxwell Cofie </em>, who were seeking to tackle gender disparity in
						Ghana's digital economy. They created the boot camp to provide aspiring women developers with
						the opportunity to hone their skills and receive support inh finding jobs.
					</p>

					<p>
						Div focuses on teaching intermediate and advanced digital skills to help participants secure
						entry level employment in the tech sector. Technical skills taught includes: Core programming
						languages, including JavaScript and python. Software and App Develipment, Data Science, Graphic
						design and digital marketing. DIV also teaches soft skills such as public speaking and
						presentation, team work, critical thinking and networking
					</p>
				</div>

				<div className='col-12 col-md-5'>
					<Card>
						<CardHeader className='bg-primary text-white'>Facts At a Glance</CardHeader>
						<CardBody>
							<dl className='row p-1'>
								<dt className='col-6'>Started</dt>
								<dd className='col-6'>3 Feb. 2017</dd>

								<dt className='col-6'> Organization Type</dt>
								<dd className='col-6'> Non-Profit</dd>

								<dt className='col-6'> Program Type</dt>
								<dd className='col-6'>Coding bootcamp for women </dd>

								<dt className='col-6'>Average Fees per participant</dt>
								<dd className='col-6'>Free </dd>
							</dl>
						</CardBody>
					</Card>
				</div>

				<div className='col-12'>
					<Card>
						<CardBody className='bg-faded'>
							<blockquote className='blockquote'>
								<p className='mb-0'>
									A <b>Code Blooded Mammal</b> needs to <em>Eat, Sleep and Code</em>
									like a <em>Boss</em>
								</p>

								<footer className='blockquote-footer'>
									{' '}
									Ernie Beau,
									<cite title='Source Title'> The Wit of Beau, P.Nelson, Coding Bootcamps, 2017</cite>
								</footer>
							</blockquote>
						</CardBody>
					</Card>
				</div>
			</div>

			<div className='row row-content'>
				<div className='col-12'>
					<h2>Corporate Leadership</h2>
				</div>

				<div className='col-12'>
					{' '}
					<Media list> {leaders}</Media>{' '}
				</div>
			</div>
		</div>
	);
}

export default About;
