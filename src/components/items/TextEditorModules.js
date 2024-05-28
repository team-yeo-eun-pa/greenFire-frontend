const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
        const file = input.files[0];
        const formData = new FormData();
        formData.append('image', file);

        // 이미지 업로드 API를 호출하여 이미지를 업로드하고 URL을 받아옵니다.
        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        const imageUrl = data.url;

        const quill = this.quill;
        const range = quill.getSelection();
        quill.insertEmbed(range.index, 'image', imageUrl);
    };
};

export const modules = {
    toolbar: {
        container: [
            [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['bold', 'italic', 'underline'],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],
            ['link', 'image'],
        ],
        handlers: {
            image: imageHandler
        }
    }
};

export const formats = [
    'header', 'font', 'list', 'bullet', 'bold', 'italic', 'underline',
    'color', 'background', 'align', 'link', 'image'
];
