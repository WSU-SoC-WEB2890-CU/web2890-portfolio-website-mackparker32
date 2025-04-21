import { Link } from "react-router-dom";
import "../styles/index.scss";

const PortfolioList = ({ projects }) => {
  return (
    <div className="portfolioList container py-5">
      <div className="row justify-content-center gx-4 gy-4">
        {projects.map((project) => (
          <div className="col-lg-4 col-md-6 col-sm-12" key={project.id}>
            <div className="portfolio-card card h-100 shadow-sm">
              <Link
                to={`/portfolio/${project.id}`}
                className="text-decoration-none text-dark"
              >
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
