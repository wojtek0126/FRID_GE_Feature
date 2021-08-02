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
import SuccesDenyBox from './components/containers/SuccesDenyBox'
import ConfirmBox from './components/containers/ConfirmBox'
import EditUserDetails from './components/containers/EditUserDetails'
import UserName from './components/containers/UserName'
import BasketList from './components/containers/BasketList'
import BasketItem from './components/containers/BasketItem'
import BasketTotals from './components/containers/BasketTotals'
import StandardText from './components/atoms/StandardText'
import ButtonPrimary from './components/atoms/ButtonPrimary'


function App() {
  return (
   
      <ThemeProvider theme={theme}>
        {
          <MainContainerA content={
            <ItemContainerA content={
              <>
                <Header content={
                  <StandardText content={'Hello shop!'} />
                } />    
                <Nav content={                
                              <>                             
                              <About content={'About us'} />
                              <Register content={
                                     <>
                                    <StandardText content={'Register'} />
                                    <Form content={
                                      <>
                                      Register form
                                      <ButtonPrimary content={'Submit'} />
                                      </>
                                    } />
                                    <SuccesDenyBox content={
                                      <>
                                    <Success content={
                                        <>
                                        Success
                                        <ButtonPrimary content={'Close'} />
                                        </>
                                    } />
                                    <Deny content={
                                        <>
                                        Deny
                                        <ButtonPrimary content={'Close'} />
                                        </>
                                    } />
                                      </>
                                    } />
                                
                                  </>
                                  } />    
                                <Login content={
                                     <>
                                    <StandardText content={'Login'} />
                                    <Form content={
                                       <>
                                       Login form
                                       <ButtonPrimary content={'Submit'} />
                                       </>
                                    } />
                                    <SuccesDenyBox content={
                                      <>
                                    <Success content={
                                        <>
                                        Success
                                        <ButtonPrimary content={'Close'} />
                                        </>
                                    } />
                                    <Deny content={
                                        <>
                                        Deny
                                        <ButtonPrimary content={'Close'} />
                                        </>
                                    } />
                                      </>
                                    } />
                                
                                  </>
                                  } />                                                    
                               <Contact content={
                                     <>
                                    <StandardText content={'Contact'} />
                                    <Form content={
                                       <>
                                       Contact form
                                       <ButtonPrimary content={'Submit'} />
                                       </>
                                    } />
                                    <SuccesDenyBox content={
                                      <>
                                    <Success content={
                                        <>
                                        Success
                                        <ButtonPrimary content={'Close'} />
                                        </>
                                    } />
                                    <Deny content={
                                        <>
                                        Deny
                                        <ButtonPrimary content={'Close'} />
                                        </>
                                    } />
                                      </>
                                    } />                                
                                  </>
                                  } />                    
                                <AdminPanel content={
                                  'AdminPanel'
                                  } />  
                              </>
                } />  
                <Banner content={'Banner'} />
                <UserPanel content={
                  <>
                  <UserName content={'User name'} />
                   <Basket content={
                     <>
                     Basket
                     <BasketList content={
                       <>
                       Basket list
                       <BasketTotals content={'Total to pay'} />
                       <ButtonPrimary content={'To checkout'} />
                       <ButtonPrimary content={'Hide basket'} />
                       <BasketItem content={
                            <>
                            Item in basket
                            <ButtonPrimary content={'Remove item'} />
                            </>
                       } />
                       </>
                     } />
                     </>
                   } /> 
                   <Checkout content={'Checkout'} />  
                   <EditUserDetails content={
                                     <>
                                    <StandardText content={'Edit details'} />
                                    <Form content={
                                        <>
                                        User details form
                                        <ButtonPrimary content={'Submit'} />
                                        </>
                                    } />
                                    <ConfirmBox content={  <>
                                      Confirm
                                      <ButtonPrimary content={'Yes'} />
                                      <ButtonPrimary content={'No'} />
                                      </>} />
                                    <SuccesDenyBox content={
                                      <>
                                    <Success content={
                                         <>
                                         Success
                                         <ButtonPrimary content={'Close'} />
                                         </>
                                    } />
                                    <Deny content={
                                        <>
                                        Deny
                                        <ButtonPrimary content={'Close'} />
                                        </>
                                    } />
                                      </>
                                    } />
                                
                                  </>
                                  } />                     
                   <Logout content={
                                 <>
                                  <StandardText content={'Logout'} />
                                  <ConfirmBox content={  <>
                                      Confirm
                                      <ButtonPrimary content={'Yes'} />
                                      <ButtonPrimary content={'No'} />
                                      </>} />
                                  <Success content={
                                      <>
                                      Success
                                      <ButtonPrimary content={'Close'} />
                                      </>
                                  } />
                                 </>
                                  } /> 
                  </>
                } />
                <Searchbar content={'Searchbar'} />        
                <Filters content={'Filters'} />           
                <Fridge content={'Fridge/Shop'} />                    
                <Footer content={'Footer'} />  
              </>
             }/>
          }/>
        }
      </ThemeProvider>
   
  );
}

export default App;
