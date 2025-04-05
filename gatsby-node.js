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
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors);
  }

  const posts = result.data.allMdx.nodes;

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id;
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id;

      createPage({
        path: `/blog${post.fields.slug}`,
        component: path.resolve('./src/templates/blog-post.tsx'),
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      });
    });
  }
}; 