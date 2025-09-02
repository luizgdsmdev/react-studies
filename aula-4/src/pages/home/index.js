import { Header } from "../../components/Header";
import { MainContent } from "../../components/MainContent";
import { DataProvider } from '../../context/DataContext';


function App() {
  return (
    <div className="App">
      <DataProvider>
        <Header />
        <MainContent />
      </DataProvider>
    </div>
  );
}

export default App;
