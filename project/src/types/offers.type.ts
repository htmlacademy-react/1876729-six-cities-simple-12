export type Offers = {
  id: number;
  title: string;
  price: number;
  premium: boolean;
  typeApartment: string;
  photos: string;
  location: {
    title: string;
    latitude: number;
    longitude: number;
  };
}

export type offerArray = Offers[];
