import axios from "axios";
import {
  DeliveryRouteCity,
  DeliveryRouteCountry,
  TrackEvent,
} from "../../types/Track";

export const trackPackage = async (code: String) => {
  const result = await axios.post(
    "https://correios.contrateumdev.com.br/api/rastreio",
    {
      code,
      type: "LS",
    }
  );

  const eventsInformation: Array<TrackEvent> = [];

  const events = result.data["objeto"][0]["evento"];

  events.forEach((event: any) => {
    const typeUnit = event["unidade"]["tipounidade"];

    const trackEvent: TrackEvent = {
      description: event["descricao"],
      updatedAt: event["data"],
      time: event["hora"],
      location: "",
      typeEvent: event["tipo"],
    };

    if (event["tipo"] === "RO") {
      if (typeUnit === "País") {
        const deliveryRouter: DeliveryRouteCountry = {
          from: event["unidade"]["local"],
          to: event["destino"]["uf"],
        };
        trackEvent.router = deliveryRouter;
      } else {
        const deliveryRouter: DeliveryRouteCity = {
          from: {
            city: event["unidade"]["endereco"]["localidade"],
            state: event["unidade"]["uf"],
            location: event["unidade"]["local"],
          },
          to: {
            city: event["destino"][0]["endereco"]["localidade"],
            state: event["destino"][0]["uf"],
            location: event["destino"][0]["local"],
          },
        };
        trackEvent.router = deliveryRouter;
      }
    }

    if (typeUnit === "País") {
      trackEvent.location = `${event["unidade"]["local"]}`;
    } else {
      const city = event["unidade"]["endereco"]["localidade"];
      const state = event["unidade"]["uf"];
      trackEvent.location = `${city} - ${state}`;
    }

    eventsInformation.push(trackEvent);
  });

  return eventsInformation;
};
