import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import TopNavBar from "../../Shared/TopNavBar/TopNavBar";
import JobCard from "../JobCard/JobCard";
import { Link } from "react-router-dom";

const Home = () => {
  const [user] = useContext(UserContext);
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchKeywords, setSearchKeywords] = useState('');

  const indexOfLastItem = currentPage * 20;
  const indexOfFirstItem = indexOfLastItem - 20;
  const newDisplayItems = jobs.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    fetch(`https://desolate-forest-54482.herokuapp.com/jobs?keywords=${searchKeywords}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [searchKeywords]);

  const handleChange = event => {
    setSearchKeywords(event.target.value);
  }

  const paginationBtn = (
    <section className="container my-2">
      <div className="d-flex justify-content-between">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          className="btn btn-success shadow"
          disabled={currentPage === 1 ? true : false}
        >
          {"<"}Prev
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          className="btn btn-success ms-4 shadow"
          disabled={currentPage === Math.ceil(jobs.length / 20) ? true : false}
        >
          Next{">"}
        </button>
      </div>
    </section>
  );

  return (
    <>
      <header>
        <TopNavBar home={true} />
      </header>

      {
        user.email ?
          <main className="bg-light py-5">
            <section>
              <div className='w-50 mx-auto d-flex'>
                <input onChange={handleChange} type="text" className="form-control" placeholder='Search a Job' />
              </div>
            </section>

            {paginationBtn}

            <section className="container row mx-auto">
              {
                newDisplayItems.map((job) => <JobCard key={job._id} job={job} />)
              }
            </section>

            {paginationBtn}
          </main>
          : <main className="bg-light py-5">
            <section className='container text-center'>
              <h1>Find Your Dream Job</h1>
              <p>or</p>
              <h1>Hire Talents</h1>
              <Link to='/login' className='btn btn-secondary my-4'>Getting Started</Link>
            </section>
          </main>
      }
    </>
  );
};

export default Home;
