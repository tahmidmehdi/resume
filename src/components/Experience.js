import jobs from '../data/jobs';
import Job from './Job';

function Experience() {
  const parsedJobs = jobs.map(job => <Job key={job.id} title={job.title} company={job.company} location={job.location} description={job.description} dates={job.dates} image_path={job.image_path} />);
  return (
    <div className="Experience">
      <h2>Experience</h2>
      {parsedJobs}
    </div>
  );
}

export default Experience;