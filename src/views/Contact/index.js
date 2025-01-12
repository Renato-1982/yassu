import React from "react";
import { FaYoutube, FaLinkedin, FaIdCard } from 'react-icons/fa';
import Navbar from "../../Components/Navbar";
import "../Contact/contact.css"
import Footer from "../../Components/Footer";

function Contact() {
    return(
        <div className="corpo">
            <Navbar/>

            <div className="titulo">
                <h1>Contatos</h1>
            </div>
            <br/>

            <div className="contact">
                <h2>Entre em contato para sugestões, elogios, dúvidas ou reclamações.</h2>
                <br/>
                <p>E-mail: padariayassu@yahoo.com.br 
                <br/> 
                    Telefones: (31) 3773-9091 / (31) 9.8778-5244 
                <br/> 
                    Site: www.padariayassu@yahoo.com.br 
                <br/>Facebook: facebook.com/Padaria-Yassu
                </p> 
                <br/><br/><br/>
                <p><b><h3>Padaria Yassu, desde 1986 fazendo o melhor para atender você.</h3></b></p>            
            </div>
            <br/>
            <div className="desenvolvedor">
                <p>Desenvolvedor<br/>
                <a href='https://portfolio-renatoantonio1982.vercel.app/' target={'_blank'}><FaIdCard size={25} /></a>
                <a href='https://www.youtube.com/@renatoantonio1982' target={'_blank'}><FaYoutube size={25} /></a>
                <a href='https://www.linkedin.com/in/renato-antonio-12b810338/' target={'_blank'}><FaLinkedin size={25} /></a></p>
            </div>
            <Footer/>
        </div>
    )
}
export default Contact;