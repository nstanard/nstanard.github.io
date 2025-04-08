import * as React from "react"
import Layout from "../components/Layout"

const ResumePage = () => {
  const experience = [
    {
      company: "The Routing Company",
      companyUrl: "https://theroutingcompany.com",
      position: "Staff Software Engineer",
      period: "September 2022 - Present, Remote",
      description: "The Routing Company, a global SaaS company, provides software to transit companies to streamline dispatcher, driver, and rider operational excellence.",
      achievements: [
        <>Engineered a proprietary daily timeline interface (called 'The Hub' <a href="https://rb.gy/xly4b2" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 underline">https://rb.gy/xly4b2</a>) implementing custom zooming, dragging, and scrolling features to enhance user interactions, leveraging React and Typescript in less than six weeks.</>,
        "Planned and led an ongoing team-wide test coverage initiative to promote a more scalable and reliable web platform resulting in an expanded automated test coverage from 5 to 70 percent.",
        "Advocated for, planned, and built a custom alerting and monitoring system to notify developers when users encounter bugs on the UI, supporting The Routing Company regularly achieving high availability beyond 99.9%.",
        "Developed a custom UI library leveraging React Aria, Styled Components, and Storybook to increase the speed of feature building by over 25%.",
        "Implemented an automated process for Mac environment setup, utilizing shell scripts to streamline and standardize workflow configurations across teams, saving on-boarding time by over 50%.",
        "Spearheaded the implementation of a 'global drawers' feature in the TRC dashboard, enhancing user experience and providing quick actions for users, increasing the NPS score of the dashboard into the 9-10 range.",
        "Led knowledge-sharing initiatives and mentored team members on accessibility standards, testing methodologies (Cypress, Jest), and best practices, fostering a culture of technical excellence.",
        "Demonstrated exceptional ownership by proactively squashing bugs and implementing improvements beyond assigned tasks, resulting in enhanced customer satisfaction and product reliability.",
        "Established and maintained a comprehensive style guide for the front-end component library, ensuring design consistency and improving developer productivity.",
        "Architected and implemented an auto-scaling Twilio proxy system to facilitate secure, scalable communication between riders and drivers, ensuring phone number privacy for legal and security compliance while enhancing the e2e user experience."
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
        "Maintained WebPack configuration and local developer tooling, ensuring a smooth development experience for the team."
      ],
    },
  ]

  const education = [
    {
      school: "University of Nebraska at Omaha",
      degree: "Bachelor of Science in IT Innovation",
      period: "2010 - 2014",
      description: "Software engineering, entrepreneurship, and product management.",
      schoolUrl: "https://www.unomaha.edu/",
    },
  ]

  const skills = {
    technical: ["JavaScript", "TypeScript", "Node", "React", "Cypress", "Jest", "TDD", "a11y", "GraphQL", "GCP", "AWS", "Terraform", "Flutter", "Dart", "Angular", "Go", "Java", "Python", "SQL", "NoSQL", "Bash", "CLI"],
    tools: ["NPM", "Firebase/Firestore", "Git/GitHub", "Docker", "Storybook", "Vite", "Webpack", "Jira", "Twilio", "Postman", "Ngrok", "Auth0", "CoPilot", "Cursor", "Ollama", "Vim", "VSCode", "Figma", "Adobe Suite", "Jenkins", "CircleCI", "CI/CD", "Slack"],
    soft: ["Teamwork", "Collaboration", "Leadership", "Mentorship", "Troubleshooting", "Problem Solving", "Bug Squashing", "Communication"],
  }

  return (
    <Layout>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-dark-text sm:text-4xl">
                Resume
              </h2>
              <a
                href="/Neal Stanard - Software Engineer.pdf"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download PDF
              </a>
            </div>

            {/* Experience Section */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-text">Experience</h3>
              <div className="mt-8 space-y-12">
                {experience.map((job, index) => (
                  <div key={index} className="relative">
                    <div className="relative pb-12 border-l-2 border-gray-200 dark:border-dark-border pl-6">
                      <div className="absolute -left-[6px] top-0 w-2.5 h-2.5 rounded-full bg-primary-600" />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-dark-text">{job.position}</h4>
                        <p className="text-sm text-primary-600 dark:text-primary-400">
                          {job.companyUrl ? (
                            <a 
                              href={job.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary-600 dark:text-primary-400 underline"
                            >
                              {job.company}
                            </a>
                          ) : (
                            job.company
                          )}
                        </p>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{job.period}</p>
                        <p className="mt-4 text-gray-600 dark:text-gray-400">{job.description}</p>
                        <ul className="mt-4 list-disc list-inside space-y-2">
                          {job.achievements.map((achievement, i) => (
                            <li key={i} className="text-gray-600 dark:text-gray-400">{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-text">Education</h3>
              <div className="mt-8 space-y-12">
                {education.map((edu, index) => (
                  <div key={index} className="relative">
                    <div className="relative pb-12 border-l-2 border-gray-200 dark:border-dark-border pl-6">
                      <div className="absolute -left-[6px] top-0 w-2.5 h-2.5 rounded-full bg-primary-600" />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-dark-text">{edu.degree}</h4>
                        <a 
                          href={edu.schoolUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-primary-600 dark:text-primary-400 underline"
                        >
                          {edu.school}
                        </a>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{edu.period}</p>
                        <p className="mt-4 text-gray-600 dark:text-gray-400">{edu.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Section */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-text">Skills</h3>
              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-dark-text">Technical</h4>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {skills.technical.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-dark-text">Tools</h4>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {skills.tools.map((tool) => (
                      <span
                        key={tool}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-dark-text">Soft Skills</h4>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {skills.soft.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ResumePage

export const Head = () => <title>Resume | Neal Stanard</title>
