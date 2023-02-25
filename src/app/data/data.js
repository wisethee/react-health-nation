import Heart from "../core/three/heart/heart";
import Cell from "../core/three/cell/cell";
import Brain from "../core/three/brain/brain";

export const DATA = [
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
      "Heart disease is the second most costly disease with costs relating to heart and circulatory disease coming to around 9 billion per year. Over 5 million people are living with heart or circulatory disease; around 500 will die from a heart or circulatory disorder every day and over 100 of these will be under 75.",
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
          "Heart Beat Buddies helps and supports people who have had cardiac arrests and strokes as they take steps back towards an active life. The charity pairs up people with a volunteer in a buddy scheme where the trained volunteer can provide support and advice on safe steps to become more active. People are shown how they can use heart health monitoring apps to track their progress.",
        startVal: "£64,000",
        endVal: "£99,000",
      },
      {
        id: 7,
        title: "Heart Nation",
        description:
          "Heart Nation funds research into the use of new technologies in diagnosis and treatment of cardiac disease. For example, the use of AI in interpreting heart scans to promote early diagnosis and timely treatment of patients at risk of heart failure. The charity also funds research into the use of injectable heart monitors to see if having this continuous imformation on heart rhythm can provide insights as to how to intervene before a person’s health deteriorates to the point where they have a serious cardiac event.",
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
      "The cost to the nation’s health service of Alzheimer disease and other dementias is around 2 billion but when you add in the cost of social care the total cost reaches a staggering 35 billion. This is predicted to increase over the next decade as people live longer. A large proportion of the costs of caring for someone with Dementia are borne by the person themselves or their family.",
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
          "Memory Minders provides people with Dementia and their families devices and access to assistive technologies that can help with some of the problems encountered in living with dementia (or caring for a loved one with Dementia). Technologies that can benefit are Apps for medication reminders, GPS tracking apps and voice activated assistants. The charity provides the necessary devices and assistance in setting up and using them.",
        startVal: "£64,000",
        endVal: "£99,000",
      },
      {
        id: 9,
        title: "Dementia-Assist",
        description:
          "Dementia Assist funds research into the use of assistive technologies to improve the lives of people with Dementia. An exciting project that the charity currently funds is research into the use of augmented reality headsets where a carer can display customised reminder messages via a website. It is hoped that use of this technology could not only increase the independence of the person living with Dementia but also improve the life of their carers as well.",
        startVal: "£24,000",
        endVal: "£99,000",
      },
    ],
  },
];
