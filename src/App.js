import logo from './logo.svg';
import './App.css';
import 'fontsource-roboto';
import HideAppBar from './components/HideAppBar';
import SingleLineGridList from './components/SingleLineGridList';
import HorizontalLinearStepper from './components/HorizontalStepper'; 
import BadgeOverlap from './components/BadgeOverlap';
import InsetDividers from './components/InsetDividers'; 
import ImageAvatars from './components/ImageAvatars';

function App() {
  return (
    <div className="App">
      
     <HideAppBar/>
     <div className="avatar">
       <ImageAvatars/>
     </div>
     
     
     <div className="divider">
     <HorizontalLinearStepper/>
     
     
     </div>
     <div className="badgeInset">
       <div className="Badge">
        <BadgeOverlap/>
       </div>
       <div className="Inset">
         <InsetDividers/>
       </div>
       
       
     </div>
     <div style={{display: 'flex', paddingBottom: '50px', marginTop: '25px', marginBottom: '50px',  borderRight: '10px dashed #00FA9A', borderBottom: '10px dashed #00FA9A', marginLeft: '60px', marginRight: '50px', WebkitBorderBottomRightRadius: '2rem'}}>
     <SingleLineGridList/>
      <h2 style={{ position: 'relative', top: '150px', left: '-200px', width: '350px'}}>Success is about building a future.</h2>
     </div>
     
    </div>
  );
}

export default App;
