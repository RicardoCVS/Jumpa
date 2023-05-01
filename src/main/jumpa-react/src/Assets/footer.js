import "./footer.css";
const imgLinkedin = process.env.PUBLIC_URL + "/img/linkedin-logo.png";
function Footer() {
  return (
    <>
      <footer id="contacto">
        <div class="contenedor footer-content">
          <div class="contact us">
            <h2 class="brand">JUMPA</h2>
            <p>
              Desarrollado por Daniel Hernandez, Ricardo Castro, Jennifer
              Rodriguez y Pau Espinás
            </p>
          </div>
          <div class="social-media">
            <a href="./" class="social-media-icon">
              <i class="bx bxl-linkedin"></i>
              <span class="my-tooltip">Texto chico</span>
            </a>
            <a href="./" class="social-media-icon">
              <i class="bx bxl-linkedin"></i>
            </a>
            <a href="./" class="social-media-icon">
              <i class="bx bxl-linkedin"></i>
            </a>

            <a href="./" class="social-media-icon">
              <i class="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>
        <div class="line"></div>
      </footer>
    </>
  );
}

export default Footer;
