import sanitizeHtml from "sanitize-html";

interface HtmlType {
  html: string;
}

export const SanitizeHTML = ({ html }: HtmlType) => {
  const clean = { __html: sanitizeHtml(html) };

  return <div dangerouslySetInnerHTML={clean} />;
};
