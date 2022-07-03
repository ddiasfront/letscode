import BoardComponent from "./components/board-component/board-component";
import CardsProvider, { CardsContext }  from "./contexts/cards-context";
import { GlobalStyle } from "./global-styles";

function App() {
  return (
    <CardsProvider>
        <GlobalStyle />
        <BoardComponent />
    </CardsProvider>
  );
}

export default App;
