"use client";

import { useEffect, useRef } from "react";
import type { Map as LeafletMap } from "leaflet";

const accraCoordinates: [number, number] = [5.6037, -0.1870];

export function LeafletLocationMap() {
  const mapElementRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function initializeMap() {
      const leaflet = await import("leaflet");

      if (!isMounted || !mapElementRef.current || mapRef.current) {
        return;
      }

      const markerIcon = leaflet.icon({
        iconUrl: "/leaflet/marker-icon.png",
        iconRetinaUrl: "/leaflet/marker-icon-2x.png",
        shadowUrl: "/leaflet/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });

      const map = leaflet.map(mapElementRef.current, {
        center: accraCoordinates,
        zoom: 13,
        scrollWheelZoom: true
      });

      leaflet
        .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 19
        })
        .addTo(map);

      leaflet
        .marker(accraCoordinates, { icon: markerIcon })
        .addTo(map)
        .bindPopup("Nexcore — Accra, Ghana")
        .openPopup();

      mapRef.current = map;
      window.setTimeout(() => map.invalidateSize(), 0);
    }

    initializeMap();

    return () => {
      isMounted = false;
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div
      ref={mapElementRef}
      aria-label="Interactive OpenStreetMap map centered on Accra, Ghana"
      className="relative z-0 h-80 min-h-80 w-full rounded-lg"
    />
  );
}
