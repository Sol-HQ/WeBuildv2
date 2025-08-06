import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Light Work",
  desc: "Space Pursuades Contemplation & Reflection, Sounds on the first light, and that of the latter...", 
  image: benefitOneImg,
  bullets: [
    {
      title: "Art, Music, Culture, History, The Matters of Reality.",
      desc: "Fields of Opportunity!",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Perspective's with...x.y.z.",
      desc: "Progression and Innovation on a.b.c.",
      icon: <ChartBarSquareIcon />,
    },
  ],
};
//update august 5
const benefitTwo = {
  title: "Windows of Life, Art, & Soul",
  desc: "A highlighted section of Space, The Carving Art's",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Windows Gallery",
      desc: "Accepting Artwork's for Show & Upcoming Gallery Page",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Custom Art Works, Wall Pieces/Desktop, Digitals, & Physicals, Coming Soon:",
      desc: "Building In Art, with Art, & Custom Digital Innovations",
      icon: <AdjustmentsHorizontalIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};







