import React, {useState, useEffect} from 'react';
import Header from '../Header/Header';
import axios from 'axios';
import WidgetInfo from '../WidgetInfo/WidgetInfo';

const BASE_URL = 'http://13.232.99.42:80';
const GET_HIGHLIGHT = '/get_highlight';
const GET_BUYER = '/get_buyer';
const GET_INCOME = '/get_income';
const GET_COUNTRY = '/get_country';

const App:React.FC = () => {
  const [highLightData, setHighLightData] = useState({});
  const [buyerData, setBuyerData] = useState({});
  const [incomeData, setIncomeData] = useState({});
  const [countryData, setCountryData] = useState({});
  
  const getHighLights = () => {
    axios.get(`${BASE_URL}${GET_HIGHLIGHT}`).then((res) => {
      setHighLightData(res.data);
    });
  }

  const getBuyers = () => {
    axios.get(`${BASE_URL}${GET_BUYER}`).then((res) => {
      setBuyerData(res.data);
    });
  }
  const getIncome = () => {
    axios.get(`${BASE_URL}${GET_INCOME}`).then((res) => {
      setIncomeData(res.data);
    });
  }
  const getCountries = () => {
    axios.get(`${BASE_URL}${GET_COUNTRY}`).then((res) => {
      setCountryData(res.data);
    });
  }

  useEffect(() => {
    getHighLights();
    getBuyers();
    getIncome();
    getCountries();
  }, []);
  
  return (
    <div className="app">
      <Header
        title="ABC College of engineering"
        downloadText="Download Postman Collection"
      />
      <WidgetInfo
        title="Highlights"
        widgetData={highLightData}
        url={`${BASE_URL}${GET_HIGHLIGHT}`}
      />
      <WidgetInfo
        title="Buyers"
        widgetData={buyerData}
        url={`${BASE_URL}${GET_BUYER}`}
      />
      <WidgetInfo
        title="Countries"
        widgetData={countryData}
        url={`${BASE_URL}${GET_COUNTRY}`}
      />
      <WidgetInfo
        title="Income"
        widgetData={incomeData}
        url={`${BASE_URL}${GET_INCOME}`}
      />
    </div>
  );
}

export default App;
