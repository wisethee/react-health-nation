import Heart from "../core/three/heart/heart";
import Cell from "../core/three/cell/cell";
import Brain from "../core/three/brain/brain";

export const DATA = [
  {
    title: "causes",
    items: [
      {
        id: 1,
        title: "Diabetes",
        obj: <Cell position={[-0, -0, 0]} rotation={[-0.3, -1, -0.15]} />,
        description:
          "Diabetes is the costliest disease for our nation's health budget, costing over 10 billion per year. There are two main types of diabetes, Type 1 where a person’s body cannot make insulin and Type 2 where the insulin made in not able to act effectively or not enough insulin gets made. Around 5 million people are living with diabetes 90% of whom have Type 2 diabetes, it's estimated another 1 million may be living with Type 2 diabetes but are undiagnosed.  The result of both Type1 and Type 2 diabetes is that the body cells cannot take up sugar so too much is left in the blood. If left uncontrolled high blood sugar can lead to other health complications affecting a person’s heart, circulatory system, kidneys, eyes and nerves. Around 80% of the cost of diabetes is spent in treating the complications.",
        order: "md:order-first",
        btnColor: "tertiary",
        headingSize: "h1",
        sectionHeight: "hero",
        bgClass: "charity1-bg",
        info: [
          {
            id: 4,
            title: "Action Sugar Drop",
            description:
              "It’s long been thought that there is no cure for diabetes, only treatment to control it but recent research has shown that for Type 2 diabetes making lifestyle changes like diet and exercise can lead to a remission of the disease, at least in the early stages, and reduce the risk of development of complications. Action Sugar Drop provides online education and access to assistive technologies for people with diabetes or pre-diabetes who want to make lifestyle changes to improve their blood sugar control. Through provision of online personal trainer sessions and dietician consultations combined with gym memberships, recipe clubs and access to metabolic tracker apps people are helped to make lifestyle changes that have been proven to have beneficial effects in slowing or reversing the progression of type 2 diabetes.",
            startVal: "£64,000",
            endVal: "£99,000",
          },
          {
            id: 5,
            title: "Turn Back",
            description:
              "Type 1 diabetes is considered an ‘auto-immune’ disease usually diagnosed early in life. The body’s immune system attacks and destroys the body’s insulin producing pancreatic beta cells. There is no cure and currently the treatment is insulin. Turn Back funds basic research investigating genetic and anti-body screening techniques to identify those at risk, improve early diagnosis rates and work towards effective immuno-therapies that could be used before onset to prevent the disease or at an early stage to prevent progression. Ultimately the goal is to find a way to ‘turn back’ Type-1 diabetes by regenerating or replacing the destroyed beta cells which can then be protected with immuno-therapies.",
            startVal: "£24,000",
            endVal: "£99,000",
          },
        ],
      },
      {
        id: 2,
        title: "Heart Disease",
        obj: <Heart position={[-0.6, -0.4, 0]} rotation={[-0.3, 0.3, -0.6]} />,
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
            title: "Heart Beat Buddies",
            description:
              "Lorem ipsum dolor sit amet consectetur. Non morbi vel semper nec. Consectetur eget elit tincidunt quam consequat parturient. Dictumst lorem nullam viverra at nulla phasellus.",
            startVal: "£64,000",
            endVal: "£99,000",
          },
          {
            id: 7,
            title: "Heart Nation",
            description:
              "Lorem ipsum dolor sit amet consectetur. Non morbi vel semper nec. Consectetur eget elit tincidunt quam consequat parturient. Dictumst lorem nullam viverra at nulla phasellus.",
            startVal: "£24,000",
            endVal: "£99,000",
          },
        ],
      },
      {
        id: 3,
        title: "Dementia and Alzheimer disease",
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
            title: "Memory Minders",
            description:
              "Lorem ipsum dolor sit amet consectetur. Non morbi vel semper nec. Consectetur eget elit tincidunt quam consequat parturient. Dictumst lorem nullam viverra at nulla phasellus.",
            startVal: "£64,000",
            endVal: "£99,000",
          },
          {
            id: 9,
            title: "Dementia-Assist",
            description:
              "Lorem ipsum dolor sit amet consectetur. Non morbi vel semper nec. Consectetur eget elit tincidunt quam consequat parturient. Dictumst lorem nullam viverra at nulla phasellus.",
            startVal: "£24,000",
            endVal: "£99,000",
          },
        ],
      },
    ],
  },
];
