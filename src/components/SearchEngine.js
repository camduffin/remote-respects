import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Search({ title, description, lang, meta }) {

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
        title={site.siteMetadata.title}
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
            >
                <script type="application/ld+json">
                    {JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'LocalBusiness',
                        url: 'https://www.remoterespects.ca/',
                        name: 'Remote Respects',
                        contactPoint: {
                        '@type': 'ContactPoint',
                        telephone: '+1-613-737-3378',
                        contactType: 'Support',
                        },
                        image: '../images/isi-logo-2.png',
                        telephone: '+1-613-737-3378',
                        address: {
                            '@type': 'PostalAddress',
                            'streetAddress': '150 C Terence Matthews Crescent',
                            'addressLocality': 'Ottawa',
                            'addressRegion': 'ON',
                            'postalCode': 'K2M1X4',
                            'addressCountry': 'CA'
                        },
                        priceRange: '$$$',
                    })}
                </script>
            </Helmet>
    )

}

Search.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
}

export default Search;