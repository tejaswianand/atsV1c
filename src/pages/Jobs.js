import React, { useEffect, useState } from "react";
import Navbar from "../resources/components/Navbar";
import Jcard from "../resources/components/Jcard";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Jobs = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <Navbar />
      <div className="page-title">Available Jobs</div>
      <div className="page-content">
        <Jcard posts={posts} />
      </div>
    </>
  );
};

export default Jobs;
