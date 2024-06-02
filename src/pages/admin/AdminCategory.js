import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Button, Form, ListGroup, Dropdown } from 'react-bootstrap';
import {AdminCategoryAPICalls} from "../../apis/AdminCategoryAPICalls";
import {addCategory} from "../../modules/AdminCategoryModules";

const AdminCategory = () => {
    const dispatch = useDispatch();
    const { adminCategory, success, loading, error } = useSelector(state => state.category); // 상태 경로 확인
    const [categoryTitle, setCategoryTitle] = useState('');
    const [parentCategory, setParentCategory] = useState('');

    useEffect(() => {
        dispatch(AdminCategoryAPICalls());
    }, [dispatch]);

    const handleSaveCategory = () => {
        const newCategory = {
            categoryTitle: categoryTitle,
            parentCategory: parentCategory
        };
        dispatch(addCategory(newCategory)); // 수정된 부분
        setCategoryTitle(''); // 입력 필드 초기화
        setParentCategory(''); // 드롭다운 초기화
    };


    const handleDeleteCategory = () => {
        // 카테고리 삭제 로직
    };

    const parentCategories = adminCategory.filter(category => category.refCategoryCode === null);
    const childCategories = adminCategory.filter(category => category.refCategoryCode !== null);

    return (
        <Container>
            <Row>
                <Col xs lg="9" className="mt-5">
                    <div className="fs-4 fw-semibold border-bottom border-2 border-dark-subtle p-2">회원관리</div>
                </Col>
                <Col>
                    <Button variant="success" onClick={handleSaveCategory}>+ 카테고리 추가</Button>
                    <Button variant="danger" onClick={handleDeleteCategory}>- 카테고리 삭제</Button>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    {loading ? (
                        <div>Loading...</div>
                    ) : error ? (
                        <div>Error: {error}</div>
                    ) : (
                        <ListGroup>
                            {parentCategories.map((parent, index) => (
                                <ListGroup.Item key={index}>
                                    <strong>{parent.categoryTitle}</strong>
                                    <ListGroup>
                                        {childCategories
                                            .filter(child => child.refCategoryCode === parent.categoryCode)
                                            .map((sub, subIndex) => (
                                                <ListGroup.Item key={subIndex}>• {sub.categoryTitle}</ListGroup.Item>
                                            ))}
                                    </ListGroup>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )}
                </Col>
                <Col md={8}>
                    <Form>
                        <Form.Group controlId="formCategoryTitle">
                            <Form.Label>카테고리 명</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="카테고리 명 입력"
                                value={categoryTitle}
                                onChange={(e) => setCategoryTitle(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formParentCategory">
                            <Form.Label>상위 카테고리</Form.Label>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    {parentCategory || "선택안함"}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => setParentCategory('')}>선택안함</Dropdown.Item>
                                    {parentCategories.map((category, index) => (
                                        <Dropdown.Item
                                            key={index}
                                            onClick={() => setParentCategory(category.categoryTitle)}>
                                            {category.categoryTitle}
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                            <Button variant="primary" onClick={handleSaveCategory}>저장</Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default AdminCategory;
