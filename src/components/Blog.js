import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"

const Blog = ({ id, title, image, date, category, slug, desc }) => {
  function truncateString(str, num) {
    if (str.length <= num) {
      return str
    }
    return str.slice(0, num) + "..."
  }

  return (
    <Link to={`/blogs/${slug}`} className="blog" key={id}>
      <article>
        {image && (
          <Image
            fluid={image.childImageSharp.fluid}
            className="blog-img"
            alt="blog-img"
          />
        )}
        <div className="blog-card">
          <h4>{title}</h4>
          <p>{truncateString(desc, 170)}</p>
          <div className="blog-footer">
            <p>{category}</p>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}

Blog.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
}

export default Blog
