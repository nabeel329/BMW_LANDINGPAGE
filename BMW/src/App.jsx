import React from 'react'
import './App.css'
import Header from './Components/Header'
import ImagesSection from './Components/imagesSection'
import InfoDisplay from './Components/InfoDisplay'
import InfoDisplayReversed from './Components/InfoDisplayReversed'
import BMWPodcast from './Components/BMWPodcast'
import PictureGallery from './Components/PictureGallery'
import PageFooter from './Components/PageFooter'

const App = () => {
  return (
    <div>
     <Header />
    <ImagesSection /> 
     <InfoDisplay /> 
    <InfoDisplayReversed />
    <BMWPodcast /> 
    <PictureGallery />
    <PageFooter />
    </div>
  )
}

export default App
