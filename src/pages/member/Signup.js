import SignupForm from "../../components/form/SignupForm";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {reset} from "../../modules/MemberModules";

function Signup() {

    const { success } = useSelector(state => state.memberReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (success === true) {
            navigate(`member/login`);
            dispatch(reset());
        }
    }, [success]);

    return (
        <>
            <SignupForm/>
        </>
    );
}

export default Signup;