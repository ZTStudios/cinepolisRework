const Header = () => {
  const $header = document.createElement("header");
  $header.className = "header";
  $header.innerHTML = `
        <nav class="header_navbar">
        <div class="navbar-menu_container"><i class="bx bx-menu"></i></div>
        <div class="navbar-menu_logo">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cinepolis-hosting.appspot.com/o/CinepolisLOGO.png?alt=media&token=faba22f6-b178-40aa-8f2d-e51030f640c9"
            alt=""
          />
        </div>
        <div class="navbar-menu_search"><i class="bx bx-search"></i></div>
      </nav>
      <div class="header_description">
        <h1 class="header_description-title">JUJUTSU KAISEN 0</h1>
        <p class="header_description-content">
          Cuando eran niños, Rika Orimoto murió en un accidente automovilístico
          frente a su mejor amigo, Yuta Okkotsu. “Es una promesa. Cuando seamos
          grandes, nos casaremos”. Rika se convirtió en fantasma y Yuta llegó a
          desear su propia muerte tras sufrir bajo su maldición, cuando el gran
          mago Satoru Gojo le da la bienvenida a la Academia de Hechicería. Allí
          Yuta conoce a sus compañeros: Maki Zen'in, Toge Inumaki y Panda, y por
          fin encuentra el valor que le faltaba. “¡Quiero tener la confianza
          para decir que no está mal que siga vivo!”. “Mientras esté en la
          Academia de Hechicería terminaré con la maldición de Rika-chan”.
          Mientras tanto, el malvado brujo Suguru Geto, quien fue expulsado de
          la Academia por asesinar a inocentes, aparece ante Yuta y sus amigos.
        </p>
        <button class="btnVerHorarios">Ver Horario</button>
      </div>
      <div class="header_footer">
        <div class="header-footer_trailer">
          <img src="resources/video-icon.png" alt="" />
          Ver trailer
        </div>
        <div class="header-footer_horarios">
          <button class="btnVerHorarios">Ver horarios</button>
        </div>
        <div class="header-footer_informacion">
          <img src="/resources/info-icon.png" alt="info-icon" />
          Información
        </div>
      </div>
  `;
  return $header;
};

export default Header;
