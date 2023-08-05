import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import ListEmloyeeComponent from './components/ListEmloyeeComponent'
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import AddEmployeeCompoment from './components/AddEmployeeCompoment';
function App() {
    return ( 
        <div >
            <HeaderComponent/>
            <div className='container'>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' Component={ListEmloyeeComponent}></Route>
                        <Route path='/employees' Component={ListEmloyeeComponent}></Route>
                        <Route path='/add-Employee' Component={AddEmployeeCompoment}></Route>
                        <Route path='/edit-Employee/:id' Component={AddEmployeeCompoment}></Route>

                    </Routes>
                </BrowserRouter>
            </div>
            <FooterComponent/>
        </div>
    );
}

export default App;