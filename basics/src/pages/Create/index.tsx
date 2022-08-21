import * as C from './style'
import { Navbar } from './../../components/Navbar/index';

export const Create = () => {
  return (
    <>
      <Navbar />
      <C.Container>
          <C.ContainerTexts>
              <h1>Starting a project with <span>Vite</span></h1>
              <p>Just enter the folder where you want to create your project and type in the terminal the command: <span>yarn create vite</span> or <span>yarn create vite</span></p>
              <h2>Choose your <span>template</span></h2>
              <p>Vite will give you the option to use the most used frameworks on the market and also with <span>TypeScript</span> or not</p>
          </C.ContainerTexts>
            <C.ContainerImage>
              <img src="../../../public/setup.svg" alt="" />
          </C.ContainerImage>
      </C.Container>
    </>

  )
}