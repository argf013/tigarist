import React from 'react';

function Footer() {
  return (
    <footer className="text-center text-lg-start text-muted" style={{ backgroundColor: 'black' }} id="footer">
      <section className="mx-5">
        <div className="container text-center text-md-start mt-5 pt-4">
          <div className="row mt-3" style={{ color: '#faebd7' }}>
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-center fw-bold mb-4">
                <img src="https://i.ibb.co/mDtrtzt/314330820-671626804352255-6432558206755848623-n.jpg" alt="TIGARIST-LOGO-1" border="0" style={{ width: '44px' }} className="me-2" />
                Tigarist
              </h6>
              <p className="footerText">
                Tigarist adalah band dari Jakarta Utara, Indonesia.
                Yang beranggotakan Zulfan Rahman sebagai vokalis dan gitaris,
                Sauqi Rahman sebagai perkusionis, dan Riyan Asmahudi sebagai bassis.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0,0,0,.05)', color: '#faebd7' }}>
        ℗ 2022
        {' '}
        <a className="text-reset fw-bold" href="https://www.instagram.com/bbalconist/" target="_blank" style={{ textDecoration: 'none' }} rel="noreferrer">Balconist</a>
      </div>
    </footer>
  );
}

export default Footer;
