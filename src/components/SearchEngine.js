import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Search({ description, lang, meta }) {

    const { site } = useStaticQuery(
    graphql`
    query {
        site {
            siteMetadata {
                title
                description
                keywords
                siteUrl
            }
        }
    }
    `
    )

    const metaDescription = description || site.siteMetadata.description

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            meta={[
                {
                name: `description`,
                content: metaDescription,
                },
                {
                name: "keywords",
                content: site.siteMetadata.keywords,
                },
            ]}
            />
    )

}

Search.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
}

export default Search;