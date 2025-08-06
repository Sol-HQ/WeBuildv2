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
//update august 5
const benefitTwo = {
  title: "The Windows of Life through Art & Soul",
  desc: "A highlighted section of Space, Carving Art's",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Windows Gallery",
      desc: "Accepting Artwork for Potential's",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Custom Works, Wall Pieces/Desktop, Coming Soon:",
      desc: "Building In Art, with Art, & Custom Digital Innovations",
      icon: <AdjustmentsHorizontalIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};




