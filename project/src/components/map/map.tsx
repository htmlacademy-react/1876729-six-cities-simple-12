import {useRef, useEffect} from 'react';
import 'leaflet/dist/leaflet.css';
import {Icon, Marker} from 'leaflet';
import useMap from '../../hooks/useMap';
import {City} from '../../types/map.type';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../mocks/const';
import {offerArray, Offers} from '../../types/offers.type';


type MapProps = {
  city: City;
  points: offerArray;
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

function Map(props: MapProps): JSX.Element {
  const {city, points, selectedPoint} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
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
  }, [map, points, selectedPoint]);

  return (
    <div style={{height: '100%'}} ref={mapRef}></div>
  );
}

export default Map;
