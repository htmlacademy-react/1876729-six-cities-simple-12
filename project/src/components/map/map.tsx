import {useRef, useEffect} from 'react';
import 'leaflet/dist/leaflet.css';
import {Icon, Marker} from 'leaflet';
import useMap from '../../hooks/useMap';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../mocks/const';
import {Offers} from '../../types/offers.type';
import {useAppSelector} from '../../hooks';
import {cities} from '../../mocks/cities';
import {City} from '../../types/map.type';


type MapProps = {
  selectedPoint: Offers | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [30, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [30, 40],
  iconAnchor: [20, 40]
});

function Map({selectedPoint}: MapProps): JSX.Element {
  const cityState = useAppSelector((state: unknown) => (state as {city: string}).city);
  const cityObj = cities.find((item) => item.title === cityState);

  const mapRef = useRef(null);
  const map = useMap(mapRef, cityObj as City);

  useEffect(() => {
    if (map) {
      cityObj?.offers.forEach((point) => {
        // eslint-disable-next-line no-console
        console.log(cityObj);
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude
        });

        marker
          .setIcon(
            selectedPoint !== undefined && point.title === selectedPoint.title
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, cityObj?.offers, selectedPoint]);

  return (
    <div style={{height: '100%'}} ref={mapRef}></div>
  );
}

export default Map;
