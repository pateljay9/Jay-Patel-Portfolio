import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "Insurance Data Integration and Reporting",
    category: "Enterprise Data Engineering",
    description: "Architected automated SSIS ETL pipelines to process multi-source insurance data with robust error handling. Optimized transformation performance for large datasets to guarantee accuracy and deliver strategic business insights.",
    tools: "SSIS, Azure SQL Database, T-SQL, Change Tracking",
    image: "/images/insurance_data_integration.png"
  },
  {
    title: "Incremental Data Integration from Business Central",
    category: "Data Integration",
    description: "Designed and implemented an incremental data integration pipeline to extract and load data from Business Central to Azure SQL Database. Utilized change tracking and delta load strategies to minimize data transfer time and ensure data consistency.",
    tools: "Azure Data Factory, Azure SQL Database, T-SQL, Change Tracking",
    image: "/images/incremental_data_integration.png"
  },
  {
    title: "Real-Time Vehicle Tracking System with Cosmos DB",
    category: "Real-Time Data Processing",
    description: "Designed scalable data models and implemented Azure Cosmos DB (MongoDB API) to store and instantly analyze real-time OBD vehicle tracking data. Collaborated with backend developers to optimize performance, ensuring reliable, low-latency data ingestion for seamless tracking.",
    tools: "Cosmos DB, T-SQL, Azure Portal",
    image: "/images/vehicle_tracking_cosmos.png"
  },
  {
    title: "National Auto Care Data Reporting",
    category: "Paginated Reporting Design",
    description: "Translated business requirements into paginated reports using SSRS, ensuring accurate data representation and performance optimization.",
    tools: "SSRS, SQL Server, Stored Procedures, Power Query",
    image: "/images/national_auto_reporting.png"
  },
  {
    title: "Dialpad Telephone System",
    category: "Dashboard Design",
    description: "Translated business requirements into robust tabular data models and complex DAX calculations. Built interactive Power BI dashboards with custom KPIs to deliver actionable, data-driven decisions.",
    tools: "Power BI, DAX, Tabular Models, MsSQL",
    image: "/images/dialpad_dashboard.png"
  },
  {
    title: "Radio Detection 2.0.1",
    category: "Database Infrastructure",
    description: "Set up robust database environments with scalable solutions. Implemented TTL settings on collections to manage data lifecycle efficiently.",
    tools: "Cosmos DB, T-SQL, Azure Portal",
    image: "/images/radio_detection_db.png"
  },
  {
    title: "Syntelli Queries",
    category: "Database Design",
    description: "Acted as DBA to design database structures for PostgreSQL and MongoDB. Collaborated closely with cross-functional teams.",
    tools: "Cosmos DB, PostgreSQL, MongoDB, T-SQL",
    image: "/images/syntelli_queries.png"
  },
  {
    title: "Semantic Analytics",
    category: "Data Analytics & BI",
    description: "Analyzed airline data and application logs. Built tabular models, transformed data, and created interactive dashboards using Power BI.",
    tools: "Power BI, SQL Server, Stored Procedures, Power Query",
    image: "/images/semantic_analytics.png"
  },
  {
    title: "DRC VAT Portal",
    category: "Business Reporting",
    description: "Designed and developed business reports using SSRS, ensuring accurate data representation and performance optimization.",
    tools: "Report Builder, SSRS, SQL Server, Stored Procedures",
    image: "/images/drc_vat_portal.png"
  },
  {
    title: "Hadoop Component PoC",
    category: "Big Data Proof of Concept",
    description: "Developed Big Data solutions using Hadoop, performing batch processing with Pig and Hive, and real-time ingestion with Flume.",
    tools: "Pig, Hive, Flume, Sqoop, Hadoop",
    image: "/images/hadoop_component_poc.png"
  },
  {
    title: "Antares Risk Analytics",
    category: "ETL & Data Warehousing",
    description: "Designed and developed SSIS ETL processes to load data into client databases. Maintained Star and Snowflake schemas.",
    tools: "SSIS, SQL Server, T-SQL, ETL, Visual Studio",
    image: "/images/antares_risk_analytics.png"
  }
];

const Work = () => {
  useGSAP(() => {
    function getTranslateX() {
      const boxes = document.getElementsByClassName("work-box");
      if (!boxes || boxes.length === 0) return 0;
      const container = document.querySelector(".work-container");
      if (!container) return 0;
      const rectLeft = container.getBoundingClientRect().left;
      const firstBox = boxes[0];
      const boxWidth = firstBox.getBoundingClientRect().width;
      const parentWidth = firstBox.parentElement!.getBoundingClientRect().width;
      const padding = parseFloat(window.getComputedStyle(firstBox).paddingLeft) || 0;
      const totalWidth = boxWidth * boxes.length;
      const result = totalWidth - (rectLeft + parentWidth) + padding;
      return Math.max(result, 0); // safety: never return negative/NaN
    }

    // Defer creation so layout is fully computed
    let timeline: gsap.core.Timeline;

    const initScrollTrigger = () => {
      const translateX = getTranslateX();
      if (translateX <= 0) {
        // Layout not ready yet, try again
        requestAnimationFrame(initScrollTrigger);
        return;
      }

      timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".work-section",
          start: "top top",
          end: () => `+=${getTranslateX()}`,
          scrub: true,
          pin: true,
          pinSpacing: true,
          id: "work",
          invalidateOnRefresh: true,
        },
      });

      timeline.to(".work-flex", {
        x: () => -getTranslateX(),
        ease: "none",
      });

      // Refresh after pin spacer is created to fix stacking
      requestAnimationFrame(() => {
        ScrollTrigger.refresh(true);
      });
    };

    // Wait for next frame + small delay so DOM is fully laid out
    requestAnimationFrame(() => {
      setTimeout(initScrollTrigger, 200);
    });

    // Additional refreshes for late-loading content
    const refreshTimers = [
      setTimeout(() => ScrollTrigger.refresh(true), 1500),
      setTimeout(() => ScrollTrigger.refresh(true), 3000),
      setTimeout(() => ScrollTrigger.refresh(true), 5000),
    ];

    const onLoad = () => ScrollTrigger.refresh(true);
    window.addEventListener("load", onLoad);

    return () => {
      if (timeline) timeline.kill();
      ScrollTrigger.getById("work")?.kill();
      window.removeEventListener("load", onLoad);
      refreshTimers.forEach(clearTimeout);
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                <br />
                <h4>Description</h4>
                <p>{project.description}</p>
              </div>
              <WorkImage image={(project as any).image || "/images/placeholder.webp"} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
