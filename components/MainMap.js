import {
	MapContainer as LeafletMap,
	useMap,
	Marker,
	TileLayer,
} from "react-leaflet";
import styled from "styled-components";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const startPosition = {
	id: uuidv4(),
	name: "Platja de la Malva-rosa",
	lat: 39.476,
	lon: -0.323,
};

const targetPosition = {
	id: uuidv4(),
	name: "Frankfurt am Main",
	lat: 50.1109,
	lon: 8.6821,
};

const blueIcon = new L.Icon({
	iconUrl: "../icons/blue_marker.png",
	shadowUrl:
		"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
	iconSize: [45, 51],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41],
});

function MainMap() {
	function InnerMap() {
		const map = useMap();

		useEffect(() => {
			if (map) {
				map.flyTo([targetPosition.lat, targetPosition.lon]);
			}
		}, [map]);

		return null;
	}

	return (
		<StyledMapContainer
			center={[startPosition.lat, startPosition.lon]}
			zoom={13}
			scrollWheelZoom
			duration={0.5}
			animate={true}
			easeLinearity={0.25}
			noMoveStart={true}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>

			<Marker
				key={targetPosition.id}
				position={[targetPosition.lat, targetPosition.lon]}
				icon={blueIcon}
			/>
			<InnerMap />
		</StyledMapContainer>
	);
}

const StyledMapContainer = styled(LeafletMap)`
	height: 12rem;
	width: 23rem;
	margin: 0 auto;
`;

export default MainMap;
