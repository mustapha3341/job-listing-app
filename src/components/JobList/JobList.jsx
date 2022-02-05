import Job from '../Job/Job';
import './joblist.styles.css';

const JobList = () => {
    return (
        <div className="job__list-container">
            <Job />
            <Job />
            <Job />
            <Job />
        </div>
    );
};

export default JobList;
