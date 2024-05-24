import Dropdown from 'react-bootstrap/Dropdown';

function ArrangeDrop() {

    return (
        <>

            <Dropdown>
                <Dropdown.Toggle
                    variant="success"
                    id="dropdown-option"
                    style={{
                        border: "1px solid #A6A6A6",
                        backgroundColor: "white",
                        color: "#A6A6A6",
                        width: "70px",
                        height: "30px",
                        padding: "0 0 2px 0"
                    }}
                >
                    정렬
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item eventKey="1">추천순</Dropdown.Item>
                    <Dropdown.Item eventKey="2">최신순</Dropdown.Item>
                    <Dropdown.Item eventKey="3">낮은가격순</Dropdown.Item>
                    <Dropdown.Item eventKey="4">높은가격순</Dropdown.Item>
                    <Dropdown.Item eventKey="5">판매량순</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

        </>
    )
}

export default ArrangeDrop;