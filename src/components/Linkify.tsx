import * as React from "react"

const URL_RE = /(https?:\/\/[^\s)]+)/g
const IS_URL = /^https?:\/\//

// Renders plain text, turning any http(s) URL into a link.
const Linkify: React.FC<{ text: string; className?: string }> = ({ text, className }) => (
  <>
    {text.split(URL_RE).map((part, i) =>
      IS_URL.test(part) ? (
        <a key={i} href={part} target="_blank" rel="noopener noreferrer" className={className}>
          {part}
        </a>
      ) : (
        <React.Fragment key={i}>{part}</React.Fragment>
      )
    )}
  </>
)

export default Linkify
