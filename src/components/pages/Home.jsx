import PageContent from "../PageContent";
import "../../styles/index.scss";
import { useNavigate } from "react-router-dom";
import codingImg from "../../images/coding_1.png";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <PageContent>
      <div className="homePage">
        <div className="row">
          <div className="col-lg-6">
            <h1>WEB Developer Student</h1>
            <p>Hi, my name is Mack Parker</p>
            <p>
              I am a student in the Web and UX program and I love making
              creative designs with HTML, CSS, and Javascript.
            </p>
            <p>
              Welcome to my page! If you have any questions feel free to contact
              me!
            </p>
            <button
              onClick={() => {
                navigate("/contact");
              }}
            >
              Contact Me
            </button>
          </div>
          <div className="col-lg-6">
            <img src={codingImg} alt="coding" />
          </div>
        </div>
      </div>
    </PageContent>
  );
};

export default HomePage;
