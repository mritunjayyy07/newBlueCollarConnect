
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  clearAllJobErrors,
  deleteJob,
  getMyJobs,
  resetJobSlice,
} from "../store/slices/jobSlice";
import Spinner from "../components/Spinner";

const MyJobs = () => {
  const { loading, error, myJobs, message } = useSelector(
    (state) => state.jobs
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllJobErrors());
    }
    if (message) {
      toast.success(message);
      dispatch(resetJobSlice());
    }
    dispatch(getMyJobs());
  }, [dispatch, error, message]);

  const handleDeleteJob = (id) => {
    dispatch(deleteJob(id));
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : myJobs && myJobs.length <= 0 ? (
        <h1 style={{ fontSize: "1.4rem", fontWeight: "600" }}>
          You haven’t posted any work request yet.
        </h1>
      ) : (
        <>
          <div className="account_components">
            <h3>My Work Posts</h3>
            <div className="applications_container">
              {myJobs.map((element) => (
                <div className="card" key={element._id}>
                  <p className="sub-sec">
                    <span>Work Title: </span>
                    {element.title}
                  </p>
                  <p className="sub-sec">
                    <span>Work Category:</span> {element.jobNiche}
                  </p>
                  <p className="sub-sec">
                    <span>Daily Wage / Payment: </span> {element.salary}
                  </p>
                  <p className="sub-sec">
                    <span>Work Location:</span> {element.location}
                  </p>
                  <p className="sub-sec">
                    <span>Work Type:</span> {element.jobType}
                  </p>
                  <p className="sub-sec">
                    <span>Customer / Contractor Name:</span>{" "}
                    {element.companyName}
                  </p>
                  <p className="sub-sec">
                    <span>Work Description:</span> {element.introduction}
                  </p>
                  <p className="sub-sec">
                    <span>Required Skills:</span> {element.qualifications}
                  </p>
                  <p className="sub-sec">
                    <span>Responsibilities:</span> {element.responsibilities}
                  </p>
                  {element.offers && (
                    <p className="sub-sec">
                      <span>What We Provide:</span> {element.offers}
                    </p>
                  )}
                  <button
                    className="btn"
                    onClick={() => handleDeleteJob(element._id)}
                  >
                    Remove Work Post
                  </button>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MyJobs;

