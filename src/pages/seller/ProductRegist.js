import ReactQuill, {Quill} from 'react-quill';
import TextEditor from "./TextEditor";
import React, { useRef, useState } from 'react';
import {Form} from "react-bootstrap";

const Delta = Quill.import('delta');

function ProductRegist() {

    const [range, setRange] = useState();
    const [lastChange, setLastChange] = useState();

    const quillRef = useRef();

    return (
        <div>

            <Form>
                <Form.Group controlId="productName">
                    <Form.Label>상품명</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>

                <Form.Group controlId="productStatus">
                    <Form.Label>판매 상태</Form.Label>
                    <Form.Select>
                        <option value="true">판매중</option>
                        <option value="false">구매불가</option>
                    </Form.Select>
                </Form.Group>
            </Form>

            <TextEditor
                ref={quillRef}
                defaultValue={new Delta()
                    .insert('상품 상세설명')
                    .insert('\n', {header: 1})
                    .insert('Some ')
                    .insert('initial', {bold: true})
                    .insert(' ')
                    .insert('content', {underline: true})
                    .insert('\n')}
                onSelectionChange={setRange}
                onTextChange={setLastChange}
            />

            <button className="submit-btn">상품 등록</button>

        </div>
    )
}

export default ProductRegist;