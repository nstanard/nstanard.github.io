import * as React from "react"
import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby";

const projects = [
  // {
  //   title: "SSO",
  //   description: "I was the lead developer on the Sparkpost Auth0 integration. I was responsible for the design and implementation of the integration.  ",
  //   tags: ["React", "TypeScript", "Auth0", "Sparkpost"],
  //   image: "auth0.png",
  //   blogPost: "/blog/sso"
  // },
  {
    title: "The Hub",
    description: "",
    tags: ["React", "TypeScript", "The Routing Company"],
    image: "hub.png",
    blogPost: "/blog/hub"
  }
]

const PortfolioPage = () => {
  // Query all images in src/images
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { 
          sourceInstanceName: { eq: "images" },
          extension: { regex: "/(jpg|jpeg|png|webp|png)/" }
        }
      ) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(width: 1200, quality: 90, placeholder: BLURRED)
          }
        }
      }
    }
  `);

  // Map images to projects
  const images = data.allFile.nodes;
  const projectsWithImages = projects.map(project => {
    const imageNode = images.find(img => img.relativePath === project.image);
    return {
      ...project,
      imageData: imageNode?.childImageSharp?.gatsbyImageData,
    };
  });

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
            {projectsWithImages.map((project, index) => (
              <article key={index} className="flex flex-col items-start bg-white dark:bg-dark-card rounded-lg shadow-lg overflow-hidden">
                <div className="w-full">
                  <div className="h-48 w-full bg-gray-200 dark:bg-gray-700">
                    {project.imageData && (
                      <GatsbyImage
                        image={project.imageData}
                        alt={project.title}
                        className="h-48 w-full object-cover"
                      />
                    )}
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
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-dark-text group-hover:underline">
                      <a href={project.blogPost}>
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
                      href={project.blogPost}
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