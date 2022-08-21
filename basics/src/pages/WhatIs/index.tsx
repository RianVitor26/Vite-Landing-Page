import * as C from './style'
import { Navbar } from './../../components/Navbar/index';


export const WhatIs = () => {
  return (
    <>
      <Navbar />
      <C.Container>
          <C.ContainerImage>
              <img src="../../../public/engine.svg" alt="" />
          </C.ContainerImage>
          <C.ContainerTexts>
              <h1>What is <span>Vite</span>?</h1>
              <p>Vite is a build tool that was initially developed for Vue. js. With the new update, Vite now supports most web frameworks. Vite provides native ESM source code.</p>
              <h2>An <span>alternative</span> solution</h2>
              <p>Vite is a fast and performant solution for building projects with the most used JavaScript frameworks.
                It is currently more advantageous to use it than create-react-app</p>
          </C.ContainerTexts>
      </C.Container>
    </>
  )
}
