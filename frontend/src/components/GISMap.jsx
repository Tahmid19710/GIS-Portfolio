
import { useState } from "react";

import {
  MapContainer,
  TileLayer,
  LayersControl,
  CircleMarker,
  Popup,
  useMapEvents
} from "react-leaflet";

import {
  MapPin,
  Layers3,
  Crosshair,
  RotateCcw,
  Globe
} from "lucide-react";

import "leaflet/dist/leaflet.css";

function MapClickHandler({ onSelect }) {
  useMapEvents({
    click(event) {
      onSelect({
        lat: event.latlng.lat,
        lng: event.latlng.lng
      });
    }
  });

  return null;
}

function GISMap() {
  const [selectedPoint, setSelectedPoint] = useState(null);

  const resetSelection = () => {
    setSelectedPoint(null);
  };

  return (
    <>
      <style>{`
        .gis-dark-tiles {
          filter: invert(100%) hue-rotate(180deg)
                  brightness(90%) contrast(90%) saturate(75%);
        }

        .gis-map-wrapper {
          background: #101827;
          border-radius: 20px;
          overflow: hidden;
        }

        .gis-leaflet-map {
          width: 100%;
          height: 100%;
          background: #101827;
          z-index: 1;
        }

        .gis-leaflet-map .leaflet-control-zoom a {
          background: #111827;
          color: #34d399;
          border-color: rgba(52,211,153,.25);
        }

        .gis-leaflet-map .leaflet-control-zoom a:hover {
          background: #064e3b;
          color: white;
        }

        .gis-leaflet-map .leaflet-control-layers {
          background: rgba(11,20,32,.95);
          color: #e2e8f0;
          border: 1px solid rgba(52,211,153,.3);
          border-radius: 12px;
          padding: 10px;
        }

        .gis-leaflet-map .leaflet-control-layers label {
          color: #e2e8f0;
          font-size: 12px;
        }

        .gis-leaflet-map .leaflet-control-attribution {
          background: rgba(8,11,20,.85);
          color: #cbd5e1;
          font-size: 9px;
        }

        .gis-leaflet-map .leaflet-control-attribution a {
          color: #34d399;
        }

        .gis-leaflet-map .leaflet-popup-content-wrapper,
        .gis-leaflet-map .leaflet-popup-tip {
          background: #111827;
          color: white;
        }

        .gis-leaflet-map .leaflet-popup-content {
          font-size: 12px;
          line-height: 1.8;
        }

        .gis-info-card {
          background: rgba(255,255,255,.035);
          transition: border-color .3s ease, transform .3s ease;
        }

        .gis-info-card:hover {
          border-color: rgba(52,211,153,.4);
          transform: translateY(-3px);
        }

        @media (prefers-reduced-motion: reduce) {
          .gis-info-card {
            transition: none;
          }
        }

        html.light .gis-map-wrapper {
          border-color: #cbd5e1;
        }

        html.light .gis-info-card {
          background: #ffffff;
          border-color: #cbd5e1;
        }

        html.light .gis-info-card h3 {
          color: #0f172a;
        }

        html.light .gis-info-card p {
          color: #475569;
        }
      `}</style>

      <section
        id="gis-maps"
        className="relative min-h-screen bg-[#080b14] text-white px-5 md:px-8 py-12 md:py-16 scroll-mt-[76px] overflow-hidden"
      >

        {/* Background Effects */}

        <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-500/10 blur-[110px] rounded-full pointer-events-none" />

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/10 blur-[110px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl w-full mx-auto">

          {/* Heading */}

          <div className="text-center mb-8">

            <p className="text-emerald-400 text-xs font-bold tracking-[0.3em] uppercase">
              Explore Geospatial Data
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold mt-3">
              Interactive{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                GIS Map
              </span>
            </h2>

            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mt-4" />

            <p className="text-slate-400 text-sm mt-4 max-w-2xl mx-auto leading-7">
              Explore geographic locations, switch between different
              map layers, and interact with spatial coordinates.
            </p>

          </div>

          {/* Map Information */}

          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">

            <div className="flex items-center gap-2">

              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center">
                <Layers3 size={18} className="text-emerald-400" />
              </div>

              <div>
                <p className="text-sm font-bold text-white">
                  Geospatial Explorer
                </p>

                <p className="text-[10px] text-slate-500">
                  Interactive Web Mapping
                </p>
              </div>

            </div>

            <div className="flex items-center gap-2 text-[10px] text-emerald-300 bg-emerald-500/10 border border-emerald-400/20 rounded-full px-3 py-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Map Ready
            </div>

          </div>

          {/* Interactive Map */}

          <div className="gis-map-wrapper relative border border-emerald-400/20 shadow-2xl shadow-emerald-500/5">

            <div className="h-[260px] sm:h-[300px] md:h-[320px] lg:h-[340px] w-full">

              <MapContainer
                center={[23.6850, 90.3563]}
                zoom={7}
                scrollWheelZoom={true}
                zoomControl={true}
                className="w-full h-full gis-leaflet-map"
              >

                <LayersControl position="topright">

                  {/* Dark Map - No API Key Required */}

                  <LayersControl.BaseLayer
                    checked
                    name="Dark Map"
                  >

                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      className="gis-dark-tiles"
                      maxZoom={19}
                    />

                  </LayersControl.BaseLayer>

                  {/* Standard OpenStreetMap */}

                  <LayersControl.BaseLayer
                    name="OpenStreetMap"
                  >

                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      maxZoom={19}
                    />

                  </LayersControl.BaseLayer>

                  {/* Satellite Imagery */}

                  <LayersControl.BaseLayer
                    name="Satellite Imagery"
                  >

                    <TileLayer
                      attribution='Tiles &copy; Esri &mdash; Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community'
                      url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                      maxZoom={19}
                    />

                  </LayersControl.BaseLayer>

                </LayersControl>

                {/* Map Click Event */}

                <MapClickHandler onSelect={setSelectedPoint} />

                {/* Selected Location Marker */}

                {selectedPoint && (

                  <CircleMarker
                    center={[
                      selectedPoint.lat,
                      selectedPoint.lng
                    ]}
                    radius={9}
                    pathOptions={{
                      color: "#34d399",
                      fillColor: "#10b981",
                      fillOpacity: 0.8,
                      weight: 3
                    }}
                  >

                    <Popup>
                      <div>
                        <strong>Selected Location</strong>
                        <br />
                        Latitude: {selectedPoint.lat.toFixed(6)}
                        <br />
                        Longitude: {selectedPoint.lng.toFixed(6)}
                      </div>
                    </Popup>

                  </CircleMarker>

                )}

              </MapContainer>

            </div>

          </div>

          {/* Map Footer Information */}

          <div className="grid md:grid-cols-2 gap-4 mt-5">

            {/* Instructions */}

            <div className="gis-info-card rounded-2xl border border-white/10 p-5">

              <div className="flex items-center gap-2 mb-3">

                <Crosshair size={18} className="text-emerald-400" />

                <h3 className="text-sm font-bold text-white">
                  How to Explore
                </h3>

              </div>

              <p className="text-xs text-slate-400 leading-6">
                Click anywhere on the map to select a location.
                Its geographic coordinates will appear below.
                You can also drag the map, zoom in and out,
                and switch between available map layers.
              </p>

            </div>

            {/* Coordinates */}

            <div className="gis-info-card rounded-2xl border border-white/10 p-5">

              <div className="flex items-center justify-between mb-3">

                <div className="flex items-center gap-2">

                  <MapPin size={18} className="text-cyan-400" />

                  <h3 className="text-sm font-bold text-white">
                    Selected Coordinates
                  </h3>

                </div>

                {selectedPoint && (

                  <button
                    type="button"
                    onClick={resetSelection}
                    className="text-xs text-slate-400 hover:text-emerald-400 flex items-center gap-1 transition"
                  >

                    <RotateCcw size={13} />
                    Clear

                  </button>

                )}

              </div>

              {selectedPoint ? (

                <div className="grid grid-cols-2 gap-3">

                  <div className="bg-emerald-500/10 rounded-xl p-3">

                    <p className="text-[10px] text-emerald-400">
                      Latitude
                    </p>

                    <p className="text-sm font-bold text-white mt-1">
                      {selectedPoint.lat.toFixed(6)}
                    </p>

                  </div>

                  <div className="bg-cyan-500/10 rounded-xl p-3">

                    <p className="text-[10px] text-cyan-400">
                      Longitude
                    </p>

                    <p className="text-sm font-bold text-white mt-1">
                      {selectedPoint.lng.toFixed(6)}
                    </p>

                  </div>

                </div>

              ) : (

                <p className="text-xs text-slate-500 leading-6">
                  No location selected. Click anywhere on the map
                  to display geographic coordinates.
                </p>

              )}

            </div>

          </div>

          {/* Bottom Note */}

          <div className="flex justify-center items-center gap-2 mt-7">

            <Globe size={14} className="text-emerald-400" />

            <p className="text-[9px] tracking-[0.2em] text-slate-500 uppercase text-center">
              Interactive Mapping • Spatial Visualization • GIS Technology
            </p>

          </div>

        </div>

      </section>
    </>
  );
}

export default GISMap;
