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
        <Post username="patelso9" caption="WOW it works" imageurl="https://image.similarpng.com/very-thumbnail/2020/04/Instagram-logo-watercolor-social-media-icon-png.png" />
        <Post />
        <Post />
        <Post />

    </div>
  );
}

export default App;
