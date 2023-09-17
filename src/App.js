import './index.css'
import './Company.css'
import React from "react";
import Company from './Company';
import Navbar from './Navbar'
import Image from './img/About Page Banner Image Background Removed 1.png'
import Titulo from './img/titulo0.png'
import Sobre from './img/Sobre.png'
import Subtitulo0 from './img/subtitulo1.png'
import Play from './img/play.png'
import Titul0 from './img/titulo1.png'
import Subtitulo from './img/subtitulo.png'
import Subtitulo2 from './img/subtitulo2.png'
import Work from './img/Trabalho.png'
import Funciona from './img/Como funciona_.png'
import Subtitulo3 from './img/subtitulo3.png'
import Box from './img/Process.png'
import Depoimentos from './img/Depoimentos.png'
import Container from './img/Testimonial Container.png'  
import Contato from './img/contato1.png'
import Sessão from './img/Section 1.png'
import Sessão2 from './img/Section 2.png'
import Seta from './img/Vector.png'

function App() {
const Phone ="11954261110"
const Open = () => {
const WhatsappUrl = `https://api.whatsapp.com/send?phone=${Phone}`
window.open(WhatsappUrl)
}
const Abrir =() => {
  const SaibaMaisurl = `https://www.receiteria.com.br/receitas-saudaveis-rapidas/`
  window.open(SaibaMaisurl)
}
const Redirecionar = () => {
const Video = `https://youtu.be/ZbSPvwNX0GA?si=OBQpuEJdZ6jjvPf4`
window.open(Video)
}
const Direcionar = () => {
  const Email = `https://www.google.com/intl/pt-pt/gmail/about/`
  window.open(Email)
}
  return (
    <div className="App">
     
 <Company />
 <Navbar />
  <header class='content'>

  </header> 
  
  <img className='titulo'src={Titulo}/>
  <img className='subtitulo0' src={Subtitulo0}/>
  <div className='divbuton2'>
  <button onClick={Open} className='button2'>Encomendar agora</button>
  </div>
  <div className='divseta'>
  <img className='seta'src={Seta}/>
  </div>
  <img id="sobre" className='sobre' src={Sobre}/>
  <img className='titulo1'src={Titul0}/>
  <img className='subtitulo'src={Subtitulo}/>
  <img className='subtitulo2'src={Subtitulo2}/>
  <div className='divplay'>
  <img onClick={Redirecionar}className='play'src={Play}/>
  </div>
  <div className='divbutton'>
  <button onClick={Abrir}className='button3'>Saiba mais</button>
  </div>
  <svg className='background' xmlns="http://www.w3.org/2000/svg" width="331" height="1052" viewBox="0 0 331 1052" fill="none">
  <path d="M0 0L39.2914 15.857L57.9146 26.573C77.9911 38.1252 96.8362 51.6961 114.157 67.0748C132.457 83.3227 148.952 101.496 163.355 121.281L190.504 158.57L217.095 208.407C223.833 219.567 229.741 231.207 234.772 243.234L244.083 265.492L261.546 299.471L280.596 348.854L292.899 392.348L303.218 436.295L313.537 469.821L313.946 471.677C325.282 523.144 331 575.69 331 628.391C331 647.966 328.888 667.485 324.7 686.607L322.269 697.709L313.537 733.047L303.218 761.137L301.622 768.144C295.818 793.63 287.843 818.572 277.785 842.698L266.784 869.084C263.299 877.444 259.053 885.466 254.1 893.048C247.447 903.231 239.563 912.554 230.627 920.805L217.095 933.299L190.504 957.311L188.037 959.413C169.873 974.896 150.378 988.746 129.781 1000.8C109.992 1012.55 89.0125 1022.16 67.1939 1029.48L0 1052V511.502V0Z" fill="#FE9E0D"/>
  </svg>
  <div className='divwatch'>
  <div className='watch'>Assistir vídeo</div>
  </div>
  <img className='image' src={Image}/>
 <div>
  <img className='work'src={Work}/>
 </div>
 <div>
  <img className='funciona'src={Funciona}/>
 </div>
<div>
  <img className='subtitulo3' src={Subtitulo3}/>
</div>
<div>
  <img className='box' src={Box}/>
</div>
<div>
  <img id="dep" className='depoimentos'src={Depoimentos}/>
</div>
<div>
  <img className='container'src={Container}/>
</div>
<div>
  <img id="cont" className='contato'src={Contato}/>
</div>
  <input className='input' placeholder='foodie@gmail.com'/>
<div className='divbutt0n'> 
<button onClick={Direcionar} className='butt00n'>Enviar</button>
</div>
<div>
  <img className='sessao'src={Sessão}/>
</div>
<div>
  <img className='sessao2'src={Sessão2}/>
</div>
</div>

      
  );
}

export default App
