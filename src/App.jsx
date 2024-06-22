import { Container } from '@mui/material'
import './App.css'
import { Layout } from './Layout'
import { Kohead } from './components/Kohead'

function App() {

  return (
    <>
    <Container maxWidth="lg">
        <Layout>
          <p>Random words of wisdom</p>
          <h4>"My localhost address is more coherent than my actual house address"</h4>
          <p>- rando on teh interwebz</p>
        </Layout>
        <Kohead />
      </Container>
    </>
  )
}

export default App
