import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import FontFaceObserver from "fontfaceobserver";

import "normalize.css";
import "./common.css";

const font = new FontFaceObserver("Noto Sans JP");

font
  .load()
  .then(() => {
    const container = document.getElementById("root");
    const root = createRoot(container); // createRoot(container!) if you use TypeScript
    root.render(<App />);
  })
  .catch(() => {
    console.error("Noto Sans JP font could not be loaded");
    // フォントが読み込めなかった場合でもアプリをレンダリングするか、
    // またはエラーメッセージを表示するなどの代替処理をここに記述できます。
    // 以下はフォント読み込み失敗時にもアプリをレンダリングする例です。
    const container = document.getElementById("root");
    const root = createRoot(container);
    root.render(<App />);
  });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
