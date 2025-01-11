import Navbar from "../../Components/Navbar";
import "../Sobre/sobre.css";
import Footer from "../../Components/Footer";

function Sobre() {
    return(
        <div className="corpo">
            <Navbar/>

            <div className="titulo">
                <h1>Tudo sobre a Padaria Yassu</h1>
            </div>
            <br/>
              
            <div className="sobre">
                <h2>Sobre</h2>
                <p>Fundada em 27/11/1986 e situada a Rua Coronel Randolfo Simões, nº1289, 
                    no bairro Boa Vista em Sete Lagoas - MG, a Padaria e Confeitaria Yassu Ltda-EPP 
                    vem proporcionando para todos os clientes, produtos de padaria e confeitaria, 
                    todos com fabricação própria e elevado padrão de qualidade, promovendo alto 
                    nível de satisfação para com os mesmos.  </p>
                    
                <h2>Direção</h2>
                <p>A Padaria Yassu vem desde então sob direção de Geraldo Alberto Chaves Ribeiro conhecido como "Gê". 
                    Ele vem trabalhando todos esses anos para oferecer conforto, comodidade e qualidade para todos os clientes.</p>
            </div>
               
            <div className="novidades">
                <h2>Novidades Padaria Yassu</h2>
                <p>A Padaria Yassu está com grande novidades em Kit-Festas.Disponibilizamos dois tamanhos de kits para melhor atendê-lo.O cliente também pode está comparecendo a loja e montando o seu próprio Kit-Festa.</p>

                <p>Outra novidade quentinha são os pães de queijo assados na hora e vendidos com preços promocionais.</p>

                <p>Padaria Yassu, sempre inovando para melhor atender os seus clientes.</p>

                <p>Venha conferir ou entre em contato.</p>
            </div>

            <Footer/>
        </div>
    )
}
export default Sobre;