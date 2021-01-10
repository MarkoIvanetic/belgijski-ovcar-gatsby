import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby-plugin-intl"
import { StyledHeader } from "./style/Header.style"

import Language from "./language"

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div>
      <h1>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div
        style={{
          float: `right`,
        }}
      >
        <Language />
      </div>
    </div>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: "",
}

export default Header
