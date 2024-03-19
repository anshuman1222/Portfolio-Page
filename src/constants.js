import {
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    Complaint,
    Project1,
    C,
} from "./assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
      id:"skills",
      title:"Skills",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
   
];



const technologies = [
    {
        name:"C++",
        icon: C,
    },
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
  
    {
        name: "React JS",
        icon: reactjs,
    },
   
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
   
   
 
  
];





const projects = [
    {
        name: "Complaint Forum",
        description:
            "It displays users complaints and help them to register their complaint in most easy way but efficiently.",
        tags: [
            {
                name: "HTML5",
                color: "blue-text-gradient",
            },
            {
                name: "CSS3",
                color: "green-text-gradient",
            },
            {
                name: "JavaScript",
                color: "pink-text-gradient",
            },
        ],
        image: Complaint,
        source_code_link: "https://devfolio.co/projects/complaint-forum-e67f",
        project_link:"https://devfolio.co/projects/complaint-forum-e67f",
    },
    {
        name: "Expense Tracker",
        description:
            "It is a dynamic web application that allows users to track and manage their own expenses.",
        tags: [
            {
                name: "MERN",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            
        ],
        image: Project1,
        source_code_link: "https://github.com/anshuman1222/project-expense-tracker",
        project_link: "https://amazing-frangollo-f80acf.netlify.app/",
    },
    
    
];



export { technologies, projects};