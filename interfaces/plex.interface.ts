export interface Stream {
  id: number;
  streamType: number;
  default: boolean;
  codec: string;
  index: number;
  bitrate: number;
  bitDepth: number;
  chromaLocation: string;
  chromaSubsampling: string;
  codedHeight: number;
  codedWidth: number;
  frameRate: number;
  hasScalingMatrix: boolean;
  height: number;
  level: number;
  profile: string;
  refFrames: number;
  streamIdentifier: string;
  width: number;
  displayTitle: string;
  extendedDisplayTitle: string;
  selected?: boolean;
  channels?: number;
  audioChannelLayout: string;
  samplingRate?: number;
}

export interface Part {
  id: number;
  key: string;
  duration: number;
  file: string;
  size: number;
  audioProfile: string;
  container: string;
  has64bitOffsets: boolean;
  optimizedForStreaming: boolean;
  videoProfile: string;
  Stream: Stream[];
}

export interface Media {
  id: number;
  duration: number;
  bitrate: number;
  width: number;
  height: number;
  aspectRatio: number;
  audioChannels: number;
  audioCodec: string;
  videoCodec: string;
  videoResolution: string;
  container: string;
  videoFrameRate: string;
  optimizedForStreaming: number;
  audioProfile: string;
  has64bitOffsets: boolean;
  videoProfile: string;
  Part: Part[];
}

export interface Genre {
  id: number;
  filter: string;
  tag: string;
}

export interface Director {
  id: number;
  filter: string;
  tag: string;
}

export interface Writer {
  id: number;
  filter: string;
  tag: string;
}

export interface Producer {
  id: number;
  filter: string;
  tag: string;
}

export interface Country {
  id: number;
  filter: string;
  tag: string;
}

export interface Guid {
  id: string;
}

export interface Role {
  id: number;
  filter: string;
  tag: string;
  role: string;
  thumb: string;
}

export interface Metadata {
  ratingKey: string;
  key: string;
  guid: string;
  studio: string;
  type: string;
  title: string;
  librarySectionTitle: string;
  librarySectionID: number;
  librarySectionKey: string;
  contentRating: string;
  summary: string;
  rating: number;
  audienceRating: number;
  viewOffset: number;
  lastViewedAt: number;
  year: number;
  tagline: string;
  thumb: string;
  art: string;
  duration: number;
  originallyAvailableAt: string;
  addedAt: number;
  updatedAt: number;
  audienceRatingImage: string;
  ratingImage: string;
  Media: Media[];
  Genre: Genre[];
  Director: Director[];
  Writer: Writer[];
  Producer: Producer[];
  Country: Country[];
  Guid: Guid[];
  Role: Role[];
}

export interface MediaContainer {
  size: number;
  allowSync: boolean;
  identifier: string;
  librarySectionID: number;
  librarySectionTitle: string;
  librarySectionUUID: string;
  mediaTagPrefix: string;
  mediaTagVersion: number;
  Metadata: Metadata[];
  Hub: Hub[];
}

export interface Hub {
  hubKey: string;
  key: string;
  title: string;
  type: string;
  hubIdentifier: string;
  context: string;
  size: number;
  more: boolean;
  style: string;
  Metadata: Metadata[];
}
