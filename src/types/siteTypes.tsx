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
  added: boolean;
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
  added: boolean;
  explicit: string;
  length: string;
  trend: boolean;
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

interface ICurrentTrackMetaNames {
  name: string;
  url: string;
}

interface ICurrentTrackMeta {
  id: string | number;
  img: string;
  title: ICurrentTrackMetaNames;
  artist: ICurrentTrackMetaNames;
  added: boolean;
}

interface ICurrentTrack {
  src: string;
  meta: ICurrentTrackMeta;
}

interface IFindFriends {
  id: string | number;
  url: string;
  src?: string;
  name: string;
}

interface IUser {
  name: string;
  src: string;
}

interface IAccountMenu {
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
