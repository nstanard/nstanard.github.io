import * as React from "react"
import Layout from "../components/Layout"

// You can replace these with your actual projects
const projects = [
  {
    title: "Project 1",
    description: "Description of your first project. What technologies you used, what problems you solved.",
    tags: ["React", "TypeScript", "Node.js"],
    image: "project1.jpg",
  },
  {
    title: "Project 2",
    description: "Description of your second project. Highlight the key features and your role.",
    tags: ["Gatsby", "GraphQL", "Tailwind"],
    image: "project2.jpg",
  },
  // Add more projects as needed
]

const PortfolioPage = () => {
  return (
    <Layout>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-dark-text sm:text-4xl">
              Portfolio
            </h2>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {projects.map((project, index) => (
              <article key={index} className="flex flex-col items-start bg-white dark:bg-dark-card rounded-lg shadow-lg overflow-hidden">
                <div className="w-full">
                  {/* Replace with your actual project images */}
                  <div className="h-48 w-full bg-gray-200 dark:bg-gray-700">
                    {/* You'll need to add your project images to the src/images directory */}
                    {/* <StaticImage
                      src="../images/project1.jpg"
                      alt={project.title}
                      className="h-48 w-full object-cover"
                    /> */}
                  </div>
                </div>
                <div className="max-w-xl p-6">
                  <div className="flex items-center gap-x-4 text-xs">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-dark-text group-hover:text-primary-600">
                      <a href="#">
                        <span className="absolute inset-0" />
                        {project.title}
                      </a>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-400">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="text-sm font-semibold leading-6 text-primary-600 dark:text-primary-400 hover:text-primary-500"
                    >
                      View Project <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PortfolioPage

export const Head = () => <title>Portfolio | Neal Stanard</title> 