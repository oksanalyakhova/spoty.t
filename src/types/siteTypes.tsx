export interface IMainArtist {
  verified: boolean;
  bg: string;
  img: string;
  type: string;
  name: string;
  listeners: string;
}

export interface IOneRelease {
  id: string | number;
  src: string;
  url: string;
  year: string;
  name: string;
}

export interface IOneAlbum {
  id: string | number;
  src: string;
  year: string;
  name: string;
}

export interface IFriend {
  id: string | number;
  url: string;
  src: string;
  name: string;
}

export interface ITrack {
  id: string | number;
  src: string;
  title: string;
  isAdded: boolean;
  explicit: string;
  plays: string;
}

export interface IArtist {
  id: string | number;
  url: string;
  src: string;
  name: string;
}

export interface IAlbumTrack {
  id: string | number;
  title: string;
  featured?: string;
  featuredUrl?: string;
  isAdded: boolean;
  explicit: string;
  length: string;
  isTrend: boolean;
}
