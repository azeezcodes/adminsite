"use client";
import "@wangeditor/editor/dist/css/style.css"; 
import React, { useState, useEffect } from "react";
import { i18nChangeLanguage } from "@wangeditor/editor";
import { Editor, Toolbar } from "@wangeditor/editor-for-react";
import { IDomEditor, IEditorConfig, IToolbarConfig } from "@wangeditor/editor";

i18nChangeLanguage("en");

type Props = {};

const Editorpage = (props: Props) => {
   const [editor, setEditor] = useState<IDomEditor | null>(null);
   const [html, setHtml] = useState(" ");
   const toolbarConfig: Partial<IToolbarConfig> = {
   
   };
   const editorConfig: Partial<IEditorConfig> = {
      placeholder: "Type here...",
   
   };
     


    
   return (
      <div>
         <div className="w-full h-full">
            <Toolbar
               editor={editor}
               defaultConfig={toolbarConfig}
               mode="simple"
               style={{ borderBottom: "1px solid #ccc" }}
            />
            <Editor
               defaultConfig={editorConfig}
               value={html}
               onCreated={setEditor}
               onChange={(editor) => setHtml(editor.getHtml())}
               mode="default"
               style={{ height: "500px", overflowY: "hidden" }}
            />
         </div>
         
      </div>
   );
};

export default Editorpage;
