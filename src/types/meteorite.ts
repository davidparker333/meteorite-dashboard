export default interface Meteorite {
  id: string;
  name: string;
  nametype: string;
  mass?: string;
  year?: string;
  fall: string;
  reclat?: string;
  reclong?: string;
  geolocation?: {
    type: string;
    coordinates?: number[];
  };
}
