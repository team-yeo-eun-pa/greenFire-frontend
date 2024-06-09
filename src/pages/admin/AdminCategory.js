import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Button, Form, ListGroup, Dropdown } from 'react-bootstrap';
import { AdminCategoryAPICalls, callAdminCategoryRegistAPI, callAdminCategoryDeleteAPI, callAdminCategoryModifyAPI } from "../../apis/AdminCategoryAPICalls";
import { useNavigate } from "react-router-dom";
import '../../style.css';


const AdminCategory = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { adminCategory, success, loading, error } = useSelector(state => state.category);
    const [categoryTitle, setCategoryTitle] = useState('');
    const [selectedParentCategory, setSelectedParentCategory] = useState(null);
    const [selectedChildCategory, setSelectedChildCategory] = useState(null);
    const [editingCategory, setEditingCategory] = useState(null);
    const [draggedCategory, setDraggedCategory] = useState(null);

    useEffect(() => {
        dispatch(AdminCategoryAPICalls());
    }, [dispatch, success]);

    // 추가된 코드: 데이터를 다시 로드하는 함수
    const reloadCategories = () => {
        dispatch(AdminCategoryAPICalls());
    };

    useEffect(() => {
        if (success) {
            navigate('/admin/dashboard/category');
        }
    }, [success, navigate]);

    const handleSaveCategory = () => {
        let newCategory = {};
        if (selectedParentCategory) {
            newCategory = {
                categoryTitle: categoryTitle,
                refCategoryCode: selectedParentCategory.categoryCode,
                type: 'application/json'
            };
        } else {
            newCategory = {
                categoryTitle: categoryTitle,
                refCategoryCode: null,
                type: 'application/json'
            };
        }

        dispatch(callAdminCategoryRegistAPI({ registRequest: newCategory }));
        setCategoryTitle('');
        setSelectedParentCategory(null);
        setSelectedChildCategory(null);

        // 카테고리 저장 후 데이터 다시 로드
        reloadCategories();
    };

    const handleDeleteCategory = (category) => {
        if (window.confirm(`${category.categoryTitle} 카테고리를 삭제하시겠습니까?`)) {
            dispatch(callAdminCategoryDeleteAPI({ categoryCode: category.categoryCode }));

            // 카테고리 삭제 후 데이터 다시 로드
            reloadCategories();
        }
    };

    const handleParentCategorySelect = (parentCategory) => {
        setSelectedParentCategory(parentCategory === '선택안함' ? null : parentCategory);
    };

    const handleChildCategorySelect = (childCategory) => {
        setSelectedChildCategory(childCategory);
        setSelectedParentCategory(adminCategory.find(category => category.categoryCode === childCategory.refCategoryCode));
    };

    const handleEditCategory = (category) => {
        setEditingCategory(category);
        setCategoryTitle(category.categoryTitle);
        setSelectedParentCategory(category.refCategoryCode ? adminCategory.find(cat => cat.categoryCode === category.refCategoryCode) : null);
    };

    const handleEditChange = (e) => {
        setCategoryTitle(e.target.value);
    };

    const handleEditSubmit = () => {
        const modifiedCategory = {
            categoryTitle: categoryTitle,
            refCategoryCode: selectedParentCategory ? selectedParentCategory.categoryCode : null,
            type: 'application/json'
        };
        dispatch(callAdminCategoryModifyAPI({ categoryCode: editingCategory.categoryCode, modifyRequest: modifiedCategory }));
        setEditingCategory(null);
        setCategoryTitle('');
        setSelectedParentCategory(null);

        // 수정 후 데이터 다시 로드
        reloadCategories();
    };

    const handleDragStart = (category) => {
        setDraggedCategory(category);
    };

    const handleDrop = (targetCategory) => {
        if (draggedCategory && targetCategory.categoryCode !== draggedCategory.categoryCode) {
            const modifiedCategory = {
                categoryTitle: draggedCategory.categoryTitle,
                refCategoryCode: targetCategory.categoryCode,
                type: 'application/json'
            };
            dispatch(callAdminCategoryModifyAPI({ categoryCode: draggedCategory.categoryCode, modifyRequest: modifiedCategory }));
            setDraggedCategory(null);

            // 드래그 후 데이터 다시 로드
            reloadCategories();
        }
    };

    const parentCategories = adminCategory.filter(category => category.refCategoryCode === null);
    const childCategories = adminCategory.filter(category => category.refCategoryCode !== null);

    return (
        <Container>
            <Row>
                <Col className="mt-5">
                    <Col xs lg="9" style={{ fontSize: '24px', fontWeight: 'bold', borderBottom: '2px solid #343a40', padding: '10px' }}>카테고리 관리</Col>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={4}>
                    {loading ? (
                        <div>Loading...</div>
                    ) : error ? (
                        <div>Error: {error}</div>
                    ) : (
                        <ListGroup>
                            {parentCategories.map((parent, index) => (
                                <ListGroup.Item
                                    key={index}
                                    onDoubleClick={() => handleEditCategory(parent)}
                                >
                                    <Row>
                                        <Col>
                                            {editingCategory && editingCategory.categoryCode === parent.categoryCode ? (
                                                <Form.Control
                                                    type="text"
                                                    value={categoryTitle}
                                                    onChange={handleEditChange}
                                                    onBlur={handleEditSubmit}
                                                    autoFocus
                                                />
                                            ) : (
                                                <strong>{parent.categoryTitle}</strong>
                                            )}
                                        </Col>
                                        <Col xs="auto">
                                            <Button variant="danger" size="sm" onClick={() => handleDeleteCategory(parent)}>삭제</Button>
                                        </Col>
                                    </Row>
                                    <ListGroup className="mt-2">
                                        {childCategories
                                            .filter(child => child.refCategoryCode === parent.categoryCode)
                                            .map((sub, subIndex) => (
                                                <ListGroup.Item
                                                    key={subIndex}
                                                    onDoubleClick={() => handleEditCategory(sub)}
                                                    draggable
                                                    onDragStart={() => handleDragStart(sub)}
                                                    onDragOver={(e) => e.preventDefault()}
                                                    onDrop={() => handleDrop(parent)}
                                                >
                                                    <Row>
                                                        <Col>
                                                            {editingCategory && editingCategory.categoryCode === sub.categoryCode ? (
                                                                <Form.Control
                                                                    type="text"
                                                                    value={categoryTitle}
                                                                    onChange={handleEditChange}
                                                                    onBlur={handleEditSubmit}
                                                                    autoFocus
                                                                />
                                                            ) : (
                                                                sub.categoryTitle
                                                            )}
                                                        </Col>
                                                        <Col xs="auto">
                                                            <Button variant="danger" size="sm" onClick={() => handleDeleteCategory(sub)}>x</Button>
                                                        </Col>
                                                    </Row>
                                                </ListGroup.Item>
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
                                placeholder="카테고리 명"
                                value={categoryTitle}
                                onChange={(e) => setCategoryTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formParentCategory" className="mt-3">
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
                                            onClick={() => handleParentCategorySelect(category)}
                                        >
                                            {category.categoryTitle}
                                        </Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Form.Group>
                        <Button variant="primary" className="mt-3" onClick={handleSaveCategory}>저장</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default AdminCategory;
