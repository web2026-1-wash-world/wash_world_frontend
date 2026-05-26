"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const locations = [
  {
    name: "Wash World Aabenraa Egevej",
    position: [55.0656429, 9.3644501],
  },
  {
    name: "Wash World Aalborg Otto Mønstedsvej",
    position: [57.015248, 9.896256],
  },
  {
    name: "Wash World Aalborg Gug Gammel Vissevej",
    position: [57.00631387314069, 9.925946295261383],
  },
  {
    name: "Wash World Ballerup Industriparken",
    position: [55.728714, 12.373295],
  },
  {
    name: "Wash World Brande Vestergårdsvej",
    position: [55.960647, 9.103426],
  },
  {
    name: "Wash World Brøndby Strand Gl. Køge Landevej",
    position: [55.618231, 12.42395],
  },
  {
    name: "Wash World Ebeltoft Færgevejen",
    position: [56.1908092, 10.672123100000022],
  },
  {
    name: "Wash World Esbjerg Sædding Ringvej",
    position: [55.5037278, 8.40741920000005],
  },
  {
    name: "Wash World Farum Gammelgårdsvej",
    position: [55.816943, 12.37035],
  },
  {
    name: "Wash World Fredericia Strevelinsvej",
    position: [55.535519125891085, 9.718700051307678],
  },
  {
    name: "Wash World Fredericia Vejlevej",
    position: [55.5696911, 9.7276223],
  },
  {
    name: "Wash World Frederikshavn Apholmenvej",
    position: [57.46219325161582, 10.519448227310988],
  },
  {
    name: "Wash World Frederikssund Askelundsvej",
    position: [55.84515080248969, 12.074291110038757],
  },
  {
    name: "Wash World Frederiksværk Hanehovedvej",
    position: [55.9775589, 12.007447100000036],
  },
  {
    name: "Wash World Grenå Hesselvang",
    position: [56.3838951, 10.8644506],
  },
  {
    name: "Wash World Haderslev Sverigesvej",
    position: [55.2592112, 9.4741292],
  },
  {
    name: "Wash World Helsingør Klostermosevej",
    position: [56.024018, 12.571863],
  },
  {
    name: "Wash World Herlev Nørrelundvej",
    position: [55.725365, 12.416697],
  },
  {
    name: "Wash World Herning Dæmningen",
    position: [56.132141, 8.95935],
  },
  {
    name: "Wash World Herning Guldborgvej",
    position: [56.1535542, 8.9847445],
  },
  {
    name: "Wash World Hillerød Industrivænget",
    position: [55.931481, 12.282996],
  },
  {
    name: "Wash World Hjørring Sprogøvej",
    position: [57.455593834918346, 10.039465427398682],
  },
  {
    name: "Wash World Holbæk Springstrup",
    position: [55.70302615069463, 11.666091084480286],
  },
  {
    name: "Wash World Holstebro Nybo Bakke",
    position: [56.341889, 8.635395],
  },
  {
    name: "Wash World Horsens Vejlevej",
    position: [55.833085, 9.804744],
  },
  {
    name: "Wash World Højbjerg Bjødstrupvej",
    position: [56.107525, 10.166967],
  },
  {
    name: "Wash World Ikast Europavej",
    position: [56.1236985, 9.1754224],
  },
  {
    name: "Wash World Ishøj Vejleåvej",
    position: [55.62338454215139, 12.321166813346327],
  },
  {
    name: "Wash World Kalundborg Holbækvej",
    position: [55.678767, 11.13583],
  },
  {
    name: "Wash World Kolding Vejlevej 132",
    position: [55.5040386, 9.4582265],
  },
  {
    name: "Wash World Kolding Vejlevej 251",
    position: [55.5136635, 9.4546968],
  },
  {
    name: "Wash World Køge Københavnsvej",
    position: [55.471805, 12.181953],
  },
  {
    name: "Wash World Lystrup Lægårdsvej",
    position: [56.225669, 10.238525],
  },
  {
    name: "Wash World Middelfart Skovsvinget",
    position: [55.51201276139861, 9.766180515289307],
  },
  {
    name: "Wash World Nakskov Løjtoftevej",
    position: [54.832475, 11.149662],
  },
  {
    name: "Wash World Nyborg Storebæltsvej",
    position: [55.30849794548207, 10.809624195098877],
  },
  {
    name: "Wash World Nykøbing Falster Guldborgsundcentret",
    position: [54.75880136632285, 11.851437091827393],
  },
  {
    name: "Wash World Næstved Erantisvej",
    position: [55.2391725675618, 11.777976751327515],
  },
  {
    name: "Wash World Næstved Gl. Holstedvej",
    position: [55.2496811, 11.78203099999996],
  },
  {
    name: "Wash World Nørresundby Loftbrovej",
    position: [57.0891424, 9.969241],
  },
  {
    name: "Wash World Odense Nyborgvej",
    position: [55.3915296, 10.4358192],
  },
  {
    name: "Wash World Odense SØ Ørbækvej",
    position: [55.379874, 10.433066],
  },
  {
    name: "Wash World Odense V Bystævnevej",
    position: [55.39502570059316, 10.346524715423584],
  },
  {
    name: "Wash World Randers Messingvej",
    position: [56.4303617229258, 10.0538152456284],
  },
  {
    name: "Wash World Randers Udbyhøjvej",
    position: [56.4660468156823, 10.0542497634888],
  },
  {
    name: "Wash World Ribe Trojels Knæ",
    position: [55.351485, 8.780311],
  },
  {
    name: "Wash World Ringsted Frejasvej",
    position: [55.4306693073554, 11.8014192581177],
  },
  {
    name: "Wash World Ringsted Nørregade",
    position: [55.4513920571404, 11.7900815606117],
  },
  {
    name: "Wash World Risskov Ravnsøvej",
    position: [56.202062, 10.24449],
  },
  {
    name: "Wash World Roskilde Byleddet",
    position: [55.64370949464964, 12.109114229679108],
  },
  {
    name: "Wash World Roskilde Ringstedvej",
    position: [55.62842689768946, 12.066559455701054],
  },
  {
    name: "Wash World Silkeborg Nordre Ringvej",
    position: [56.18141297417625, 9.536954224330657],
  },
  {
    name: "Wash World Skive Øster Fælled vej",
    position: [56.5615666, 9.0395673],
  },
  {
    name: "Wash World Slagelse Idagårdsvej",
    position: [55.391735306335, 11.3530021905899],
  },
  {
    name: "Wash World Slagelse Smedegade",
    position: [55.4076850708224, 11.3678455352783],
  },
  {
    name: "Wash World Sorø Apotekervej",
    position: [55.4451368200078, 11.5632551908493],
  },
  {
    name: "Wash World Struer Bredgade",
    position: [56.4804348648646, 8.58553517739368],
  },
  {
    name: "Wash World Svendborg Nyborgvej",
    position: [55.06289309338622, 10.618591904640198],
  },
  {
    name: "Wash World Svendborg Odensevej",
    position: [55.07294981427255, 10.582398176193237],
  },
  {
    name: "Wash World Søborg Dynamovej",
    position: [55.73373131910534, 12.459960579872131],
  },
  {
    name: "Wash World Sønderborg Centerpassagen",
    position: [54.91943029999999, 9.80803400000002],
  },
  {
    name: "Wash World Taastrup Roskildevej",
    position: [55.6580371, 12.2947118],
  },
  {
    name: "Wash World Thisted Østerbakken",
    position: [56.968852, 8.735134],
  },
  {
    name: "Wash World Tilst Blomstervej",
    position: [56.181787, 10.125],
  },
  {
    name: "Wash World Tønder Centerbuen",
    position: [54.9515046423977, 8.88779997825623],
  },
  {
    name: "Wash World Vejle Soldalen",
    position: [55.681238105582004, 9.567455649375916],
  },
  {
    name: "Wash World Vejle Solkilde Allé",
    position: [55.72345860000001, 9.584777799999983],
  },
  {
    name: "Wash World Viborg Falkevej",
    position: [56.444161, 9.388456],
  },
  {
    name: "Wash World Viborg Vognmagervej",
    position: [56.4693657582102, 9.4094306230545],
  },
  {
    name: "Wash World Viby Gunnar Clausens vej",
    position: [56.111373, 10.125033],
  },
  {
    name: "Wash World Vordingborg Valdemarsgade",
    position: [55.010855159280844, 11.910488605499268],
  },
];

const customIcon = L.icon({
  iconUrl: "/images/wicon.svg", // your image in /public
  iconSize: [20, 20], // width, height
  iconAnchor: [10, 10], // point of the icon which corresponds to marker's location
  popupAnchor: [0, 0], // where the popup opens relative to iconAnchor
});

export default function Map() {
  return (
    <MapContainer
      center={[55.2, 12]} // Centrerer zoomet på hovedstadsområdet
      zoom={8}
      scrollWheelZoom={true}
      zoomControl={false}
      className="h-screen w-full"
    >
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/stamen_toner_dark/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        minZoom={0}
        maxZoom={20}
        />

      {locations.map((location, index) => (
        <Marker
          key={index}
          position={location.position as [number, number]}
          icon={customIcon}
        >
        <Popup
            className="custom-popup"
            closeButton={false}
            offset={[0, -10]}
            >
            <div className="px-1 py-1 text-sm font-medium text-[var(--color-brand-green)]">
                {location.name}
            </div>
        </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}