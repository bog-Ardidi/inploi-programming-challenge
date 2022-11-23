// sanitizes the html that from the api response
// before displaying it on the screen
import sanitizeHtml from "sanitize-html";
import { exists } from "./exists";

interface HtmlType {
  html: string;
}

export const SanitizeHTML = ({ html }: HtmlType) => {
  // check if there is html to parse
  exists(html);

  const clean = { __html: sanitizeHtml(html) };

  return <div dangerouslySetInnerHTML={clean} />;
};
