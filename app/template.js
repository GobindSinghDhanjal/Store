import Footer from "./components/Footer";
import AppBar from "./components/PrimaryAppBar";

export default function Template({ children }) {
  return (<div>
  <AppBar/>
  <div className="container">
  {children}
  </div>

  <Footer/>

  </div>);
}
