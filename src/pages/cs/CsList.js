import data from "bootstrap/js/src/dom/data";
import CsListItem from "../../components/items/cs/CsListItem";
import {Alert} from "antd";


function CsList({cs}) {
    return (
        <>
            {cs
        && cs.map(cs => <CsListItem key={cs.csCode} product={cs}/>)}

           조회된 문의가 없습니다.
        </>
    );
}

export default CsList;