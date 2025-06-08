import React from "react";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

interface BlogImageProps {
  image: IGatsbyImageData;
  alt: string;
  style?: React.CSSProperties;
}

const BlogImage: React.FC<BlogImageProps> = ({ image, alt, style }) => {
  return (
    <GatsbyImage image={getImage(image)!} alt={alt} style={{ maxWidth: '100%', margin: '2rem auto', ...style }} />
  );
};

export default BlogImage;
