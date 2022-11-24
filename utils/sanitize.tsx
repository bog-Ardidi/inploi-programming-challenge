// sanitizes the html that from the api response
// before displaying it on the screen
import sanitizeHtml from "sanitize-html";

interface HtmlType {
  html: string;
}

export const SanitizeHTML = ({ html }: HtmlType) => {
  const clean = { __html: sanitizeHtml(html) };

  return <div dangerouslySetInnerHTML={clean} />;
};
