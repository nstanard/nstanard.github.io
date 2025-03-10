import React from 'react';
import { Link, graphql, PageProps } from 'gatsby';
import Layout from '../../components/Layout';

interface BlogIndexProps extends PageProps {
  data: {
    allMdx: {
      nodes: Array<{
        id: string;
        frontmatter: {
          title: string;
          date: string;
          description: string;
        };
        fields: {
          slug: string;
        };
      }>;
    };
  };
}

const BlogIndex: React.FC<BlogIndexProps> = ({ data }) => {
  const posts = data.allMdx.nodes;

  return (
    <Layout>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-dark-text sm:text-4xl mb-16">Blog</h1>
            <div className="space-y-8">
              {posts.map((post) => (
                <article key={post.id} className="border-b border-gray-200 dark:border-dark-border pb-8">
                  <header>
                    <h2 className="mb-2">
                      <Link 
                        to={`/blog${post.fields.slug}`}
                        className="text-2xl font-bold text-gray-900 dark:text-dark-text hover:text-primary-600 dark:hover:text-primary-400"
                      >
                        {post.frontmatter.title}
                      </Link>
                    </h2>
                    <small className="text-gray-500 dark:text-gray-400">
                      {post.frontmatter.date}
                    </small>
                  </header>
                  <p className="mt-3 text-gray-600 dark:text-gray-300">
                    {post.frontmatter.description}
                  </p>
                  <Link 
                    to={`/blog${post.fields.slug}`}
                    className="inline-block mt-4 text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    Read more →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          description
        }
        fields {
          slug
        }
      }
    }
  }
`;

export default BlogIndex; 