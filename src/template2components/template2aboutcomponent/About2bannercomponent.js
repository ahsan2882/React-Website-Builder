import React, { useRef } from 'react'
import About2Css from './About2banner.module.css'
import Img1 from '../template2aboutcomponent/about-us-banner.jpg'
import { Editor } from '@tinymce/tinymce-react';
export default function About2bannercomponent() {
    const editorRef = useRef(null);
    return (
        <section className={About2Css['header-img-serv']}>
                <div className={About2Css['head-img-text']}>
                <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            inline={true}
                            key='About1'
                            initialValue="About Us"
                            init={{
                                forced_root_block: "",
                                menubar: false,
                                toolbar: 'bold italic underline | fontsizeselect | backcolor forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | fontselect',
                                fontsize_formats: "8px 9px 10px 11px 12px 14px 16px 18px 20px 24px 30px 36px 48px 60px 72px 96px",
                                font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats"
                            }}
                        />
                    <div className={About2Css.dash}></div>
                </div>
                <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    inline={true}
                    key='About2'
                    initialValue={`<img src=${Img1} alt="about-banner" />`}
                    init={
                        {
                            images_upload_handler: function (blobInfo, success, failure) {
                                success("data:" + blobInfo.blob().type + ";base64," + blobInfo.base64());
                            },
                            images_upload_url: '/upload-images',

                            forced_root_block: "",
                            menubar: false,
                            plugins: [
                                "image"
                            ],
                            toolbar: 'image'
                        }}
                />
            </section>
           
    )
} 

