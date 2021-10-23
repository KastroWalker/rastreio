export type DeliveryRouteCity = {
  from: {
    city: String;
    state: String;
    location: String;
  };
  to: {
    city: String;
    state: String;
    location: String;
  };
};

export type DeliveryRouteCountry = {
  from: String;
  to: String;
};

export type TrackEvent = {
  description: String;
  updatedAt: String;
  time: String;
  location: String;
  typeEvent: String;
  router?: DeliveryRouteCity | DeliveryRouteCountry;
};
