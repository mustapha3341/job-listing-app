import JobList from './components/JobList/JobList';

const App = () => {
    return (
        <div className="app">
          <div className="header"></div>
            <div className="app__container">
                <JobList />
            </div>
        </div>
    );
};

export default App;
