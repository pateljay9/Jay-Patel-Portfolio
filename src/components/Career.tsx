import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SQL Database Developer</h4>
                <h5>1Rivet India, Valsad</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              An expert in database design, optimization, and performance tuning across multiple platforms, specializing in building robust ETL pipelines using SSIS and Azure Data Factory. Proficient in cloud database migration strategies, transforming raw data into actionable business insights. Highly skilled in translating complex user requirements into effective architectures and creating insightful dashboards and comprehensive reporting solutions with Power BI and SSRS.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ETL Developer</h4>
                <h5>Confluence Software Solutions, Valsad</h5>
              </div>
              <h3>2019</h3>
            </div>
            <p>
              Developed robust SSIS packages for complex ETL processes, encompassing lookups, splits, aggregations, and vital data transformations. Adept at building sub-queries, joins, and optimizing SQL scripts to streamline large-scale data extraction and in-depth analysis. Demonstrated proficiency in seamlessly importing and exporting datasets between Hadoop and RDBMS environments utilizing Sqoop.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Engineering</h4>
                <h5>SVPIT, Vasad-388306</h5>
              </div>
              <h3>2016</h3>
            </div>
            <p>
              Graduated with a Bachelor of Engineering from Sardar Vallabhbhai Patel Institute of Technology (2012-2016).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
