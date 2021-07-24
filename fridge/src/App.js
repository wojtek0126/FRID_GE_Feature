import './App.css';
import { ThemeProvider } from 'theme-ui'
import theme from './styles/theme'

function App() {
  return (
   
      <ThemeProvider theme={theme}>
        {
          <div className="App">
            Jezdem
          </div>
        }
      </ThemeProvider>
   
  );
}

export default App;
