import {isLogin} from "../../utils/TokenUtils";
import {Navigate} from "react-router-dom";

function ProtectedRoute({loginCheck, children}) {

    if (loginCheck) {
        return isLogin() ? children : <Navigate to="/members/login"/>
    } else {
        return !isLogin() ? children : <Navigate to="/"/>
    }

}

export default ProtectedRoute;