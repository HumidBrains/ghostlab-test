import React from 'react'
import Link from 'gatsby-link'
import 'typeface-pacifico'
import styled from 'styled-components'

const StyledComponentForGhostlab = styled.div`
  font: 600 36px Pacifico;
  color: palevioletred;
`

const SecondPage = () => (
  <div>
    <p>Welcome to page 2</p>
    <StyledComponentForGhostlab>
      Ghostlab is really cool when it renders my fonts.
    </StyledComponentForGhostlab>

    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
