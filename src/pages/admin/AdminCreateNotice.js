import React, { useState, useRef, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import TextEditor from '../../components/items/TextEditor';
import { AdminNoticeCreateAPICalls } from '../../apis/AdminNoticeAPICalls';
import { useDispatch } from 'react-redux';
import '../../style.css'; // 스타일 시트 임포트

const AdminCreateNotice = () => {
    const dispatch = useDispatch();
    const editorRef = useRef(null);
    const [form, setForm] = useState({
        noticeTitle: "",
        noticeContent: ""
    });

    const handleNoticeTitleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    };

    const handleNoticeContentChange = (content) => {
        setForm({
            ...form,
            noticeContent: content
        });
    };

    useEffect(() => {
        if (editorRef.current) {
            const editor = editorRef.current;
            const updateContent = () => {
                const content = editor.getContent(); // Assuming getContent is a method provided by TextEditor
                setForm((prevForm) => ({
                    ...prevForm,
                    noticeContent: content
                }));
            };

            editor.on('change', updateContent); // Add listener for change event

            return () => {
                editor.off('change', updateContent); // Cleanup listener on unmount
            };
        }
    }, [editorRef]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(form);
        // Dispatch the action to create the notice
        dispatch(AdminNoticeCreateAPICalls({ noticeCreateRequest: form }));
    };

    return (
        <Container fluid className="create-notice-container mt-4 px-4"> {/* 수정된 클래스명 */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="create-notice-title">공지사항 작성</h2>
                <Button variant="success" onClick={handleSubmit}>작성 완료</Button>
            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formTitle" className="mb-4">
                    <Form.Label>제목</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="제목을 입력하세요"
                        name="noticeTitle"
                        value={form.noticeTitle}
                        onChange={handleNoticeTitleChange}
                    />
                </Form.Group>
                <Form.Group controlId="formContent">
                    <Form.Label>내용</Form.Label>
                    <TextEditor
                        value={form.noticeContent}
                        id="noticeContent"
                        onTextChange={handleNoticeContentChange}
                        ref={editorRef}
                    />
                </Form.Group>
            </Form>
        </Container>
    );
};

export default AdminCreateNotice;
