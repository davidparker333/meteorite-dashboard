export default interface Meteorite {
  id: string;
  name: string;
  nametype: string;
  mass: number;
  year: string;
  fall: string;
  reclat: number;
  reclong: number;
  geolocation: {
    type: string;
    coordinates: number[];
  };
}
