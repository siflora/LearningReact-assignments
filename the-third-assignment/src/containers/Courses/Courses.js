import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Course from '../Course/Course';
import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    showCourseHandler = (id) => {
       this.props.history.push('/Course/'+id)
       };

    render () {

        const courses = this.state.courses.map( course => {
                            return( 
                            <Link to={this.props.match.url+ '/' + course.id + '/' + course.title} key={course.id}>
                                <article className="Course">{course.title}
                                </article>
                            </Link>);
                        } )
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {courses}
                </section>
                <Route path='/Courses/:id/:courseTitle' component={Course}/>

            </div>
        );
    }
}

export default Courses;