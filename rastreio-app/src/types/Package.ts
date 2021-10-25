import { TrackEvent } from "./Track";

export type Package = {
  code: string;
  name: string;
  trackEvents?: Array<TrackEvent>;
};
