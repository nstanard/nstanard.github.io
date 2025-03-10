import * as React from "react"
import { Link, graphql, PageProps } from "gatsby"
import Layout from "../components/Layout"

interface BlogPost {
  id: string
  frontmatter: {
    title: string
    date: string
    description: string
  }
  fields: {
    slug: string
  }
  excerpt: string
}

interface BlogPageData {
  allMdx: {
    nodes: BlogPost[]
  }
}

const BlogPage = ({ data }: PageProps<BlogPageData>) => {
  // For now, we'll use dummy data since we haven't created any blog posts yet
  const posts = [
    {
      id: "1",
      frontmatter: {
        title: "Getting Started with Gatsby",
        date: "2024-03-08",
        description: "Learn how to build modern websites with Gatsby and React",
      },
      fields: {
        slug: "/blog/getting-started-with-gatsby",
      },
      excerpt: "Gatsby is a powerful framework for building modern websites...",
    },
    {
      id: "2",
      frontmatter: {
        title: "Why I Love TypeScript",
        date: "2024-03-07",
        description: "The benefits of using TypeScript in your projects",
      },
      fields: {
        slug: "/blog/why-i-love-typescript",
      },
      excerpt: "TypeScript has revolutionized how we write JavaScript...",
    },
  ]

  return (
    <Layout>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-dark-text sm:text-4xl">
              Blog
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Thoughts, tutorials, and insights about software development and technology.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl">
            <div className="space-y-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="relative isolate flex flex-col gap-8 bg-white dark:bg-dark-card rounded-2xl p-8"
                >
                  <div className="flex items-center gap-x-4 text-xs">
                    <time
                      dateTime={post.frontmatter.date}
                      className="text-gray-500 dark:text-gray-400"
                    >
                      {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>

                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-dark-text group-hover:text-primary-600">
                      <Link to={post.fields.slug}>
                        <span className="absolute inset-0" />
                        {post.frontmatter.title}
                      </Link>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-400">
                      {post.frontmatter.description}
                    </p>
                  </div>
                  <div className="mt-4">
                    <Link
                      to={post.fields.slug}
                      className="text-sm font-semibold leading-6 text-primary-600 dark:text-primary-400 hover:text-primary-500"
                    >
                      Read more <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPage

export const Head = () => <title>Blog | Neal Stanard</title>

// This query will work once you have blog posts in your content/blog directory
/*
export const query = graphql`
  query BlogPosts {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        excerpt(pruneLength: 160)
        frontmatter {
          title
          date
          description
        }
        fields {
          slug
        }
      }
    }
  }
`
*/ 