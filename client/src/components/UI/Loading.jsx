import "./Loading.scss";
import loadingSvg from "./../../img/loading.svg";
import { Link } from "react-router-dom";

const Loading = ({ main = false, fullHeight = false }) => {
  return (
    <div className={`loading ${fullHeight && "full-height"}`}>
      
      {main && (
        <>
          <p>
            If you are new,&nbsp;
            <Link to="signup">please sign up here</Link>
          </p>
          
        </>
      )}
    </div>
  );
};

export default Loading;
