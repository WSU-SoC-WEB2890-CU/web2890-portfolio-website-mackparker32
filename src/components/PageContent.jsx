import "../styles/PageContent.scss";

const PageContent = ({ title, children }) => {
  return (
    <div className="pageContent container">
      <h1 className="pageTitle text-center pt-2">{title}</h1>
      {children}
    </div>
  );
};

export default PageContent;
