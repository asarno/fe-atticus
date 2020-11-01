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

export interface SongDatabase {
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
      albumArt: "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/69/0f/1c/690f1c32-c65d-b4bc-457c-d2682766761b/00050087319175.rgb.jpg/170x170bb.png",
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
    albumArt: 'https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/b1/cc/c3/b1ccc3ca-cef3-b072-482b-cf53674a858c/886447315088.jpg/170x170bb.png',
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
    albumArt: "https://is4-ssl.mzstatic.com/image/thumb/Music114/v4/97/e6/70/97e670f6-361b-a23d-617a-52bafcd631cd/075679854247.jpg/170x170bb.png",
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