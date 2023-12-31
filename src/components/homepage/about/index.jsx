import { Link } from "react-router-dom";
import aboutImg from "./about.jpeg";
import "./style.css";

function About() {
  return (
    <div id="about">
      <h3>Tentang Kami</h3>
      <p>Membantu mengatasi keluhan anda selama ini dengan mengadopsi pendekatan dan kebiasaan baru yang dapat mengubah kebiasaan buruk menjadi baik dan kebiasaan positif</p>
      <div>
        <div>
          <p>
            Selamat datang di ADANEST, mitra kesehatan Anda yang terpercaya. Kami adalah tim yang berdedikasi untuk memberikan layanan konsultasi kesehatan yang komprehensif dan solusi yang tepat guna
            bagi individu dan organisasi.
          </p>
          <p>
            Sejak didirikan pada tahun 2023, kami telah mengabdikan diri untuk meningkatkan kualitas hidup masyarakat melalui pendekatan holistik terhadap kesehatan. Kami memahami bahwa kesehatan
            adalah aset berharga dan berkomitmen untuk memberikan panduan yang mendalam dan terpercaya untuk menjaga keseimbangan fisik, mental, dan emosional.
          </p>
          <Link to="/create-account">
            <button className="btn btn-outline btn-outline-green">Ayo Gabung!</button>
          </Link>
        </div>
        <div>
          <img src={aboutImg} alt="About" />
        </div>
      </div>
    </div>
  );
}

export default About;
