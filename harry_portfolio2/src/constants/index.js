import fabwear from "../assets/projects/fabwear.png";
import hasanui from "../assets/projects/hasanui.png";
import portfolio from "../assets/projects/portfolio.png";
import IA from "../assets/projects/IA.png";
import VI from "../assets/projects/VI.png";


export const HERO_CONTENT = `I am a passionate React / Node.js developer with a knack for crafting robust and scalable web applications. With 1 year of hands-on experience, I have honed my skills in front-end technologies like React and Sveltkit, as well as back-end technologies like Node.js, MySQL and MSSQL. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 1 year of professional experience, I have worked with a variety of technologies, including React, Sveltkit, Angular, Next.js, Node.js and MySQL. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Jr. Software Engineer",
    company: "Evince Development Pvt. Ltd.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "Typescript", "React.js", "Sveltekit", "Node.js", "MySQL", "MSSQL"],
  },
  {
    year: "2022 - 2023",
    role: "Associate Software Trainee",
    company: "Evince Development Pvt. Ltd.",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Javascript", "React.js", "MySQL", "Node.js"],
  }
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: fabwear,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, payment integration and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MySQL"],
  },
  {
    title: "Hasanui",
    image: hasanui,
    description:
      "A full fledged application based on hospital management with features such as opd management, ambulance management, bio-waste/medical-waste management, tracking doctor and paramedical and auditlog management.",
    technologies: ["HTML", "CSS", "Angular", "Node.js", "MSSQL"],
  },
  {
    title: "Income Analyzer",
    image: IA,
    description:
      "A platform for uploading account reports, reviewing accounts detailed reports and analyzing credit, debit and loan for accounts, risk factors for account etc.",
    technologies: ["HTML", "CSS", "Sveltkit"],
  },
  {
    title: "Voucher Import",
    image: VI,
    description:
      "A platform for reviewing voucher lists and their related distributions with CRUD, export functionality.",
    technologies: ["React", "Node.js", "Tailwind"],
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information built with react js and threejs.",
    technologies: ["React", "ThreeJs", "Tailwind"],
  }
];

export const CONTACT = {
  address1: "699, Sector - 3, Vishwas City - 1",
  address2: "Chanakyapuri, Ahmedabad, Gujurat, 380060",
  phoneNo: "+91 707 755 2981 ",
  email: "tripathy.hp202@gmail.com",
};
