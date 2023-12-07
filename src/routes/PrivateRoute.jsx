import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({ children }) => {

    const { user , loading } = useAuth();

    const location = useLocation();

    if (loading){
        return <div className="flex justify-center"><span className="loading loading-spinner loading-lg"></span></div>
    }

    if( user ) {
        return children;
    }

    return <Navigate to="/login" state={{from : location }} replace></Navigate>;
};

export default PrivateRoute;

PrivateRoute.propTypes ={
    children : PropTypes.node
}