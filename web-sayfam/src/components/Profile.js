import { useContext } from "react";
import { SiteGlobalContext } from "../contexts/SiteGlobalProvider";
import { profileData } from "../api/data";

function Profile() {
  const { lang } = useContext(SiteGlobalContext);
  return (
    <div className="profile-area dark:bg-indigo-950">
      <h2>{lang === "tr" ? profileData.header.tr : profileData.header.en}</h2>
      <div className="profile-main-area">
        <div className="profile-info-area">
          <h4>
            {lang === "tr"
              ? profileData.firstHeader.tr
              : profileData.firstHeader.en}
          </h4>
          <div className="profile-info">
            <h6>
              {lang === "tr"
                ? profileData.personal.birthdate.tr
                : profileData.personal.birthdate.en}
            </h6>
            <p>24.03.1996</p>
          </div>
          <div className="profile-info">
            <h6>
              {lang === "tr"
                ? profileData.personal.location.tr
                : profileData.personal.location.en}
            </h6>
            <p>Ankara</p>
          </div>
          <div className="profile-info">
            <h6>
              {lang === "tr"
                ? profileData.personal.education.tr
                : profileData.personal.education.en}
            </h6>
            <p>Hacettepe Ünv.Biyoloji Lisans, 2016</p>
          </div>
          <div className="profile-info">
            <h6>
              {lang === "tr"
                ? profileData.personal.role.tr
                : profileData.personal.role.en}
            </h6>
            <p>Frontend, UI</p>
          </div>
        </div>
        <div className="middle-area">
          <img src={profileData.image} />
        </div>
        <div className="about-area">
          <h4>
            {lang === "tr"
              ? profileData.lastHeader.tr
              : profileData.lastHeader.en}
          </h4>
          <p>{profileData.description1}</p>
          <p>{profileData.description2}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
