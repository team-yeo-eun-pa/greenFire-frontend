import {useNavigate} from "react-router-dom";

function CsListItem({cs : {csCode, csWriteDate, memberCode, csStatus}}) {


    const navigate = useNavigate();

    return (

        <div
         onclick={()=> navigate('/cs/detail')}>
            <h5>{memberCode}</h5>
            <h5>{csStatus}</h5>


        </div>

    );
}

export default CsListItem;