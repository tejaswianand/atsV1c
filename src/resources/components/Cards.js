import React from "react";
import { NavLink } from "react-router-dom";

const Cards = ({ post }) => {
  return (
    <div className="card">
      <div className="job-title">{post.role}</div>
      <div className="job-req">{post.location}</div>
      <div className="job-actions">
        <NavLink to={`/jobs/desc/${post._id}`}>
          View <i class="fa fa-eye" aria-hidden="true"></i>
        </NavLink>
        <NavLink to="/apply">
          Apply Now <i class="fa fa-external-link" aria-hidden="true"></i>
        </NavLink>
      </div>
    </div>
  );
};

export default Cards;
