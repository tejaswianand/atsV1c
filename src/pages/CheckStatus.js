import React from "react";
import Navbar from "../resources/components/Navbar";

const CheckStatus = () => {
  return (
    <>
      <Navbar />
      <div className="page-title">Check your Application Status</div>
      <div className="page-content">
        <div className="apply-form w50p center">
          <form>
            <label for="ap-no">Application Number/ID</label>
            <input type="text" id="ap-no" name="ap-no" />
            <button type="submit">Check Status</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CheckStatus;
