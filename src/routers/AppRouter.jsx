
import { 
    BrowserRouter,
    Routes,
    Route
 } from 'react-router-dom';
import App from '../App';
import { Tasks } from '../Tasks';

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>

        <Route path='/' element={ <App /> } />
        <Route path='/task2' element={ <Tasks /> } />
    
    
        </Routes>
    </BrowserRouter>
  )
}
