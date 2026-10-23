const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode, basePath: 'content/blog' });
    createNodeField({
      name: 'slug',
      node,
      value: value.replace(/\/index$/, ''),
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        nodes {
          id
          fields {
            slug
          }
          internal {
            contentFilePath
          }
          frontmatter {
            published
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors);
  }

  // Only build posts where published !== false (same rule as the blog list).
  const posts = result.data.allMdx.nodes.filter(
    post => post.frontmatter.published !== false
  );

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id;
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id;

      createPage({
        path: `/blog${post.fields.slug}`,
        component: `${path.resolve('./src/templates/blog-post.tsx')}?__contentFilePath=${post.internal.contentFilePath}`,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      });
    });
  }
};

// Pages under src/pages that should not be built or served right now.
const HIDDEN_PAGES = ['/portfolio/'];

exports.onCreatePage = ({ page, actions }) => {
  if (HIDDEN_PAGES.includes(page.path)) {
    actions.deletePage(page);
  }
};
