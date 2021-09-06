import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { Helmet } from "react-helmet";
import { Maybe, SeoQuery } from "../../graphql-codegen-types";

type Props = {
  titleLeft: string;
  path: string;
  description?: Maybe<string>;
  lang?: string;
};

function Seo({
  titleLeft,
  description,
  lang = "en",
  path,
}: Props): JSX.Element {
  const { site } = useStaticQuery<SeoQuery>(
    graphql`
      query Seo {
        site {
          siteMetadata {
            title
            description
            blog {
              title
              description
            }
            author {
              name
            }
          }
        }
      }
    `
  );

  const name = site?.siteMetadata?.author?.name ?? "Viktor Khotimchenko";

  // default values
  let titleRight = name;
  let metaDescription =
    description ||
    site?.siteMetadata?.description ||
    `${name} Personal Website`;

  // blog values
  if (path.includes("blog")) {
    if (site?.siteMetadata?.blog) {
      const { title, description: blogDescription } = site.siteMetadata.blog;
      if (title) titleRight = title;
      if (blogDescription) metaDescription = blogDescription;
    }
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={titleLeft}
      // titleLeft is used to replace %s, thus the name
      titleTemplate={`%s - ${titleRight}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: titleLeft,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: name,
        },
        {
          name: `twitter:title`,
          content: titleLeft,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]}
    />
  );
}

export default Seo;
