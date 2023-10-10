import "./styles.css";
import React, { useState } from "react";
import Field from "./component/field";
import Translate from "./component/translate";
import Languages from "./component/languages";

export default function App() {
  const [language, setLanguage] = useState("es");
  const [text, setText] = useState("");

  return (
    <div>
      <Field onChange={setText} />
      <Languages language={language} onLanguageChange={setLanguage} />
      <hr />
      <Translate text={text} language={language} />
    </div>
  );
}
