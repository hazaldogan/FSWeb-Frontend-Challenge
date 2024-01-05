import { useContext } from "react";
import { SiteGlobalContext } from "../contexts/SiteGlobalProvider";
import { headerData } from "../api/data";
import { DarkModeSwitch } from "react-toggle-dark-mode";

function Header({ userName }) {
  const { theme, toggleDarkMode, lang, setLang } =
    useContext(SiteGlobalContext);

  const changeLang = () => {
    lang === "tr" ? setLang("en") : setLang("tr");
  };
  return (
    <div className="first-area dark:bg-indigo-950">
      <div className="header">
        <h3>{userName}</h3>
        <div className="choose-area">
          <div className="lang-area" onClick={changeLang}>
            {lang === "tr" ? "Switch To English" : "Türkçeye Geç"}
          </div>
          <div className="toggle-area">
            <DarkModeSwitch
              style={{ marginBottom: "2rem" }}
              checked={theme === "dark" ? true : false}
              onChange={toggleDarkMode}
              size={30}
            />
          </div>
        </div>
      </div>
      <div className="first-main-area">
        <div className="left-area">
          <div className="first-title-area">
            <h2>{lang === "tr" ? headerData.title.tr : headerData.title.en}</h2>
          </div>
          <div className="first-desc-area">
            <p>
              {lang === "tr"
                ? headerData.description.tr
                : headerData.description.en}
            </p>
          </div>
          <div className="button-area">
            <a href="https://github.com/hazaldogan">
              <img
                src={
                  theme === "light" ? headerData.github : headerData.githubDark
                }
              />
            </a>
            <a href="https://linkedin.com/in/hazaldogan">
              <img
                src={
                  theme === "light"
                    ? headerData.linkedIn
                    : headerData.linkedInDark
                }
              />
            </a>
          </div>
        </div>
        <div className="profile-image">
          <img src={headerData.image} />
        </div>
      </div>
    </div>
  );
}
export default Header;
