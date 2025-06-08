import React from 'react';
import { graphql, PageProps, Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import type { ComponentType } from 'react';
import Layout from '../components/Layout';
import CodeBlock from '../components/CodeBlock';
import BlogImage from '../components/BlogImage';

interface BlogPostProps {
  data: {
    mdx: {
      frontmatter: {
        title: string;
        date: string;
        description: string;
      };
      body: string;
    };
    previous: {
      fields?: {
        slug: string;
      };
      frontmatter: {
        title: string;
      };
    } | null;
    next: {
      fields?: {
        slug: string;
      };
      frontmatter: {
        title: string;
      };
    } | null;
    allFile: {
      nodes: Array<{
        relativePath: string;
        childImageSharp?: {
          gatsbyImageData: any;
        };
      }>;
    };
  };
  children: React.ReactNode;
}

const components = {
  pre: (props: any) => <div {...props} />,
  code: (props: any) => <CodeBlock {...props} />,
  BlogImage: BlogImage,
} as Record<string, ComponentType<any>>;

const BlogPost: React.FC<BlogPostProps> = ({ data, children }) => {
  // Map images by their relative path for easy lookup in MDX
  const imageMap = Object.fromEntries(
    (data.allFile?.nodes || [])
      .filter(node => node.childImageSharp)
      .map(node => [node.relativePath, node.childImageSharp.gatsbyImageData])
  );

  // Provide BlogImage with image prop as relativePath, e.g. <BlogImage image={imageMap["my-image.jpg"]} alt="desc" />
  const mdxComponents = {
    ...components,
    BlogImage: (props: any) => {
      const { image, ...rest } = props;
      const imgData = typeof image === "string" ? imageMap[image] : image;
      if (!imgData) return <span style={{color:'red'}}>Image not found: {image}</span>;
      return <BlogImage image={imgData} {...rest} />;
    },
  };

  const { mdx: post, previous, next } = data;

  return (
    <Layout>
      <article className="prose dark:prose-invert max-w-none">
        <header className="mb-8">
          <h1 className="mb-2 text-gray-900 dark:text-gray-100">{post.frontmatter.title}</h1>
          <p className="text-gray-500 dark:text-gray-400">
            {post.frontmatter.date}
          </p>
        </header>

        <MDXProvider components={mdxComponents}>
          {children}
        </MDXProvider>

        <hr className="my-8" />
        {/* Links to other blog posts.... do we want? */}
        {/* <nav className="flex justify-between">
          {previous?.fields?.slug && (
            <Link
              to={`/blog${previous.fields.slug}`}
              className="text-primary-600 dark:text-primary-400 hover:underline"
              rel="prev"
            >
              ← {previous.frontmatter.title}
            </Link>
          )}
          {next?.fields?.slug && (
            <Link
              to={`/blog${next.fields.slug}`}
              className="text-primary-600 dark:text-primary-400 hover:underline"
              rel="next"
            >
              {next.frontmatter.title} →
            </Link>
          )}
        </nav> */}
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
      body
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
    allFile(
      filter: { sourceInstanceName: { eq: "images" } }
    ) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData(width: 900, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default BlogPost; 