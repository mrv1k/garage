/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { Helmet } from "react-helmet";
import { SeoQuery } from "../../graphql-codegen-types";

type Props = { title: string; description?: string; lang?: string };

function Seo({ title, description = "", lang = "en" }: Props): JSX.Element {
  const { site } = useStaticQuery<SeoQuery>(
    graphql`
      query Seo {
        site {
          siteMetadata {
            title
            description
            author {
              name
            }
          }
        }
      }
    `
  );

  const metaDescription =
    description ??
    site?.siteMetadata?.description ??
    "Viktor Khotimchenko Personal Website";
  const defaultTitle = site?.siteMetadata?.title ?? "Viktor Khotimchenko";
  const name = site?.siteMetadata?.author?.name ?? "Viktor Khotimchenko";

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s - ${defaultTitle}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
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
          content: title,
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
