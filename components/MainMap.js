import { MapContainer as LeafletMap, Marker, TileLayer } from "react-leaflet";
import styled from "styled-components";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { Stack } from "@mui/material";
import { useState, useEffect } from "react";

const blueIcon = new L.Icon({
	iconUrl: "../icons/blue_marker.png",

	shadowUrl:
		"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
	iconSize: [45, 51],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41],
});

function MainMap({ markerLocation }) {
	const [map, setMap] = useState(null);

	useEffect(() => {
		if (map) {
			//FIXME - flyTo not work!
			map.flyTo([markerLocation.lat, markerLocation.lon]);
		}
	}, [map, markerLocation]);

	return (
		<Stack>
			<StyledMapContainer center={[50.123, 8.234]} zoom={13} scrollWheelZoom>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>

				<Marker
					key={markerLocation.id}
					position={[markerLocation.lat, markerLocation.lon]}
					icon={blueIcon}
					whenCreated={setMap}
				/>
			</StyledMapContainer>
		</Stack>
	);
}

const StyledMapContainer = styled(LeafletMap)`
	height: 12rem;
	width: 23rem;
	margin: 0 auto;
`;

export default MainMap;
