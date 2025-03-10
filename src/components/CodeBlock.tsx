import React from 'react';
import { Highlight, themes } from 'prism-react-renderer';

interface CodeBlockProps {
  children: string;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children, className }) => {
  const language = className ? className.replace(/language-/, '') : '';

  return (
    <Highlight
      theme={themes.nightOwl}
      code={children.trim()}
      language={language as any}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} overflow-x-auto p-4 rounded-lg`} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock; 