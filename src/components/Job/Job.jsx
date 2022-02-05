import './job.styles.css';

import job_image from '../../assets/photosnap.svg';

const Job = () => {
    return (
        <article className="job__post">
            <div className="job__post__details">
                <img
                    src={job_image}
                    alt="job post"
                    className="job__post__details-logo"
                />
                <div className="job__post__details-description">
                    <div className="company__name">
                        <p>Photosnap</p>
                    </div>
                    <h4 className="job__title">Senior Frontend Developer</h4>
                    <div className="job__conditions">
                        <span className="date__posted">5d ago</span>
                        <span className="job__type">Contract</span>
                        <span className="job__location">USA only</span>
                    </div>
                </div>
            </div>
            <div className="job__categories">
                <span>Frontend</span>
                <span>Senior</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>Javascript</span>
            </div>
        </article>
    );
};

export default Job;
