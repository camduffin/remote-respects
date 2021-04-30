import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { useLocation } from "@reach/router";
import PropTypes from "prop-types";

function Search({ title, description, image, lang }) {

    const { pathname } = useLocation();
    const { site } = useStaticQuery(query);

    const {
        defaultTitle,
        defaultDescription,
        siteUrl,
        defaultImage,
        twitterUsername,
    } = site.siteMetadata;

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname}`,
        canonical: `${siteUrl}${pathname}`
    }

    return (
        <Helmet title={seo.title} htmlAttributes={{ lang }}>

            <meta name="description" content={seo.description} />

            <link rel="canonical" href={seo.canonical}/>

            <meta name="keywords" content="funeral, graveside, service, memorial, funeral webcast, funeral livestream, memorial webcast, memorial livestream, graveside service, distance funeral,  funeral broadcast, memorial broadcast, graveside broadcast, ashes, commemoration"/>

            {seo.url && <meta property="og:url" content={seo.url} />}

            {seo.title && <meta property="og:title" content={seo.title} />}

            {seo.description && ( <meta property="og:description" content={seo.description} /> )}

            {seo.image && <meta property="og:image" content={seo.image} />}

            <meta name="twitter:card" content="summary_large_image" />

            {twitterUsername && ( <meta name="twitter:creator" content={twitterUsername} />)}

            {seo.title && <meta name="twitter:title" content={seo.title} />}

            {seo.description && (<meta name="twitter:description" content={seo.description} />)}

            {seo.image && <meta name="twitter:image" content={seo.image} />}

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "url": "https://www.remoterespects.ca/",
                        "name": "Remote Respects",
                        "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+1-613-737-3378",
                        "contactType": "Support",
                        },
                        "image": "/landing.jpg",
                        "logo": "/button.png",
                        "telephone": "+1-613-737-3378",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "150 C Terence Matthews Crescent",
                            "addressLocality": "Ottawa",
                            "addressRegion": "ON",
                            "postalCode": "K2M1X4",
                            "addressCountry": "CA"
                        },
                        "priceRange": "$$$",
                        "email": "mailto:info@remoterespects.ca",
                        "description": "Funeral webcast to share your memories and memorial with the people that matter.",
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": "45.2874318",
                            "longitude": "-75.8734515"
                        },
                        "sameAs": ["https://www.facebook.com/isilivecanada/", "https://twitter.com/isilive_canada?lang=en", "https://www.instagram.com/isilivecanada/?hl=en", "https://www.linkedin.com/company/isilive/?originalSubdomain=ca"],
                        "hasMap": "https://www.google.com/maps/place/iSiLIVE+%7C+Professional+Webcasting/@45.2874318,-75.8734515,15z/data=!4m2!3m1!1s0x0:0x7909bce2e18e7dd8?sa=X&ved=2ahUKEwiy_quU_aPwAhULP6wKHey8D70Q_BIwFXoECFQQBQ"
                    })}
                </script>
            </Helmet>
    )

}

export default Search;

Search.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    lang: PropTypes.string,
}

Search.defaultProps = {
    title: null,
    description: null,
    image: null,
    lang: 'en'
}


const query = graphql`
    query SEO {
        site {
            siteMetadata {
                defaultTitle: title
                defaultDescription: description
                siteUrl
                defaultImage: image
                twitterUsername
            }
        }
    }
`
