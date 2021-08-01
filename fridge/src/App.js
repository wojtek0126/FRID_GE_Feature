import './App.css';
import { ThemeProvider } from 'theme-ui'
import theme from './styles/theme'
import MainContainerA from './components/containers/MainContainerA'
import ItemContainerA from './components/containers/ItemContainerA'
import Header from './components/containers/Header'
import Nav from './components/containers/Nav'
import Login from './components/containers/Login'
import Logout from './components/containers/Logout'
import Register from './components/containers/Register'
import AdminPanel from './components/containers/AdminPanel'
import Banner from './components/containers/Banner'
import Fridge from './components/containers/Fridge'
import Basket from './components/containers/Basket'
import Checkout from './components/containers/Checkout'
import Contact from './components/containers/Contact'
import About from './components/containers/About'
import Footer from './components/containers/Footer'
import Form from './components/containers/Form'
import Item from './components/containers/Item'
import Success from './components/containers/Success'
import Deny from './components/containers/Deny'
import Filters from './components/containers/Filters'
import Searchbar from './components/containers/Searchbar'
import UserPanel from './components/containers/UserPanel'


function App() {
  return (
   
      <ThemeProvider theme={theme}>
        {
          <MainContainerA content={
            <ItemContainerA content={
              <>
                <Header content={'Hello shop!'} />    
                <Nav content={                
                              <>
                              <About content={'About us'} />
                                <Register content={
                                  <>
                                    <Form content={
                                      'Register form'
                                    } />
                                  </>
                                  } />    
                                <Login content={
                                     <>
                                    <Form content={
                                      'Login form'
                                    } />
                                    <Success content={'Success'} />
                                    <Deny content={'Deny'} />
                                  </>
                                  } />                      
                                <Logout content={
                                 'Logout'
                                  } />                      
                                <Contact content={
                                      <>
                                      <Form content={
                                        'Contact form'
                                      } />
                                    </>
                                  } />                    
                                <AdminPanel content={
                                  'AdminPanel'
                                  } />  
                              </>
                } />  
                <Banner content={'Banner'} />
                <UserPanel content={'User panel'} />
                <Searchbar content={'Searchbar'} />        
                <Filters content={'Filters'} />           
                <Fridge content={'Fridge'} />   
                <Basket content={'Basket'} />  
                <Checkout content={'Checkout'} />  
                <Footer content={'Footer'} />  
              </>
             }/>
          }/>
        }
      </ThemeProvider>
   
  );
}

export default App;
