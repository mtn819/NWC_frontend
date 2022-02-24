import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

import './Map.css'
import VARIABLES from "../../config/.env.js";

mapboxgl.accessToken = VARIABLES.mapboxAccessToken;

const geojson = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'properties': {
                'message': 'Foo',
                'iconSize': [60, 60]
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-66.324462, -16.024695]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'message': 'Bar',
                'iconSize': [50, 50]
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-61.21582, -15.971891]
            }
        },
        {
            'type': 'Feature',
            'properties': {
                'message': 'Baz',
                'iconSize': [40, 40]
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-63.292236, -18.281518]
            }
        }
    ]
};

export default function Map({ map_data }) {
    const mapContainer = useRef(null);
    const map = useRef(null);

    const [lng, setLng] = useState(-95.36);
    const [lat, setLat] = useState(29.75);
    const [zoom, setZoom] = useState(4);

    useEffect(() => {
        //if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/light-v10',
            center: [lng, lat],
            zoom: zoom,
        });

        const nav = new mapboxgl.NavigationControl();
        map.current.addControl(nav, "top-right");

        if (map_data.length > 0) {
            map_data.forEach(function (point) {
                let geometry = point.location_of_residence_in1977;
                delete point.location_of_residence_in1977;
                let properties = point;
                let marker = { "type": "Feature", "geometry": geometry, "properties": properties }
                const el = document.createElement('div');
                el.className = 'marker';

                el.addEventListener('click', () => {
                    window.alert(marker.properties.first_name);
                });

                // Add markers to the map.
                new mapboxgl.Marker(el)
                    .setLngLat(marker.geometry.coordinates)
                    .addTo(map.current);
            });
        }
    }, [lng, lat, zoom, map_data]);

    return (
        <div className='map-area'>
            <div ref={mapContainer} className="map-container" />
            <div className="table-container">
                <table>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>State</th>
                    </tr>
                    {map_data.length > 0 && map_data.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.first_name}</td>
                                <td>{val.last_name}</td>
                                <td>{val.state}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </div>
    );
}

