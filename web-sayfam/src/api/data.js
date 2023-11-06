import github from "../images/button/GithubButton.png";
import linkedIn from "../images/button/LinkedinButton.png";
import githubDark from "../images/button/GithubButtonDark.png";
import linkedInDark from "../images/button/LinkedinButtonDark.png";
import firstimage from "../images/header.png";
import jsimg from "../images/skills/js.png";
import reactimg from "../images/skills/react.svg";
import reduximg from "../images/skills/redux.png";
import nodeimg from "../images/skills/node.svg";
import vscodeimg from "../images/skills/vscode.png";
import figmaimg from "../images/skills/figma.svg";

export const headerData = {
  title: {
    en: "I am a Frontend Developer...",
    tr: "Ben Frontend Developerım",
  },
  description: {
    en: "...who likes to craft solid and scalable frontend products with great user experiences.",
    tr: "Harika kullanıcı deneyimlerine sahip sağlam ve ölçeklenebilir ön uç ürünleri oluşturmayı seven biriyim.",
  },
  github,
  linkedIn,
  githubDark,
  linkedInDark,
  image: firstimage,
};

export const skillsData = [
  {
    image: jsimg,
    text: "JAVASCRIPT",
  },
  {
    image: nodeimg,
    text: "NODE",
  },
  {
    image: reactimg,
    text: "REACT",
  },
  {
    image: vscodeimg,
    text: "VS CODE",
  },
  {
    image: reduximg,
    text: "REDUX",
  },
  {
    image: figmaimg,
    text: "FIGMA",
  },
];

export const profileData = {
  firstHeader: { en: "Basic Information", tr: "Temel Bilgiler" },
  personal: {},
  lastHeader: { en: "About Me", tr: "Hakkımda" },
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam! ",
  image: "../images/profile.png",
};

export const projectData = [
  {
    header: "Workintech",
    description: {
      en: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
      tr: "Kullanıcılarınızın hangi çerezleri kabul edeceğini veya reddedeceğini seçmesine olanak tanıyan basit, özelleştirilebilir, minimal kurulum çerez eklentisi. Bu, vanilya JS, SCSS ve Parcel Bundler ile oluşturulmuştur ve bir NPM paketi olarak mevcuttur ve git deposu, kod ve temalarda her türlü özelleştirmeyi mümkün kılar.",
    },
    buttons: ["react", "redux", "vercel"],
    links: [
      { en: "View Site", tr: "İncele" },
      { en: "GitHub", tr: "GitHub" },
    ],
    image: "../images/project/project1.png",
  },
  {
    header: "Journey",
    description: {
      en: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
      tr: "Kullanıcılarınızın hangi çerezleri kabul edeceğini veya reddedeceğini seçmesine olanak tanıyan basit, özelleştirilebilir, minimal kurulum çerez eklentisi. Bu, vanilya JS, SCSS ve Parcel Bundler ile oluşturulmuştur ve bir NPM paketi olarak mevcuttur ve git deposu, kod ve temalarda her türlü özelleştirmeyi mümkün kılar.",
    },
    buttons: ["react", "redux", "vercel"],
    links: [
      { en: "View Site", tr: "İncele" },
      { en: "GitHub", tr: "GitHub" },
    ],
    image: "../images/project/project2.png",
  },
];

export const footerData = {
  sendme: { en: "Send me a message!", tr: "Bana Ulaşın!" },
  description: {
    en: "Got a question or proposal, or just want to say hello? Go ahead.",
    tr: "Bir sorunuz veya öneriniz mi var, yoksa sadece merhaba mı demek istiyorsunuz? İlerleyin.",
  },
  social: [
    "../images/socialmedia/twitter.svg",
    "../images/socialmedia/codepen.svg",
    "../images/socialmedia/at-sign.svg",
    "../images/socialmedia/instagram.svg",
  ],
};
