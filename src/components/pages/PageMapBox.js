import MapBox from "../MapBox";
import { useState, useEffect } from "react";
import axios from "axios";

export default function PageMapBox() {
  const [data, setData] = useState([]);

  const dataMarker = async () => {
    let marker = await axios.get(`http://localhost:4000/marker`);
    setData(marker.data);
  };
  useEffect(() => {
    dataMarker();
  }, []);
  return (
    <div>
      <MapBox mapDatas={data} />
    </div>
  );
}
