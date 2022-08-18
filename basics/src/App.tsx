import { TextBox } from './components/TextBox';
import { useState } from 'react';
import { Global } from './globalStyle'
import { AppRoutes } from './Routes'

function App() {
  return (
    <>
      <AppRoutes />
      <Global />
    </>
  )
}

export default App
