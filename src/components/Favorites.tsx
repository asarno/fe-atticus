import React from "react"

import { useSongs } from "../hooks/songs"
import { useLocalStorage } from "../hooks/useLocalStorage"
import Layout from "./Layout"
import Loader from "./Loader"
import Song from "./Song"

import { SongsContainer } from "./styled"

function Favorites() {
  const [favoritesMap] = useLocalStorage("favorites", {})
  const { isLoading, data } = useSongs();
  return (
    <Layout>
      <SongsContainer>
        <Loader isLoading={isLoading} />
        {!isLoading &&
          Object.keys(favoritesMap).map((key: string) => {
            const { name, artist, albumArt } = data[key]
            return (
              <Song
                key={key}
                name={name}
                artist={artist}
                image={albumArt}
              />
            )
          })}
      </SongsContainer>
    </Layout>
  )
}

export default Favorites
