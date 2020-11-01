export interface AtticusSong {
  id: string;
  name: string;
  artist: string;
  album: string;
  duration: number;
  genre: string;
  trackNumber: number;
  discNumber: number;
  path: string;
  albumArt: string;
}

export interface PlaylistEntry {
  id: string;
  songs: Array<AtticusSong>;
}

interface PlaylistDatabase {
  [key: string]: PlaylistEntry;
}

interface SongDatabase {
  [key: string]: AtticusSong;
}

const songDB: SongDatabase = {
  1: {
      id: '1',
      name: 'Song 1',
      artist: 'Artist 1',
      album: 'Album 1',
      duration: 192,
      genre: 'Rock',
      trackNumber: 1,
      discNumber: 1,
      path: 'foo',
      albumArt: 'artist-1-album-1.jpg',
  },
  2: {
    id: '2',
    name: 'Song 2',
    artist: 'Artist 1',
    album: 'Album 1',
    duration: 292,
    genre: 'Rock',
    trackNumber: 2,
    discNumber: 1,
    path: 'bar',
    albumArt: 'artist-1-album-1.jpg',
  },
  3: {
    id: '3',
    name: 'Song 3',
    artist: 'Artist 2',
    album: 'Album 2',
    duration: 212,
    genre: 'Rock',
    trackNumber: 1,
    discNumber: 1,
    path: 'baz',
    albumArt: 'artist-2-album-2.jpg',
  },
};

const playlistDB: PlaylistDatabase = {
  1: {
    id: '1',
    songs: [songDB[1], songDB[3]],
  },
};


export default {
  songs: songDB,
  playlists: playlistDB,
};