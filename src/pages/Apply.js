import React, { useState } from "react";
import Navbar from "../resources/components/Navbar";
import axios from "axios";

const Apply = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [jid, setJid] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newApplication = {
      name,
      email,
      phone,
      city,
      jid,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newApplication.resume = filename;
      try {
        await axios.post("/upload", data);
        console.log("Resume Uploaded");
      } catch (err) {}
    }
    try {
      const res = await axios.post("/apply", newApplication);
      console.log(res);
      // window.location.replace("/single-post/" + res.data._id);
    } catch (err) {}
  };

  return (
    <>
      <Navbar />
      <div className="page-title">Apply Now</div>
      <div className="page-content">
        <div className="apply-form">
          <form>
            <div className="apply-form-left">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label for="phone">Mobile Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="apply-form-right">
              <label for="city">Current City</label>
              <input
                type="text"
                id="city"
                name="city"
                onChange={(e) => setCity(e.target.value)}
              />
              <label for="jid">Job ID</label>
              <input
                type="text"
                id="jid"
                name="jid"
                onChange={(e) => setJid(e.target.value)}
              />
              <label for="resume">Updated Resume</label>
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <button type="submit" onClick={handleSubmit}>
              Apply &nbsp;<i class="fa fa-external-link" aria-hidden="true"></i>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Apply;
