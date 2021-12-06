import { LANGUAGES } from "./Languages";

export const List = () => {
  return (
    <div>
      {LANGUAGES.map((lang, index) => {
        return <div key={index}>{lang}</div>;
      })}
    </div>
  );
};
