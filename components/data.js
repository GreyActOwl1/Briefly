import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Capture and Organize",
  desc: "Effortlessly capture and organize your notes and voice recordings with Briefly. Our platform is designed to help you manage information seamlessly, ensuring that nothing important slips through the cracks.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Capture Instantly",
      desc: "Quickly record notes and voice memos on the go.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Organize Effectively",
      desc: "Easily categorize and annotate recordings for easy retrieval.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Search and Retrieve",
      desc: "Find your notes and recordings quickly with powerful search functionality.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Collaborate and Analyze",
  desc: "Enhance your team's communication and gain deeper insights from your conversations. Briefly's collaborative features and analysis tools make it easy to share, edit, and understand key information.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Automatic Summaries",
      desc: "Get concise summaries of key points from your recordings.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Keyword Highlights",
      desc: "Automatically identify and highlight important keywords and phrases.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Share Effortlessly",
      desc: "Share notes and summaries with your team to keep everyone on the same page.",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
