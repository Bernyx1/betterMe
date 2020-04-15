import React, { Component } from 'react';
import Home from './HomeComponent';
import Display from './programdisplay';
import { COURSES } from '../shared/courses';
import Header from './HeaderComponent';
import CourseDetail from './CourseDetailComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './ContactComponent';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { COMMENTS } from '../shared/comments';
import About from './About';

class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			courses: COURSES,
			comments: COMMENTS,
			promotions: PROMOTIONS,
			leaders: LEADERS,
		};
	}

	render() {
		const HomePage = () => {
			return (
				<Home
					course={this.state.courses.filter((course) => course.featured)[0]}
					promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
					leader={this.state.leaders.filter((leader) => leader.featured)[0]}
				/>
			);
		};

		const CourseWithId = ({ match }) => {
			return (
				<CourseDetail
					course={this.state.courses.filter((course) => course.id === parseInt(match.params.courseId, 10))[0]}
					comments={this.state.comments.filter(
						(comment) => comment.courseId === parseInt(match.params.courseId, 10)
					)}
				/>
			);
		};

		return (
			<div>
				<Header />
				<Switch>
					<Route path='/home' component={HomePage} />
					<Route exact path='/menu' component={() => <Display courses={this.state.courses} />} />
					<Route path='/menu/:courseId' component={CourseWithId} />
					<Route exact path='/contactus' component={Contact} />
					<Route exact path='/aboutus' component={About} />
					<Redirect to='/home' />
				</Switch>

				<Footer />
			</div>
		);
	}
}

export default Main;
