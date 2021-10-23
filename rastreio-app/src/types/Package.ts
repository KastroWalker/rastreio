import { TrackEvent } from "./Track";

export type Package = {
  code: string;
  name: string;
  tracksEvent?: Array<TrackEvent>;
};
