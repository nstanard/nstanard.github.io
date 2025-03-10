import React from 'react';
import { graphql, PageProps, Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import type { ComponentType } from 'react';
import Layout from '../components/Layout';
import CodeBlock from '../components/CodeBlock';

interface BlogPostProps {
  data: {
    mdx: {
      frontmatter: {
        title: string;
        date: string;
        description: string;
      };
    };
    previous: {
      fields: {
        slug: string;
      };
      frontmatter: {
        title: string;
      };
    } | null;
    next: {
      fields: {
        slug: string;
      };
      frontmatter: {
        title: string;
      };
    } | null;
  };
  children: React.ReactNode;
}

const components = {
  pre: (props: any) => <div {...props} />,
  code: (props: any) => <CodeBlock {...props} />,
} as Record<string, ComponentType<any>>;

const BlogPost: React.FC<BlogPostProps> = ({ data, children }) => {
  const { mdx, previous, next } = data;

  return (
    <Layout>
      <article className="prose dark:prose-invert max-w-none">
        <header className="mb-8">
          <h1 className="mb-2">{mdx.frontmatter.title}</h1>
          <p className="text-gray-500 dark:text-gray-400">
            {mdx.frontmatter.date}
          </p>
        </header>
        <MDXProvider components={components}>
          {children}
        </MDXProvider>
        <hr className="my-8" />
        <nav className="flex justify-between">
          {previous && (
            <Link
              to={`/blog${previous.fields.slug}`}
              className="text-primary-600 dark:text-primary-400 hover:underline"
              rel="prev"
            >
              ← {previous.frontmatter.title}
            </Link>
          )}
          {next && (
            <Link
              to={`/blog${next.fields.slug}`}
              className="text-primary-600 dark:text-primary-400 hover:underline"
              rel="next"
            >
              {next.frontmatter.title} →
            </Link>
          )}
        </nav>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query BlogPostById(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;

export default BlogPost; 