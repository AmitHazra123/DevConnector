import React, { Component } from "react";
import Moment from "react-moment";

import isEmpty from "../../validation/is-empty";

class ProfileCreds extends Component {
  render() {
    const { experience, education } = this.props;

    // Experience List
    const experienceList = experience.map(exp => (
      <li class="list-group-item">
        <h4>{exp.company}</h4>
        <p>
          <Moment format="YYYY-DD-MM">{exp.from}</Moment>{" "}
          {isEmpty(exp.to) ? (
            <span> till now</span>
          ) : (
            <Moment format="YYYY-DD-MM">{exp.to}</Moment>
          )}
        </p>
        <p>
          <strong>Position:</strong> {exp.title}
        </p>
        <p>
          {isEmpty(exp.description) ? null : (
            <span>
              <strong>Description:</strong> {exp.description}
            </span>
          )}
        </p>
      </li>
    ));

    // Education List
    const educationList = education.map(edu => (
      <li class="list-group-item">
        <h4>{edu.school}</h4>
        <p>
          <Moment format="YYYY/MM/DD">{edu.from}</Moment>{" "}
          {isEmpty(edu.to) ? (
            <span>till now</span>
          ) : (
            <Moment format="YYYY/MM/DD">{edu.to}</Moment>
          )}
        </p>
        <p>
          <strong>Degree: </strong>
          {edu.degree}
        </p>
        <p>
          <strong>Field Of Study: </strong>
          {edu.fieldofStudy}
        </p>
        <p>
          <p>
            {isEmpty(edu.description) ? null : (
              <span>
                <strong>Description: </strong>
                {edu.description}
              </span>
            )}
          </p>
        </p>
      </li>
    ));

    return (
      <div className="row">
        <div className="col-md-12">
          <div class="row">
            <div class="col-md-6">
              <h3 class="text-center text-info">Experience</h3>
              {experience.length > 0 ? (
                <ul class="list-group">{experienceList}</ul>
              ) : (
                <span>Experience Field is Empty</span>
              )}
            </div>
            <div class="col-md-6">
              <h3 class="text-center text-info">Education</h3>
              {education.length > 0 ? (
                <ul class="list-group">{educationList}</ul>
              ) : (
                <span>Education Field is Empty</span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileCreds;
