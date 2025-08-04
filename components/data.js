import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Lighten it Up",
  desc: "This Space pursuades reflections, the first light of the day, and that of the evening.", 
  image: benefitOneImg,
  bullets: [
    {
      title: "Art, Music, Culture, History, Matters of Reality.",
      desc: "Digitized Curation's!",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Perspectives...x.y.z.",
      desc: "Progression and Innovation, a.b.",
      icon: <ChartBarSquareIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Windows Collection",
  desc: "A highlighted platform with Orbit's, honouring Atmosphere's, and Architechture's, a Web3 test of Virtue, released on TRUFFLE!",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Windows MINT",
      desc: "Now Live on TRUFFLE!",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Custom Properties:",
      desc: "33 windows there were; and Space there was.",
      icon: <AdjustmentsHorizontalIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
