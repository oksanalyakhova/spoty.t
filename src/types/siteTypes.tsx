export interface IFriend {
  id: string | number;
  url: string;
  src?: string;
  name: string;
}

export interface ITrack {
  id: string | number;
  src: string;
  title: string;
  added: boolean;
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
  added: boolean;
  explicit: string;
  length: string;
  trend: boolean;
}

export interface IMainArtist {
  verified?: boolean;
  bg?: string;
  img?: string;
  type?: string;
  name?: string;
  listeners?: string;
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

export interface ICurrentTrackMetaNames {
  name: string;
  url: string;
}

export interface ICurrentTrackMeta {
  id: string | number;
  img: string;
  title: ICurrentTrackMetaNames;
  artist: ICurrentTrackMetaNames;
  added: boolean;
}

export interface ICurrentTrack {
  src: string;
  meta: ICurrentTrackMeta;
}

export interface IFindFriends {
  id: string | number;
  url: string;
  src?: string;
  name: string;
}

export interface IUser {
  name: string;
  src: string;
}

export interface IAccountMenu {
  id: string | number;
  url: string;
  text: string;
}

export interface ISiteTypes {
  friends: Array<IFriend>;
  tracks: Array<ITrack>;
  artists: Array<IArtist>;
  albumTracks: Array<IAlbumTrack>;
  artist: IMainArtist;
  oneRelease: IOneRelease;
  oneAlbum: IOneAlbum;
  currentTrack: ICurrentTrack;
  findFriends: Array<IFindFriends>;
  user: IUser;
  accountMenu: Array<IAccountMenu>;
}
