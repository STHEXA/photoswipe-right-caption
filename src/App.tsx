import "./App.css";
import PhotoSwipeGallery from "./components/PhotoSwipeGallery";
import { sampleImages } from "./data/sampleData";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>PhotoSwipe Gallery Demo</h1>
        <p>React + TypeScript + Vite で構築されたPhotoSwipeギャラリー</p>
      </header>

      <main className="app-main">
        <PhotoSwipeGallery
          images={sampleImages}
          galleryID="main-photoswipe-gallery"
        />
      </main>

      <footer className="app-footer">
        <p>© 2025 PhotoSwipe Gallery Demo</p>
      </footer>
    </div>
  );
}

export default App;
