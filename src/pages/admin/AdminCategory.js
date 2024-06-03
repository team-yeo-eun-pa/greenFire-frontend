import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Button, Form, ListGroup, Dropdown } from 'react-bootstrap';
import { AdminCategoryAPICalls, callAdminCategoryRegistAPI, callAdminCategoryDeleteAPI } from "../../apis/AdminCategoryAPICalls";
import { useNavigate } from "react-router-dom";
import {deleteCategory} from "../../modules/AdminCategoryModules";

const AdminCategory = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { adminCategory, success, loading, error } = useSelector(state => state.category);
    const [categoryTitle, setCategoryTitle] = useState('');
    const [selectedParentCategory, setSelectedParentCategory] = useState(null);
    const [selectedCategoryToDelete, setSelectedCategoryToDelete] = useState(null);

    useEffect(() => {
        dispatch(AdminCategoryAPICalls());
    }, [dispatch]);

    useEffect(() => {
        if (success) {
            navigate('/admin/dashboard/category');
        }
    }, [success, navigate]);

    const handleSaveCategory = () => {
        const newCategory = {
            categoryTitle: categoryTitle,
            parentCategory: selectedParentCategory ? selectedParentCategory.categoryCode : null,
            type: 'application/json'
        };
        dispatch(callAdminCategoryRegistAPI({ registRequest: newCategory }));
        setCategoryTitle('');
        setSelectedParentCategory(null);
    };

    const handleParentCategorySelect = (parentCategory) => {
        setSelectedParentCategory(parentCategory === '선택안함' ? null : parentCategory);
    };

    const handleChildCategorySelect = (childCategory) => {
        console.log("Selected child category:", childCategory);
        setSelectedParentCategory(childCategory.refCategoryCode ? adminCategory.find(category => category.categoryCode === childCategory.refCategoryCode) : null);
    };


    const handleDeleteCategory = () => {
        if (!selectedParentCategory) {
            alert('삭제할 카테고리를 선택해주세요.');
            return;
        }

        if (window.confirm(`${selectedParentCategory.categoryTitle} 카테고리를 삭제하시겠습니까?`)) {
            dispatch(callAdminCategoryDeleteAPI(selectedParentCategory));
            setSelectedParentCategory(null);
        }
    };

    // const handleCategoryClick = (category) => {
    //     setSelectedCategoryToDelete(category);
    // };

    const parentCategories = adminCategory.filter(category => category.refCategoryCode === null);
    const childCategories = adminCategory.filter(category => category.refCategoryCode !== null);

    return (
        <Container>
            <Row>
                <Col xs lg="9" className="mt-5">
                    <div className="fs-4 fw-semibold border-bottom border-2 border-dark-subtle p-2">카테고리 관리</div>
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
                                                <ListGroup.Item key={subIndex} onClick={() => handleChildCategorySelect(sub)}>{sub.categoryTitle}</ListGroup.Item>
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
                                    {selectedParentCategory ? selectedParentCategory.categoryTitle : "선택안함"}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => handleParentCategorySelect('선택안함')}>선택안함</Dropdown.Item>
                                    {parentCategories.map((category, index) => (
                                        <Dropdown.Item
                                            key={index}
                                            onClick={() => handleParentCategorySelect(category)}>
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
