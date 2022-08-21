import * as C from './style'

export const Header = () => {
  return (
      <C.Container>
        <C.TextContainer>
          <C.ToolName>Vite</C.ToolName>
          <C.TextInnovation>Next Generation Frontend Tooling</C.TextInnovation>
          <C.TextInvite>Get ready for a development environment that can finally catch up with you.</C.TextInvite>
        </C.TextContainer>
     
        <img src="../../../public/logo-vite-shadow.png" alt="Logo do vite.js sombreado" />

        
      </C.Container>
  )
}
