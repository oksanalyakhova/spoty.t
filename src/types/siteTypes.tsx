interface IFriend {
  id: string | number;
  url: string;
  src: string;
  name: string;
}

interface ITrack {
  id: string | number;
  src: string;
  title: string;
  isAdded: boolean;
  explicit: string;
  plays: string;
}

interface IArtist {
  id: string | number;
  url: string;
  src: string;
  name: string;
}

interface IAlbumTrack {
  id: string | number;
  title: string;
  featured?: string;
  featuredUrl?: string;
  isAdded: boolean;
  explicit: string;
  length: string;
  isTrend: boolean;
}

interface IMainArtist {
  verified: boolean;
  bg: string;
  img: string;
  type: string;
  name: string;
  listeners: string;
}

interface IOneRelease {
  id: string | number;
  src: string;
  url: string;
  year: string;
  name: string;
}

interface IOneAlbum {
  id: string | number;
  src: string;
  year: string;
  name: string;
}

export interface ISiteTypes {
  friends: Array<IFriend>;
  tracks: Array<ITrack>;
  artists: Array<IArtist>;
  albumTracks: Array<IAlbumTrack>;
  artist: IMainArtist;
  oneRelease: IOneRelease;
  oneAlbum: IOneAlbum;
}
