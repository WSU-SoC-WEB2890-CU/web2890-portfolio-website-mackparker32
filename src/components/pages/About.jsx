import PageContent from "../PageContent";
import "../../styles/About.scss";
import html5img from "../../images/HTML_5.png";
import cssImg from "../../images/css_logo.png";
import scssImg from "../../images/sass_logo.png";
import javascriptImg from "../../images/javascript_logo.png";
import pythonImg from "../../images/python_logo.png";
import reactImg from "../../images/react_logo.png";

const AboutPage = () => {
  const skillsList = [
    { name: "HTML5", img: html5img },
    { name: "CSS", img: cssImg },
    { name: "SCSS", img: scssImg },
    {
      name: "JavaScript",
      img: javascriptImg,
    },
    { name: "Python", img: pythonImg },
    { name: "React", img: reactImg },
  ];

  return (
    <PageContent title="About Mack Parker">
      <section id="aboutMe" className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="mb-4">Web and User Experience Student</h2>
            <div className="paragraph-container">
              <p>
                I’m in my fourth year of college, and I just switched my major
                to Web and User Experience a little over a year ago. Before, I
                was interested in becoming a graphic design student, but the
                coding world caught my eye. Since there is still a great deal of
                design in web development, I thought it would be a good mix of
                both worlds.
              </p>
              <p>
                So far, I find JavaScript really interesting and mess around
                with it in my spare time. I also like using Bootstrap in my
                projects. I recently got introduced to React.js and find it very
                appealing to use in future projects if there is any
                functionality needed.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h3 className="mt-4">Skills</h3>
            <div className="table-responsive">
              <table className="table table-borderless skills-table mx-auto">
                <tbody>
                  {skillsList.map((skill, index) => (
                    <tr key={index}>
                      <td className="skill-name">{skill.name}</td>
                      <td className="text-center">
                        <img
                          src={skill.img}
                          alt={`${skill.name} logo`}
                          className="skill-logo"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </PageContent>
  );
};

export default AboutPage;
