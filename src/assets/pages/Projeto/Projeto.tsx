import CorpoProjeto from "../../components/CorpoProjeto/CorpoProjeto"
import Header from "../../components/Header"
import Rodape from "../../components/Rodape"

function Home() {
    return( <>
        <Header />
       <main>
         <CorpoProjeto/>
       </main>
       <Rodape/>
    </>)
}

export default Home