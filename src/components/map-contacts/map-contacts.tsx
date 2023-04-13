import { Icon, Marker } from 'leaflet';
import { useEffect, useRef } from 'react';
import { URL_MARKER_DEFAULT } from '../../constant';
import useMap from '../../hooks/useMap';
import { Location } from '../../types/types';
import 'leaflet/dist/leaflet.css';

const locationOffice: Location = {
  latitude: 59.96832206412432,
  longitude: 30.31735949999995,
  zoom: 17,
};

const defaultCustomMarker = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function MapContacts(): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, locationOffice);

  useEffect(() => {
    if (map) {
      const marker = new Marker({
        lat: locationOffice.latitude,
        lng: locationOffice.longitude
      });

      marker.setIcon(defaultCustomMarker).addTo(map);
    }
  }, [map]);

  return (
    <div className="map__container" ref={mapRef}></div>
  );
}

export default MapContacts;
