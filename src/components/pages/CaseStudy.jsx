import PageContent from "../PageContent";
import "../../styles/CaseStudy.scss";
import sushiImg from "../../images/SenseiSushi.png";
import pageConnectionsImg from "../../images/page_connections.png";

const CaseStudyPage = () => {
  return (
    <PageContent title="Case Study">
      <section id="caseStudy" className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="case-study-item sushi">
              <h2>Sensei Sushi</h2>
              <img
                src={sushiImg}
                alt="Sensei Sushi"
                className="img-fluid rounded shadow"
              />
              <p>
                Sushi Sensei is a website for sushi and food lovers to make
                delicious sushi rolls. The website offers sushi roll recipes and
                in person lessons to both beginners and more experienced chefs
                in the kitchen.
              </p>
            </div>

            <div className="case-study-item problem">
              <h2>Problem Statement</h2>
              <p>
                Many sushi enthusiasts struggle to find easy-to-follow recipes
                or on-site locations on how to make sushi. In addition, there is
                a lack of accessible and an easy way of learning how to make
                quality sushi in a fun and straightforward way.
              </p>
            </div>

            <div className="case-study-item goal">
              <h2>Goal</h2>
              <p>
                Have an accessible collection of step-by-step sushi
                instructions. Also, having a way to book in-person sushi classes
                on-site to fit people’s schedules.
              </p>
            </div>

            <div className="case-study-item audience">
              <h2>Audience</h2>
              <p>
                Our audience is for all ages, especially those looking for
                recipes. Ages 20 and above are encouraged to schedule in-person
                classes to advance their skills. We aim to help anyone willing
                to learn, even if it’s just for fun, because that will spark an
                interest. It is also for people who are health-conscious and
                looking for recipes to add to their repertoire.
              </p>
            </div>

            <div className="case-study-item connections">
              <h2>Page Connections</h2>
              <img
                src={pageConnectionsImg}
                alt="Page Connections"
                className="img-fluid rounded shadow"
              />
              <p>
                Everything is available from the homepage. There is an account
                person icon, or you can press the hamburger icon for the
                navigation menu in the mobile version. On the desktop, there is
                just a nav bar with 5 nav buttons. The 404 page is available
                from the last 3 recipes since there is no content written for
                them, and also for the second recipe on the horizontal scroll on
                the homepage.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageContent>
  );
};

export default CaseStudyPage;
