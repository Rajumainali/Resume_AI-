"use client";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function CustomEditor() {
  return (
    <CKEditor
      editor={ClassicEditor}
      data="<p>Hello from CKEditor!</p>"
      onChange={(event, editor) => {
        const data = editor.getData();
        console.log(data);
      }}
    />
  );
}
