import { useState, useRef } from "react";
import classNames from "classnames/bind";
import styles from "./Todo.module.scss";

const cx = classNames.bind(styles);

function Todo() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState([]);

  const inputRef = useRef();

  const handleSubmit = (job) => {
    // unable submit with invalid info or space
    if (job === "" || job.startsWith(" ")) {
      setJob("");
      return;
    }
    setJobs((prev) => [...prev, job]);
    setJob("");
    inputRef.current.focus();
  };

  const handleDone = (index) => {
    const newJobs = [...jobs];
    newJobs.splice(index, 1);
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
        {jobs.map((job, index) => (
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
        ))}
      </ul>
    </div>
  );
}

export default Todo;
