import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderCourse({ course }) {
	return (
		<div className='col-12 col-md-5 m-1'>
			<Card>
				<CardImg top src={course.image} alt={course.name} />
				<CardBody>
					<CardTitle>{course.name}</CardTitle>
					<CardText>{course.description}</CardText>
				</CardBody>
			</Card>
		</div>
	);
}

function RenderComment({ comments }) {
	if (comments != null)
		return (
			<div className='col-12 col-md m-1'>
				<h4>About Course</h4>
				<ul className='list-unstyled'>
					{comments.map((comment) => {
						return (
							<li key={comment.id}>
								<p>{comment.comment}</p>
								<p>{comment.author}</p>
							</li>
						);
					})}
				</ul>
			</div>
		);
	else return <div></div>;
}

const CourseDetail = (props) => {
	if (props.course != null)
		return (
			<div class='container'>
				<div className='row'>
					<Breadcrumb>
						<BreadcrumbItem>
							<Link to='/menu'>Courses offered</Link>
						</BreadcrumbItem>

						<BreadcrumbItem active>{props.course.name} </BreadcrumbItem>
					</Breadcrumb>

					<div className='col-12'>
						<h3>{props.course.name} </h3>
						<hr />
					</div>
				</div>
				<div className='row'>
					<RenderCourse course={props.course} />
					<RenderComment comments={props.comments} />
				</div>
			</div>
		);
	else return <div></div>;
};

export default CourseDetail;
