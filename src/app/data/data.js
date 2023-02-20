import Heart from "../core/three/heart/heart";
import Cell from "../core/three/cell/cell";
import Brain from "../core/three/brain/brain";

export const DATA = [
  {
    id: 1,
    title: "Charity Cause 1",
    obj: <Cell position={[-0, -0, 0]} rotation={[-0.3, -1, -0.15]} />,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis lectus nec erat fringilla dignissim. Maecenas sed mauris quis enim lobortis tincidunt vitae vitae est.",
    order: "md:order-first",
    btnColor: "tertiary",
    headingSize: "h1",
    sectionHeight: "hero",
    bgClass: "charity1-bg",
    info: [
      {
        id: 4,
        title: "Charity 1",
        description:
          "Lorem ipsum dolor sit amet consectetur. Non morbi vel semper nec. Consectetur eget elit tincidunt quam consequat parturient. Dictumst lorem nullam viverra at nulla phasellus.",
        startVal: "£64,000",
        endVal: "£99,000",
      },
      {
        id: 5,
        title: "Charity 2",
        description:
          "Lorem ipsum dolor sit amet consectetur. Non morbi vel semper nec. Consectetur eget elit tincidunt quam consequat parturient. Dictumst lorem nullam viverra at nulla phasellus.",
        startVal: "£24,000",
        endVal: "£99,000",
      },
    ],
  },
  {
    id: 2,
    title: "Charity Cause 2",
    obj: <Heart position={[-0.6, -0.4, 0]} rotation={[-0.1, 0.1, -0.15]} />,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis lectus nec erat fringilla dignissim. Maecenas sed mauris quis enim lobortis tincidunt vitae vitae est.",
    order: "order-last",
    btnColor: "secondary",
    headingSize: "h2",
    sectionHeight: "h-full",
    bgClass: "charity2-bg",
    info: [
      {
        id: 6,
        title: "Charity 3",
        description:
          "Lorem ipsum dolor sit amet consectetur. Non morbi vel semper nec. Consectetur eget elit tincidunt quam consequat parturient. Dictumst lorem nullam viverra at nulla phasellus.",
        startVal: "£64,000",
        endVal: "£99,000",
      },
      {
        id: 7,
        title: "Charity 4",
        description:
          "Lorem ipsum dolor sit amet consectetur. Non morbi vel semper nec. Consectetur eget elit tincidunt quam consequat parturient. Dictumst lorem nullam viverra at nulla phasellus.",
        startVal: "£24,000",
        endVal: "£99,000",
      },
    ],
  },
  {
    id: 3,
    title: "Charity Cause 3",
    obj: <Brain position={[0, -0.5, 0]} rotation={[-0.6, -0.3, -0.9]} />,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis lectus nec erat fringilla dignissim. Maecenas sed mauris quis enim lobortis tincidunt vitae vitae est.",
    order: "md:order-first",
    btnColor: "tertiary",
    headingSize: "h2",
    sectionHeight: "h-full",
    bgClass: "charity3-bg",
    info: [
      {
        id: 8,
        title: "Charity 5",
        description:
          "Lorem ipsum dolor sit amet consectetur. Non morbi vel semper nec. Consectetur eget elit tincidunt quam consequat parturient. Dictumst lorem nullam viverra at nulla phasellus.",
        startVal: "£64,000",
        endVal: "£99,000",
      },
      {
        id: 9,
        title: "Charity 6",
        description:
          "Lorem ipsum dolor sit amet consectetur. Non morbi vel semper nec. Consectetur eget elit tincidunt quam consequat parturient. Dictumst lorem nullam viverra at nulla phasellus.",
        startVal: "£24,000",
        endVal: "£99,000",
      },
    ],
  },
];
