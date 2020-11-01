import { uuid } from 'uuidv4';
import dbs from './db';
import { AtticusSong, PlaylistEntry } from './db';

const { songs } = dbs;
const { playlists } = dbs;

async function getSong(songId: string): Promise<AtticusSong> {
  return Promise.resolve(songs[songId]);
}

async function createSong(newSongAttributes: AtticusSong): Promise<string> {
  const songId = uuid();
  songs[songId] = newSongAttributes;

  return Promise.resolve(songId);
}

async function updateSong(songId: string, newSongAttributes: AtticusSong): Promise<boolean> {
  const newSong = Object.assign({}, songs[songId], newSongAttributes);
  songs[songId] = newSong;

  return Promise.resolve(true);
}

async function getPlaylist(playlistId: string): Promise<PlaylistEntry> {
  return Promise.resolve(playlists[playlistId]);
}

async function createPlaylist(playlistAttributes: PlaylistEntry): Promise<string> {
  const playlistId = uuid();
  playlists[playlistId] = playlistAttributes;

  return Promise.resolve(playlistId);
}

async function updatePlaylist(playlistId: string, newPlaylistAttributes: PlaylistEntry): Promise<boolean> {
  const newPlaylist = Object.assign({}, playlists[playlistId], newPlaylistAttributes);
  playlists[playlistId] = newPlaylist;

  return Promise.resolve(true);
}

async function playSong(songPath: string): Promise<boolean> {
  return Promise.resolve(true);
}

export default {
  song: {
    createSong,
    getSong,
    playSong,
    updateSong,
  },
  playlist: {
    createPlaylist,
    getPlaylist,
    updatePlaylist,
  },
};