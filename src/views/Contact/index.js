import Navbar from "../../Components/Navbar";
import "../Contact/contact.css"
import Footer from "../../Components/Footer";

function Contact() {
    return(
        <div className="app">
            <Navbar/>

            <div id="titulo">
                <h1>Contatos</h1>
            </div>
            <br/>

            <div id="contact">
                <h2>Entre em contato para sugestões, elogios, dúvidas ou reclamações.</h2>
                <br/>
                <p>E-mail: padariayassu@yahoo.com.br 
                    <br/> 
                    Telefones: (31) 3773-9091 / (31) 9.8778-5244 
                    <br/> 
                    Site: www.padariayassu@yahoo.com.br 
                    <br/>Facebook: facebook.com/Padaria-Yassu
                </p> 
                <br/><br/><br/><br/><br/>
                <p><b><h3>Padaria Yassu, desde 1986 fazendo o melhor para atender você.</h3></b></p>            
            </div>
            <br/>
            <Footer/>
        </div>
    )
}
export default Contact;