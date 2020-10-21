import React from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import HeroHeader from "../components/heroHeader"
import Gallery from "react-photo-gallery"

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {

  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  const photos = [
    {
      src:"https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg",
      width:4,
      height:6
    },
        {
      src:"https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg",
      width:4,
      height:2
    },    {
      src:"https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg",
      width:4,
      height:8
    },    {
      src:"https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg",
      width:4,
      height:3
    },    {
      src:"https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg",
      width:8,
      height:3
    },    {
      src:"https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg",
      width:1,
      height:3
    },    {
      src:"https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg",
      width:4,
      height:3
    },    {
      src:"https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg",
      width:4,
      height:3
    },    {
      src:"https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg",
      width:4,
      height:3
    },

  ]

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        {/* <meta name="description" content={site.siteMetadata.description} /> */}
        <span>test</span>
        <p>testtest</p>
      </Helmet>
      <HeroHeader/>
      <h2>Photography &darr;</h2>
<Gallery photos={photos} />

      <h2>Blog Posts &darr;</h2>
      <div className="grids">
        {Posts}
      </div>
    </Layout>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
          }
        }
      }
    }
      img {
    fileName: file(relativePath: { eq: "assets/myimage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  }
`

