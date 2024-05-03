import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const Navigate = useNavigate();

  const redirectToHome = () => {
    Navigate("/");
  };

  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <button id="backToHomeButton" onClick={redirectToHome}>
        Back to Homepage
      </button>
    </div>
  );
};

export default NotFound;
