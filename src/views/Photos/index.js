import Navbar from "../../Components/Navbar";
import "../Photos/photos.css";
import Footer from "../../Components/Footer";

function Photos() {
    return(
        <div className="app">
            <Navbar/>

            <div id="titulo">
                <h1>Galeria de Fotos</h1>
            </div>
            <br/>

            <section id="corpo-full">
                <article id="fotos">
                    <h2>Bolos</h2>
                    <ul id="album-fotos">
                        <li id="foto01"><span>Bolo de Aniversário</span></li>
                        <li id="foto02"><span>Bolo de Aniversário</span></li>
                        <li id="foto03"><span>Bolo de Aniversário</span></li>
                        <li id="foto04"><span>Bolo de Aniversário</span></li>
                        <li id="foto05"><span>Bolo de Aniversário</span></li>
                        <li id="foto06"><span>Bolo de Aniversário</span></li>
                        <li id="foto07"><span>Bolo de Aniversário</span></li>
                        <li id="foto08"><span>Bolo de Aniversário</span></li>
                        <li id="foto09"><span>Bolo de Aniversário</span></li>
                        <li id="foto10"><span>Bolo de Aniversário</span></li>
                        <li id="foto11"><span>Bolo de Aniversário</span></li>
                        <li id="foto12"><span>Bolo de Aniversário</span></li>
                        <li id="foto13"><span>Bolo de Aniversário</span></li>
                        <li id="foto14"><span>Bolo de Aniversário</span></li>
                        <li id="foto15"><span>Bolo de Aniversário</span></li>
                    </ul>
                    <h2>Tortas</h2>
                    <ul id="album-fotos">
                        <li id="foto16"><span>Torta Especial Baba de Moça</span></li>
                        <li id="foto17"><span>Torta Especial Baba de Moça</span></li>
                        <li id="foto18"><span>Torta Especial Baba de Moça</span></li>
                        <li id="foto19"><span>Torta Especial Baba de Moça</span></li>
                        <li id="foto20"><span>Torta Especial Baba de Moça</span></li>
                        <li id="foto21"><span>Torta Especial Baba de Moça</span></li>
                        <li id="foto22"><span>Torta Especial Baba de Moça</span></li>
                        <li id="foto23"><span>Torta Floresta Negra</span></li>
                        <li id="foto24"><span>Torta Floresta Negra</span></li>
                        <li id="foto25"><span>Torta Floresta Negra</span></li>
                    </ul>
                    <h2>Rocamboles</h2>
                    <ul id="album-fotos">
                        <li id="foto26"><span>Rocambole</span></li>
                        <li id="foto27"><span>Rocambole</span></li>
                        <li id="foto28"><span>Rocambole</span></li>
                        <li id="foto29"><span>Rocambole</span></li>
                        <li id="foto30"><span>Rocambole</span></li>
                    </ul>
                </article>
            </section>
            <Footer/>
        </div>
    )
}
export default Photos;