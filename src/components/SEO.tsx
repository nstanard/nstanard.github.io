import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  pathname?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title,
  description,
  image,
  pathname 
}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
          image
        }
      }
    }
  `);

  const {
    title: defaultTitle,
    description: defaultDescription,
    author,
    siteUrl,
    image: defaultImage,
  } = data.site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image || defaultImage,
    url: `${siteUrl}${pathname || ''}`,
  };

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="author" content={author} />
      {/* Open Graph */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${siteUrl}${seo.image}`} />
    </Helmet>
  );
};

export default SEO; 