import { useState, useEffect } from "react";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";

export const BASE_DATA = "http://localhost:9000";

const App = () => {
  const [Data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(BASE_DATA);
      const json = await response.json();
      setData(json);
      setFilteredData(json); // Initialize filteredData with all data
      setLoading(false);
    } catch (error) {
      setError(error, 'Unable to fetch Data');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterData = (type) => {
    if (type === "all") {
      setFilteredData(Data);
    } else {
      const filtered = Data.filter((food) => food.type.toLowerCase() === type.toLowerCase());
      setFilteredData(filtered);
    }
  };

  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <NavBar filterData={filterData} />
      {filteredData.length > 0 ? <Hero data={filteredData} /> : <div>No data available</div>}
    </div>
  );
};

export default App;
