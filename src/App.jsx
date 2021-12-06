import { useState } from "react";
import { List } from "./List";
import { Form } from "./Form";
import { LANGUAGES } from "./Languages";
// import "./styles.css";
// import { Form } from "./Form";
// import { List } from "./List";
// import { useState } from "react";

// import { Languages } from "./Language";

function App() {
  const [tab, setTab] = useState("list");
  const [langs, setLangs] = useState(LANGUAGES);

  const addLang = (lang) => {
    // 追加
    console.log(lang);
    setLangs([...langs, lang]);
  };
  // function App() {
  //   const [tab, setTab] = useState("list");
  //   const [langs, setLangs] = useState("Languages");
  //   const addLang = (lang) => {
  //     console.log(lang);
  //     setLangs([...langs, lang]);
  //   };

  return (
    <div>
      <header>
        <ul>
          <li onClick={() => setTab("list")}>リスト</li>
          <li onClick={() => setTab("form")}>フォーム</li>
        </ul>
      </header>
      <hr />
      {
        tab === "list" ? <List /> : <Form onAddLang={addLang} /> // 変更
      }
    </div>
  );
  //   return (
  //     <div>
  //       <header>
  //         <ul>
  //           <li onClick={() => setTab("list")}>リスト</li>
  //           <li onClick={() => setTab("Form")}>フォーム</li>
  //         </ul>
  //       </header>
  //       <hr />
  //       {tab === "list" ? <List /> : <Form onAddlang={addLang} />}
  //     </div>
  //   );
  // }

  // export default App;
}
export default App;
