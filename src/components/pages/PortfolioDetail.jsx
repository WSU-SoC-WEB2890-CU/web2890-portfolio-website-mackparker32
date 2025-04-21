import { useNavigate, useLoaderData } from "react-router-dom";
import "../../styles/index.scss";

const PortfolioDetailPage = () => {
  const project = useLoaderData();
  const navigate = useNavigate();

  return (
    <article className="portfolio-detail container py-4">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6 text-center">
          <h2 className="mb-3">{project.name}</h2>
          <img
            src={project.image}
            alt={project.name}
            className="img-fluid rounded shadow mb-3"
          />
          <p>{project.description}</p>

          <div className="d-flex justify-content-center gap-3">
            <button
              className="btn btn-info"
              onClick={() => navigate("/portfolio")}
            >
              Back
            </button>
            <a
              href={project.link}
              target="_blank"
              className="btn btn-primary bg-primary"
            >
              Go to Project
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PortfolioDetailPage;

export async function portfolioIdLoader({ request, params }) {
  const id = params.portfolioId;

  const response = await fetch(
    `https://web3350-portfolio-9e9d2-default-rtdb.firebaseio.com/portfolioProjects/${id}.json`
  );

  if (!response.ok) {
    throw new Response(
      JSON.stringify({
        message: "Could not fetch details for selected project",
      }),
      {
        status: 500,
      }
    );
  } else {
    const data = await response.json();

    return {
      id: data.id,
      name: data.name,
      description: data.description,
      image: data.image,
      link: data.link,
    };
  }
}
