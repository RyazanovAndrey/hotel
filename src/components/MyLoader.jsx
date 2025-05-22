import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={367}
    height={500}
    viewBox="0 0 367 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="10" y="5" rx="20" ry="20" width="338" height="228" /> 
    <rect x="15" y="256" rx="20" ry="20" width="293" height="29" /> 
    <rect x="16" y="300" rx="20" ry="20" width="257" height="74" /> 
    <rect x="15" y="387" rx="20" ry="20" width="298" height="60" />
  </ContentLoader>
)

export default MyLoader

