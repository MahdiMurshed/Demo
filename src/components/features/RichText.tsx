import React, { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./styles.css";
import DOMPurify from "dompurify";
import { Divider } from "@mui/material";
const RichText = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [convertedContent, setConvertedContent] = useState("");
  const handleEditorChange = (state: any) => {
    setEditorState(state);
    convertContentToHTML();
  };
  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  };
  const createMarkup = (html: any) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };

  //function to save image in firebase storage
  function uploadImageCallBack(file: any) {
    return new Promise((resolve, reject) => {
      // const xhr = new XMLHttpRequest();
      // xhr.open("POST", "https://api.imgur.com/3/image");
      // xhr.setRequestHeader("Authorization", "Client-ID 15c0ae589769379");
      // const data = new FormData();
      // data.append("image", file);
      // xhr.send(data);
      // xhr.addEventListener("load", () => {
      //   const response = JSON.parse(xhr.responseText);
      //   resolve(response);
      // });
      // xhr.addEventListener("error", () => {
      //   const error = JSON.parse(xhr.responseText);
      //   reject(error);
      // });
    });
  }
  return (
    <>
      <div>
        <Editor
          editorState={editorState}
          onEditorStateChange={handleEditorChange}
          toolbar={{
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
            image: {
              uploadCallback: uploadImageCallBack,
              alt: { present: false, mandatory: false },
            },
          }}
        />
      </div>
      <Divider />
      {/* for testing  */}
      <div
        className="preview"
        dangerouslySetInnerHTML={createMarkup(convertedContent)}
      ></div>
    </>
  );
};
export default RichText;
