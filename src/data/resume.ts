// Single source for the resume. Rendered by src/pages/resume.tsx (site page)
// and src/pages/resume-print.tsx (the layout scripts/resume-pdf.mjs prints to PDF).

export const contact = {
  name: "Neal Stanard",
  email: "nstanard@gmail.com",
  phone: "(402) 617-6324",
  linkedin: { label: "in/neal-stanard", href: "https://www.linkedin.com/in/neal-stanard" },
  website: { label: "nealstanard.com/", href: "https://nealstanard.com/" },
}

export const summary =
  "I have a proven track record of building high-quality features that elevate user experience and drive engagement. My comprehensive skill set and collaborative approach make me an invaluable asset in developing innovative and responsive web applications."

export type Job = {
  company: string
  companyUrl?: string
  position: string
  period: string
  description: string
  achievements: string[]
}

export const experience: Job[] = [
  {
    company: "The Routing Company",
    companyUrl: "https://theroutingcompany.com",
    position: "Principal Software Engineer",
    period: "September 2022 - Present, Remote",
    description: "The Routing Company, a global SaaS company, provides software to transit companies to streamline dispatcher, driver, and rider operational excellence.",
    achievements: [
      "Engineered a proprietary daily timeline interface (called 'The Hub' https://rb.gy/xly4b2) implementing custom zooming, dragging, and scrolling features to enhance user interactions, leveraging React and Typescript in less than six weeks.",
      "Planned and led an ongoing team-wide test coverage initiative to promote a more scalable and reliable web platform resulting in an expanded automated test coverage from 5 to 70 percent.",
      "Advocated for, planned, and built a custom alerting and monitoring system to notify developers when users encounter bugs on the UI, supporting The Routing Company regularly achieving high availability beyond 99.9%.",
      "Developed a custom UI library leveraging React Aria, Styled Components, and Storybook to increase the speed of feature building by over 25%.",
      "Implemented an automated process for Mac environment setup, utilizing shell scripts to streamline and standardize workflow configurations across teams, saving on-boarding time by over 50%.",
      "Spearheaded the implementation of a 'global drawers' feature in the TRC dashboard, enhancing user experience and providing quick actions for users, increasing the NPS score of the dashboard into the 9-10 range.",
      "Led knowledge-sharing initiatives and mentored team members on accessibility standards, testing methodologies (Cypress, Jest), and best practices, fostering a culture of technical excellence.",
      "Demonstrated exceptional ownership by proactively squashing bugs and implementing improvements beyond assigned tasks, resulting in enhanced customer satisfaction and product reliability.",
      "Established and maintained a comprehensive style guide for the front-end component library, ensuring design consistency and improving developer productivity.",
      "Architected and implemented an auto-scaling Twilio proxy system to facilitate secure, scalable communication between riders and drivers, ensuring phone number privacy for legal and security compliance while enhancing the e2e user experience.",
    ],
  },
  {
    company: "EDS/SparkPost/Bird",
    companyUrl: "https://www.sparkpost.com",
    position: "Senior Software Engineer",
    period: "August 2016 - September 2022, Remote",
    description: "The SparkPost platform, trusted to deliver 40% of all commercial emails worldwide, allows users to send and optimize emails.",
    achievements: [
      "Main responsibilities involved working with designers and stakeholders to build features using modern best practices in web development.",
      "Led the initiative to integrate Auth0 into the SparkPost front-end application, facilitating a seamless login experience across all company applications.",
      "Enhanced user behavior tracking by optimizing Segment and Mixpanel integration using TypeScript, increasing application insights by 30%.",
      "Revamped the user interface of the SparkPost dashboard using React, Redux, and a custom component library known as Matchbox.",
      "Authored comprehensive documentation and training materials for the SparkPost application, improving onboarding efficiency and reducing new developer ramp-up time by 25%.",
      "Championed the migration of legacy JavaScript codebases to a modern React/TypeScript/Redux MVC architecture, cutting development time for new features by 50% and improving overall code maintainability.",
      "Maintained WebPack configuration and local developer tooling, ensuring a smooth development experience for the team.",
      "Managed infrastructure as code practices using Terraform for front-end systems on Amazon Web Services, enhancing deployment and scaling efficiency.",
    ],
  },
]

export const education = [
  {
    school: "University of Nebraska at Omaha",
    schoolUrl: "https://www.unomaha.edu/",
    degree: "Bachelor of Science in IT Innovation",
    period: "2010 - 2014",
    description: "Software engineering, entrepreneurship, and product management.",
  },
]

export const skills = {
  technical: ["JavaScript", "TypeScript", "Node", "React", "Cypress", "Jest", "TDD", "a11y", "GraphQL", "GCP", "AWS", "Terraform", "Flutter", "Dart", "Angular", "Go", "Java", "Python", "SQL", "NoSQL", "Bash", "CLI"],
  tools: ["NPM", "Firebase/Firestore", "Git/GitHub", "Docker", "Storybook", "Vite", "Webpack", "Jira", "Twilio", "Postman", "Ngrok", "Auth0", "CoPilot", "Cursor", "Ollama", "Vim", "VSCode", "Figma", "Adobe Suite", "Jenkins", "CircleCI", "CI/CD", "Slack"],
  soft: ["Teamwork", "Collaboration", "Leadership", "Mentorship", "Troubleshooting", "Problem Solving", "Bug Squashing", "Communication"],
}

export const pdfFileName = "Neal Stanard - Software Engineer.pdf"
