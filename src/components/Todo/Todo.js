import { useState, useRef } from "react";
import classNames from "classnames/bind";
import styles from "./Todo.module.scss";

const cx = classNames.bind(styles);

function Todo() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(() => {
    const jobsStorage = JSON.parse(localStorage.getItem("jobs"));
    return jobsStorage ? jobsStorage : [];
  });

  const inputRef = useRef();

  const handleSubmit = (job) => {
    // disable submit with invalid info or space
    if (job === "" || job.startsWith(" ")) {
      setJob("");
      return;
    }
    setJobs((prev) => {
      const newJobs = [...prev, job];
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);
      return newJobs;
    });
    setJob("");
    inputRef.current.focus();
  };

  const handleDone = (index) => {
    const newJobs = [...jobs];
    newJobs.splice(index, 1);
    localStorage.setItem("jobs", JSON.stringify(newJobs));
    setJobs(newJobs);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("job-wrapper")}>
        <input
          className={cx("input")}
          ref={inputRef}
          value={job}
          placeholder="Enter todo..."
          onChange={(e) => {
            // other way to unable user type space is the first letter
            if (e.target.value.startsWith(" ")) return;
            setJob(e.target.value);
          }}
        />
        <button
          className={cx("add-btn")}
          onClick={() => {
            handleSubmit(job);
          }}
        >
          Add
        </button>
      </div>
      <ul className={cx("jobs-wrapper")}>
        {jobs
          .map((job, index) => (
            <div className={cx("item-box")}>
              <li className={cx("item")} key={index}>
                {job}
              </li>
              <button
                className={cx("done-btn")}
                onClick={() => handleDone(index)}
              >
                Done
              </button>
            </div>
          ))
          .reverse()}
      </ul>
    </div>
  );
}

export default Todo;
