import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderCourseItem({ course, onClick }) {
	return (
		<Card>
			<Link to={`/menu/${course.id}`}>
				<CardImg width='100%' object src={course.image} alt={course.name} />

				<CardImgOverlay body className='ml-5'>
					<CardTitle>{course.name}</CardTitle>
				</CardImgOverlay>
			</Link>
		</Card>
	);
}

const Course = (props) => {
	const display = props.courses.map((course) => {
		return (
			<div key={course.id} className='col-12 col-md-5 m-1'>
				<RenderCourseItem course={course} />
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

					<BreadcrumbItem active>Courses Offered </BreadcrumbItem>
				</Breadcrumb>

				<div className='col-12'>
					<h3>Courses Offered</h3>
					<hr />
				</div>
			</div>
			<div className='row'>{display}</div>
		</div>
	);
};

export default Course;
