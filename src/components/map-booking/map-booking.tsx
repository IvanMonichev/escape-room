import { Icon, Marker } from 'leaflet';
import { useEffect, useRef } from 'react';

import useMap from '../../hooks/useMap';
import { Location, Offer } from '../../types/types';
import { URL_MARKER_DEFAULT } from '../../utils/constant';

type MapBookingProps = {
  offers: Offer[];
};

const locationCity: Location = {
  latitude: 59.93111269914862,
  longitude: 30.351187856445268,
  zoom: 10,
};

const defaultCustomMarker = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function MapBooking({ offers }: MapBookingProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, locationCity);

  useEffect(() => {
    const markers: Marker[] = [];

    if (map) {
      offers.forEach(({ location }) => {
        const marker = new Marker({ lat: location.coords[0], lng: location.coords[1] });

        marker.setIcon(defaultCustomMarker).addTo(map);
        markers.push(marker);
      });
    }

    return () => {
      if (map) {
        markers.forEach((marker) => {
          map.removeLayer(marker);
        });
      }
    };
  }, [map, offers]);

  return (
    <div className='booking-map'>
      <div className='map'>
        <div className='map__container' ref={mapRef} />
      </div>
      <p className='booking-map__address'>Вы&nbsp;выбрали: наб. реки Карповки&nbsp;5, лит&nbsp;П, м. Петроградская</p>
    </div>
  );
}

export default MapBooking;
