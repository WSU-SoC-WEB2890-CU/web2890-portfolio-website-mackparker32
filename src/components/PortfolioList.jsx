import { Link } from "react-router-dom";
import "../styles/index.scss";

const PortfolioList = ({ projects }) => {
  return (
    <div className="portfolioList container">
      <div className="row">
        {projects.map((project) => (
          <div className="col-lg-4 col-md-6 col-sm-12" key={project.id}>
            <div className="portfolio-card">
              <Link to={`/portfolio/${project.id}`}>
                <img
                  src={project.image}
                  alt={project.name}
                  className="card-img"
                />
                <div className="card-body">
                  <h3>{project.name}</h3>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioList;
