import React, { useState, useRef, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import TextEditor from '../../components/items/TextEditor';
import { AdminNoticeCreateAPICalls } from '../../apis/AdminNoticeAPICalls'; // Ensure this is the correct import
import { useDispatch } from 'react-redux';

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
        // Dispatch the action to create the notice, assuming createNotice is an action
        dispatch(AdminNoticeCreateAPICalls({noticeCreateRequest : form})); // Make sure this matches your action creator
    };

    return (
        <Container className="mt-5">
            <h2>공지사항 작성</h2>
            <Button variant="primary" onClick={handleSubmit}>
                작성 완료
            </Button>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formTitle">
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
