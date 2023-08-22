import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routing/appRouter";

function App() {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}

export default App;
