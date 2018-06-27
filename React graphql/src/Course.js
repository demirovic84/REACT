import React from 'react';

const Course = (props) => (
    <div className="card" style={{'width': '100%', 'marginTop': '10px'}}>
        <div className="card-body">
        <h5 className="card-title">{props.course.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Teacher: {props.course.teacher}</h6>
        <p className="card-text">Description: {props.course.description}</p>
        <h6 className="card-subtitle mb-2 text-muted">Topic: {props.course.topic}</h6>
        {/* <a href={props.course.url} className="card-link">Read more ...</a> */}
        </div>
    </div>
);
export default Course;