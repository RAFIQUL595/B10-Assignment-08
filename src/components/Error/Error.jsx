import { Link } from "react-router-dom";
import error from "../../assets/error-404-concept-landing-page_52683-10996.jpg"

const Error = () => {
    return (
        <div>
     <img className="h-[740px] w-full" src={error} alt="" />
     <Link className="absolute top-52 left-[650px] text-2xl" to="/">Go To Home</Link>
    </div>
    );
};

export default Error;