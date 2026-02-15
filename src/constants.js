// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import androidstudioLogo from './assets/tech_logo/androidstudio.png';
import azureLogo from './assets/tech_logo/azure.png';
import dockerLogo from './assets/tech_logo/docker.png';
import securityLogo from './assets/tech_logo/security.png';
import networkLogo from './assets/tech_logo/network.png';
import windowsLogo from './assets/tech_logo/windows.png';
import linuxLogo from './assets/tech_logo/linux.png';
import kubernetesLogo from './assets/tech_logo/kubernetes.png';
import gcpLogo from './assets/tech_logo/gcp.png';
import microsoftofficeLogo from './assets/tech_logo/microsoftoffice.png';
import quicklearnerLogo from './assets/tech_logo/quicklearner.png';
import adaptabilityLogo from './assets/tech_logo/adaptability.png';
import apiLogo from './assets/tech_logo/api.png';

// Experience Section Logo's
import thoughtdataLogo from './assets/company_logo/thoughtdataLogo.jpg';
import microsoftlearnLogo from './assets/company_logo/microsoftlearnLogo.jpg';

// Education Section Logo's
import mitLogo from './assets/education_logo/mitLogo.png';
import educationLogo from './assets/education_logo/educationLogo.webp';

// Project Section Logo's
import lifeline_image from './assets/work_logo/lifeline_image.png';
import quadrides_image from './assets/work_logo/quadrides_image.png';


export const SkillsInfo = [
  {
    title: 'Programming',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },

    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'Microsoft Azure', logo: azureLogo },
      { name: 'GCP', logo: gcpLogo },
      { name: 'Docker', logo: dockerLogo },
      { name: 'Kubernetes', logo: kubernetesLogo },
       ],
  },
  
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'Android Studio', logo: androidstudioLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: 'Microsoft Office', logo: microsoftofficeLogo },

    ],
  },

  {
    title: 'Others',
    skills: [
      { name: 'Adaptability', logo: adaptabilityLogo },
      { name: 'Quick Learner', logo: quicklearnerLogo },
      { name: 'Rest Api', logo: apiLogo },
      { name: 'Cyber Security', logo: securityLogo },
      { name: 'Networking', logo: networkLogo },
      { name: 'Windows OS', logo: windowsLogo },
      { name: 'Linux OS', logo: linuxLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'Firebase', logo: firebaseLogo },

    ],
  },
  
  
];

  export const experiences = [
    {
      id: 0,
      img: thoughtdataLogo,
      role: "Software Development Intern",
      company: "ThoughtData",
      date: "October 2024 - April 2025",
      desc: "Led SD-WAN API integration improving data retrieval by 20% with jq automation (saving 10 weekly hours). Researched Web SSH console for secure website access. Implemented HPE/Cisco APIs (cut troubleshooting 30%, onboarding 25%), collaborated in Agile for 99.9% reliable solutions under tight deadlines.",
      skills: [
        "Rest API",
        "Postman",
        "Jq/Curl Automation",
        "Research",
        "Documentation",
        "Agile Methodology",
        "Team Collaboration",
        "Cisco SD-WAN",
        "HPE SD-WAN",
        "Troubleshooting",
      ],
    },
    {
      id: 1,
      img: microsoftlearnLogo,
      role: "Future Ready Talent Intern",
      company: "Microsoft Learn",
      date: "April 2024 - June 2024",
      desc: "Gained hands-on Azure AI, Cognitive Services, and Web Apps experience building scalable cloud solutions, including a capstone project solving real-world problems. Earned Microsoft certifications, boosting proficiency while enhancing problem-solving, collaboration, and presentation skills via mentorship.",
      skills: [
        "Azure Services",
        "Cloud",
        "Web Development",
        "AI chatbot"
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: mitLogo,
      school: "Maharashtra Institute of Technology, Aurangabad",
      date: "Dec 2021 - July 2025",
      grade: "7.36 CGPA",
      desc: "I have completed my Bachelors of Technology (B.Tech) in Electronics and Computer Engineering from MIT, Chhatrapati Sambhajinagar. During my time at MIT, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at MIT has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachelor of Technology - B.Tech",
    },
    {
      id: 1,
      img: educationLogo,
      school: "Vishwabharti Niwasi Jr. College, Hayatnagar, Basmath",
      date: "May 2021",
      grade: "81.83%",
      desc: "I completed my class 12 education from Vishwabharti Niwasi Jr. College, Hayatnagar, Basmath, under the Maharashtra State Board, where I studied Physics, Chemistry, Mathematics and Biology (PCMB) with Computer Science.",
      degree: "Maharashtra State Board(XII) - PCMB",
    },
    {
      id: 2,
      img: educationLogo,
      school: "Hu. Bahirji Samarak Vidyalaya, Basmath",
      date: "March 2019",
      grade: "85.60%",
      desc: "I completed my class 10 education from Hu. Bahirji Samarak Vidyalaya, Basmath, under the Maharashtra State board, where I studied Science with Computer.",
      degree: "Maharashtra State Board(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "QuadRides (Student travel partner android application)",
      description:
        "Built backend with Java/Firebase (Realtime DB, Auth, Storage) for secure user management; designed intuitive Figma UI/UX to boost engagement. Promoted sustainable student carpooling, cutting emissions up to 50% and costs while enhancing safety/trust via verified accounts.",
      image: quadrides_image,
      tags: ["Java", "Firebase", "Android Studio", "Figma"],
      github: "https://github.com/ashutosh1961/Quadrides-the-carpooling-app",
      webapp: "",
    },
    {
      id: 1,
      title: "Lifeline Clinic",
      description:
        "Developed/deployed Lifeline Clinic on Azure (HTML/CSS/JS) for efficient clinic operations (+50%); built Azure AI chatbot boosting patient interaction/appointments by 30-40%. GitHub: github.com/lifeline-clinic.",
      image: lifeline_image,
      tags: ["HTML", "CSS", "JavaScript", "Microsoft Azure Cloud", "AI Chatbot"],
      github: "https://github.com/ashutosh1961/Lifelineclinic-FRT-project",
      webapp: "https://ashutosh1961.github.io/Lifelineclinic-FRT-project/",
    },

  ];

export const EMAILJS_CONFIG = {
  serviceId: "service_bn0ehrj",
  templateId: "template_drcou9j",
  publicKey: "5u48YpZBKHR9bIhUZ"
};
