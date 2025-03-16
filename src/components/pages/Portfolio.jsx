import { useLoaderData } from "react-router-dom";
import PageContent from "../PageContent";
import PortfolioList from "../PortfolioList";

const PortfolioPage = () => {
  const projects = useLoaderData();

  return (
    <PageContent title="Portfolio Projects">
      <PortfolioList projects={projects} />
    </PageContent>
  );
};

export default PortfolioPage;

export async function portfolioLoader() {
  const response = await fetch(
    "https://web3350-portfolio-9e9d2-default-rtdb.firebaseio.com/portfolioProjects.json"
  );

  if (!response.ok) {
    throw new Response(
      JSON.stringify(
        { message: "could not not fetch portfolio projects" },
        {
          status: 500,
        }
      )
    );
  } else {
    const data = await response.json();

    const loadedData = [];

    for (const key in data) {
      loadedData.push({
        id: data[key].id,
        name: data[key].name,
        description: data[key].description,
        image: data[key].image,
        link: data[key].link,
      });
    }

    return loadedData;
  }
}
