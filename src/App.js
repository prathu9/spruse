import Header from './components/header/header.component';
import BookingCounter from './components/booking-counter/booking-counter.component';

import './App.css';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div className="App">
      <Header/>
      <BookingCounter/>
      <Footer/>
    </div>
  );
}

export default App;
