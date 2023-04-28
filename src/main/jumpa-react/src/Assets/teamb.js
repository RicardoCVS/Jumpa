import "./teamb.css";
const imgteam = process.env.PUBLIC_URL + "/img/teamb.svg";
function TeamB() {
return (
    <>
      <main>
        <section class="services contenedor" id="servicio">
          <h2 class="subtitulo">Nuestro Servicio</h2>
          <div class="contenedor-servicio">
            <img src={imgteam} alt=""/>
            <div class="checklist-servicio">
              <div class="service">
                <h3 class="n-service">
                  <span class="number">1</span>Diseño Web
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  malesuada urna non elit tincidunt, vitae tempor augue cursus.
                  Mauris luctus nunc nec risus rutrum, et eleifend mi
                  condimentum.
                </p>
              </div>
              <div class="service">
                <h3 class="n-service">
                  <span class="number">2</span>Diseño Web2
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  malesuada urna non elit tincidunt, vitae tempor augue cursus.
                  Mauris luctus nunc nec risus rutrum, et eleifend mi
                  condimentum.
                </p>
              </div>
              <div class="service">
                <h3 class="n-service">
                  <span class="number">3</span>Diseño Web3
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  malesuada urna non elit tincidunt, vitae tempor augue cursus.
                  Mauris luctus nunc nec risus rutrum, et eleifend mi
                  condimentum.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      
    </>
  );
}

export default TeamB;