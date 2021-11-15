import './App.css';
import Post from './Post';

function App() {
  return (
    <div className="app">

      {/* Header/Nav Bar */}
        <div className="app_header">
          <img
          className="app_headerImage"
          src="https://cdn.icon-icons.com/icons2/2699/PNG/512/instagram_logo_icon_170643.png"
          alt="Instagram Logo"
          />

        </div>
          
        <h1>Instagram Clone App </h1>
        <Post username="patelso9" caption="WOW it works" imageUrl="https://png.pngtree.com/element_our/md/20180524/md_5b072d393d61e.jpg" />
        <Post username="beanguy" caption="fire" imageUrl="https://image.similarpng.com/very-thumbnail/2020/04/Instagram-logo-watercolor-social-media-icon-png.png" />
        <Post username="thelazypkg" caption="sauce" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOmF3i8c1b2xsunnWJt289BtOaDjYdK4Qjtw&usqp=CAU" />

    </div>
  );
}

export default App;
