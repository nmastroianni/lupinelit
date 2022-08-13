import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as React from 'react'

const HomePage = ({ data }) => {
  console.log(data)
  return (
    <div className="min-h-screen">
      <GatsbyImage
        image={data.file.childImageSharp.gatsbyImageData}
        alt=""
        className="inset-0 h-screen z-0"
      />
      <h1 className="absolute top-10 text-center text-4xl md:text-5xl lg:text-6xl w-full text-purple-900 z-10 font-extralight">
        Lupine Literature
      </h1>
      <div className="absolute inset-0 h-screen bg-white bg-opacity-50 text-black flex flex-col items-center justify-center p-4">
        <div className="max-w-screen-sm bg-white bg-opacity-90 rounded-md border sm:border-2 border-purple-300 prose md:prose-lg lg:prose-xl xl:prose-2xl mx-auto p-4">
          <p className="text-center text-xl text-purple-900 font-semibold">
            Great literature is a thing of beauty.
          </p>
          <p>
            We pride ourselves in making great literature available to our
            readers so they can find beauty wherever they bring our books.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomePage

export const Head = () => <title>Home &bull; Lupine Literature</title>

export const HomePageQuery = graphql`
  {
    file(name: { eq: "lupine-bg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
      }
    }
  }
`
