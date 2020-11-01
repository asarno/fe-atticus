import React, { useState } from "react"
import { useSongs } from "../hooks/songs"
import { useLocalStorage } from "../hooks/useLocalStorage"
import Layout from "./Layout"
import Loader from "./Loader"
import Song from "./Song"

import { SongsContainer } from "./styled"

function AllSongs() {
  const [selectedSong, setSelectedSong] = useState("")
  const [favoritesMap, setFavoritesMap] = useLocalStorage("favorites", {})
  const { isLoading, data } = useSongs()

  function handleSelectSong(newKey: string) {
    setSelectedSong(newKey === selectedSong ? "" : newKey)
  }

  function handleFavorite(newKey: string) {
    const newFavoritesMap = { ...favoritesMap }
    if (favoritesMap[newKey]) {
      delete newFavoritesMap[newKey]
    } else {
      newFavoritesMap[newKey] = newKey
    }

    setFavoritesMap(newFavoritesMap)
    setSelectedSong("")
  }

  return (
    <Layout>
      <SongsContainer>
        <Loader isLoading={isLoading} />
        {!isLoading &&
          Object.keys(data).map((key: string) => {
            const { name, artist, albumArt } = data[key]
            return (
              <Song
                key={key}
                isSelected={selectedSong === key}
                isFavorited={!!favoritesMap[key]}
                handleSelectSong={() => handleSelectSong(key)}
                handleFavorite={() => handleFavorite(key)}
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

export default AllSongs
