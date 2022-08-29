import { useState } from 'react';
import './App.css';
import ImagesList from './components/ImagesList';
import SearchBar from './components/SearchBar';
import {ImageSearchService} from './service/ImageSearchService'

function App() {

  const [images, setImages] = useState([])

  const onFormSubmit = (search) => {
    setImages([])
    ImageSearchService.getImages(search)
    .then(response => setImages(response.data.results))
  }

  return (
    <div className="App ui container">
      <SearchBar onFormSubmit={onFormSubmit}/>
      <ImagesList images={images}/>
    </div>
  );
}

export default App;
