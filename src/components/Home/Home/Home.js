import React, { useEffect, useState } from "react";
import { latestJobs } from "../../../dummyData";
import TopNavBar from "../../Shared/TopNavBar/TopNavBar";
import JobCard from "../JobCard/JobCard";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * 20;
  const indexOfFirstItem = indexOfLastItem - 20;
  const newDisplayItems = jobs.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    setJobs(latestJobs);
  }, []);

  return (
    <>
      <header>
        <TopNavBar home={true} />
      </header>
      <main className="bg-light py-5">
        <section className="container row mx-auto">
          {newDisplayItems.map((job) => (
            <JobCard key={job.id.uid} title={job.jobTitle} name={job.name} company={job.companyName} description={job.jobDescription} />
          ))}
        </section>
        <section className='container mt-5 d-flex justify-content-center'>
          <div className='p-3 rounded-3 shadow-sm' style={{backgroundColor: '#D1D5DB'}}>
            <button onClick={() => setCurrentPage(currentPage - 1)} className="btn btn-light shadow" disabled={currentPage === 1 ? true : false} >Prev</button>
            <button onClick={() => setCurrentPage(currentPage + 1)} className="btn btn-light ms-4 shadow" disabled={currentPage === Math.ceil(jobs.length/20) ? true : false} >Next</button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
