import * as React from "react"
import Layout from "../components/Layout"

const ResumePage = () => {
  const experience = [
    {
      company: "The Routing Company",
      position: "Staff Software Engineer",
      period: "September 2022 - Present, Remote",
      description: "TODO",
      achievements: [
        "todo",
      ],
    },
    // Add more experiences
  ]

  const education = [
    {
      school: "University of Nebraska at Omaha",
      degree: "Bachelor of Science in IT Innovation",
      period: "2010 - 2014",
      description: "Focus on software engineering, entrepreneurship, and product management.",
    },
    // Add more education
  ]

  const skills = {
    technical: ["JavaScript", "TypeScript", "React", "GraphQL",  "GCP", "AWS", "Terraform", "Go", "SQL", "NoSQL", "Firebase"],
    tools: ["Git", "Docker", "Jenkins", "Jira", "Auth0", "Twilio", "Postman"],
    soft: ["Leadership", "Communication", "Problem Solving", "Teamwork"],
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
                        <p className="text-sm text-primary-600 dark:text-primary-400">{job.company}</p>
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
                        <p className="text-sm text-primary-600 dark:text-primary-400">{edu.school}</p>
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