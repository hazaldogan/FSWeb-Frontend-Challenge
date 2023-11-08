import { useContext } from "react";
import { SiteGlobalContext } from "../contexts/SiteGlobalProvider";
import { footerData } from "../api/data";

function Footer({ email }) {
  const { lang, theme } = useContext(SiteGlobalContext);

  return (
    <div className="footer dark:bg-zinc-800">
      <h2 className="dark:text-violet-400">
        {lang === "tr" ? footerData.sendme.tr : footerData.sendme.en}
      </h2>
      <p className="dark:text-white">
        {lang === "tr" ? footerData.description.tr : footerData.description.en}
      </p>
      <a href="#">
        <p className="email dark:text-violet-400">{email}</p>
      </a>
      <div className="social-media-area">
        {theme === "dark"
          ? footerData.social_dark.map((e, i) => (
              <a key={i} href="#">
                <img src={e} />
              </a>
            ))
          : footerData.social.map((e, i) => (
              <a key={i} href="#">
                <img src={e} />
              </a>
            ))}
      </div>
    </div>
  );
}

export default Footer;
