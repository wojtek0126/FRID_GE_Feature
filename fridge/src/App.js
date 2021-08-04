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
import ShopItem from './components/containers/ShopItem'
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
import OrderTotal from './components/containers/OrderTotal'
import OptionBox from './components/containers/OptionBox'
import StoreCanvas from './components/containers/StoreCanvas'
import ShopItemImage from './components/containers/ShopItemImage'
import StandardText from './components/atoms/StandardText'
import ButtonPrimary from './components/atoms/ButtonPrimary'
import ButtonSearch from './components/atoms/ButtonSearch'
import InputField from './components/atoms/InputField'


function App() {
  return (
   
      <ThemeProvider theme={theme}>
        {
          <MainContainerA content={
            <ItemContainerA content={
              <>
                <Header content={
                  'Hello shop!'
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
                  <UserName content={'Welcome logged user'} />
                   <Basket content={
                     <>
                     <StandardText content={'Basket'} />
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
                   <Checkout content={
                     <>
                      <StandardText content={'Checkout'} />
                      <OrderTotal content={'Order total'} />
                      <Form content={
                                       <>
                                       Checkout form
                                       <ButtonPrimary content={'Go to payment'} />
                                       <ButtonPrimary content={
                                         <>
                                         Back to basket
                                         <ConfirmBox content={  <>
                                      Confirm
                                      <ButtonPrimary content={'Yes'} />
                                      <ButtonPrimary content={'No'} />
                                      </>} />
                                         </>
                                       } />
                                       </>
                                    } />                
                     </>
                   } />  
                   <EditUserDetails content={
                                     <>
                                    <StandardText content={'Edit user'} />                                  
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
                <Searchbar content={
                  <>                 
                  <InputField content={'Input field'} />
                  <ButtonSearch content={'Search button'} />
                  </>
                } />        
                <Filters content={
                  <>
                    <OptionBox content={'Fresh, packed, frozen'} />
                    <OptionBox content={'Fruit, Veg, Ice cream, Drinks, Ice cubes, other'} />
                    <OptionBox content={'Lowest price, Longest use date'} />
                  </>
                } />           
                <Fridge content={
                  <>
                    <StoreCanvas content={
                      <>Store canvas: shelves or fridge
                        <ShopItem content={
                          <>Shop item
                            <ShopItemImage content={'Item image'} />
                            <ButtonPrimary content={'Item description and price'} />
                            <ButtonPrimary content={'Add to cart'} />
                            <ButtonPrimary content={'Go to cart'} />
                          </>
                        } />
                      </>
                      } />
                  </>
                } />                    
                <Footer content={'Footer'} />  
              </>
             }/>
          }/>
        }
      </ThemeProvider>
   
  );
}

export default App;
