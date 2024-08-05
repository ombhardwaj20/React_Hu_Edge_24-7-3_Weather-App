



import Forcast from "./components/Forcast";
import InputData from "./components/InputData";
import TempAndDetails from "./components/TempAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import { TopButtons } from "./components/TopButtons";
import getFormattedWeatherData from "./services/weatherService";

const App = () => {

  const getWeather=async()=>{
    const data=await getFormattedWeatherData( {q:"berlin"});
    console.log(data);
  };
  getWeather();

  return (
    <div className="mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br
     shadow-xl shadow-gray-400 from-cyan-600 to-blue-700">
      <TopButtons />
      <InputData />


      <TimeAndLocation />
      <TempAndDetails />
      <Forcast />
      <Forcast />
      </div>
  )
};

export default App;