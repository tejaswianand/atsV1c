import React, { useEffect, useState } from "react";
import Navbar from "../resources/components/Navbar";
import Cards from "../resources/components/Cards";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Description = () => {
  const locationn = useLocation();
  const path = locationn.pathname.split("/")[3];
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPosts(res.data);
    };
    getPost();
  }, [path]);

  console.log(path);
  return (
    <>
      <Navbar />
      <div className="job-desc-head">
        <div className="job-desc-head-title">{posts.role}</div>
        <div className="job-desc-head-meta">
          <p>
            {posts.company}-{posts.location}-{posts.experience}
          </p>
          <p>Posted on : 22-04-23</p>
        </div>
      </div>

      <div className="job-desc-content">
        <div className="job-desc-content-left">
          <p>{posts.desc}</p>
        </div>
        <div className="job-desc-content-right">
          <Cards />
        </div>
      </div>
    </>
  );
};

export default Description;
