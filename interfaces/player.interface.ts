export interface PlayerProp {
  playlist: Playlist;
}

export type Playlist = {
  title: string;
  description: string;
  sources: MediaSource[];
  image?: string;
  tracks: TrackSource[];
};

type MediaSource = {
  file: string;
  type?: string;
  label: '1080p' | '720p';
  default?: boolean;
};

type TrackSource = {
  file: string;
  label: string;
  kind: 'subtitles' | 'captions';
};
