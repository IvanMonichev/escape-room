import { Icon, Marker } from 'leaflet';
import { useEffect, useRef } from 'react';

import useMap from '../../hooks/useMap';
import { Location, Offer } from '../../types/types';
import { URL_MARKER_ACTIVE, URL_MARKER_DEFAULT } from '../../utils/constant';

type MapBookingProps = {
  offers: Offer[];
  activeOffer: Offer;
  onClick: (offer: Offer) => void;
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

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_ACTIVE,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function MapBooking({ offers, activeOffer, onClick }: MapBookingProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, locationCity);

  const { id, location } = activeOffer;

  const handleSelectionClick = (offer: Offer) => {
    onClick(offer);
  };

  useEffect(() => {
    const markers: Marker[] = [];

    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({ lat: offer.location.coords[0], lng: offer.location.coords[1] });
        marker
          .setIcon(offer.id === id ? currentCustomIcon : defaultCustomMarker)
          .addTo(map)
          .on('click', () => handleSelectionClick(offer));
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
  }, [map, offers, activeOffer]);

  return (
    <div className='booking-map'>
      <div className='map'>
        <div className='map__container' ref={mapRef} />
      </div>
      <p className='booking-map__address'>Вы&nbsp;выбрали: {location.address}</p>
    </div>
  );
}

export default MapBooking;
