import { Link } from "react-router-dom";
import "./App.css";
import Lottie from "lottie-react";
import Animation from "./assets/AnimationLoadingCircle.json";


const App = () => {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="text-center">
          <Lottie animationData={Animation} height={600} width={800} />
          <h1 className="mb-4">Benvenuto!</h1>
          <div className="d-flex justify-content-center">
            <Link to="login">
              <button className="btn btn-primary rounded-pill px-4 mx-2">
                Login
              </button>
            </Link>
            <Link to="signup">
              {" "}
              <button className="btn btn-success rounded-pill px-4 mx-2">
                Sign Up
              </button>
            </Link>
            <Link to="utenti">
              {" "}
              <button className="btn btn-success rounded-pill px-4 mx-2">
                Utenti
              </button>
            </Link>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default App;
