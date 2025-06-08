import React from "react";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

type BlogImageProps = {
  image: IGatsbyImageData | string;
  alt: string;
  style?: React.CSSProperties;
};

const BlogImage: React.FC<BlogImageProps> = ({ image, alt, style }) => {
  // If image is a string and ends with .gif, render a native <img>
  if (typeof image === 'string' && image.toLowerCase().endsWith('.gif')) {
    // Assume image is a relative path from /src/images or /static
    return (
      <img
        src={image.startsWith('/') ? image : `/${image}`}
        alt={alt}
        style={{ maxWidth: '100%', margin: '2rem auto', display: 'block', ...style }}
      />
    );
  }
  // Otherwise, render using GatsbyImage
  return (
    <GatsbyImage image={getImage(image)!} alt={alt} style={{ maxWidth: '100%', margin: '2rem auto', ...style }} />
  );
};

export default BlogImage;
