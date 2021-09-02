import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { EmailContactLinkQuery } from "../graphql-codegen-types";

const EmailContactLink = (): JSX.Element => {
  const data = useStaticQuery<EmailContactLinkQuery>(graphql`
    query EmailContactLink {
      site {
        siteMetadata {
          author {
            email
          }
        }
      }
    }
  `);

  const email =
    data.site?.siteMetadata?.author?.email || "viktorkhotimchenko@gmail.com";

  return (
    <a className="text-logo-orange" href={`mailto:${email}`}>
      {email}
    </a>
  );
};

export default EmailContactLink;
