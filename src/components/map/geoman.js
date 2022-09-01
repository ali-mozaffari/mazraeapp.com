import { useEffect } from "react";
import { useLeafletContext } from "@react-leaflet/core";
import "@geoman-io/leaflet-geoman-free";
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";

const Geoman = () => {
  const context = useLeafletContext();

  useEffect(() => {
    const leafletContainer = context.layerContainer || context.map;
    leafletContainer.pm.setLang("fa");

    leafletContainer.pm.addControls({
      drawMarker: false,
      drawCircle: false,
      rotateMode: false,
      drawCircleMarker: false,
      drawRectangle: false,
      drawPolyline: false,
      optionsControls: true,
    });

    leafletContainer.pm.setGlobalOptions({
      pmIgnore: false,
      measurements: {
        measurement: true,
        displayFormat: "metric",
        showTooltip: true,
        showTooltipOnHover: true,
        totalLength: true,
        segmentLength: true,
        area: true,
        radius: true,
        perimeter: true,
        height: true,
        width: true,
        coordinates: true,
      },
    });

    // leafletContainer.pm.setGlobalOptions({ pmIgnore: false });

    leafletContainer.on("pm:create", (e) => {
      if (e.layer && e.layer.pm) {
        const shape = e;
        console.log(e);

        // enable editing of circle
        shape.layer.pm.enable();

        console.log(`object created: ${shape.layer.pm.getShape()}`);
        // console.log(leafletContainer.pm.getGeomanLayers(true).toGeoJSON());
        leafletContainer.pm
          .getGeomanLayers(true)
          .bindPopup("i am whole")
          .openPopup();
        leafletContainer.pm
          .getGeomanLayers()
          .map((layer, index) => layer.bindPopup(`I am figure N° ${index}`));
        shape.layer.on("pm:edit", (e) => {
          const event = e;
          // console.log(leafletContainer.pm.getGeomanLayers(true).toGeoJSON());
        });
      }
    });

    leafletContainer.on("pm:remove", (e) => {
      console.log("object removed");
      // console.log(leafletContainer.pm.getGeomanLayers(true).toGeoJSON());
    });

    return () => {
      leafletContainer.pm.removeControls();
      leafletContainer.pm.setGlobalOptions({ pmIgnore: true });
    };
  }, [context]);

  return null;
};

export default Geoman;
