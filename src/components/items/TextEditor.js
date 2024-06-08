import React, { useEffect, useLayoutEffect, useRef } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { formats, modules } from './TextEditorModules';

const TextEditor = React.forwardRef(({ defaultValue, onTextChange, onSelectionChange, name }, ref) => {
    const containerRef = useRef(null);
    const defaultValueRef = useRef(defaultValue);
    const onTextChangeRef = useRef(onTextChange);
    const onSelectionChangeRef = useRef(onSelectionChange);

    useLayoutEffect(() => {
        onTextChangeRef.current = onTextChange;
        onSelectionChangeRef.current = onSelectionChange;
    });

    useEffect(() => {
        const container = containerRef.current;
        const editorContainer = container.appendChild(
            container.ownerDocument.createElement('div')
        );
        const quill = new Quill(editorContainer, {
            theme: 'snow',
            modules,
            formats
        });

        ref.current = quill;

        if (defaultValueRef.current) {
            quill.setContents(defaultValueRef.current);
        }

        quill.on(Quill.events.TEXT_CHANGE, (...args) => {
            onTextChangeRef.current?.(...args);
        });

        quill.on(Quill.events.SELECTION_CHANGE, (...args) => {
            onSelectionChangeRef.current?.(...args);
        });

        return () => {
            ref.current = null;
            container.innerHTML = '';
        };
    }, [ref]);

    return <div className="text-editor-div" ref={containerRef}></div>;
});

export default TextEditor;
