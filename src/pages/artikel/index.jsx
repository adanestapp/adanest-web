import Container from "../../components/shared/container";
import Footer from "../../components/shared/footer";
import Header from "../../components/shared/header";
import Hero from "../../components/artikel/hero";
import Populer from "../../components/artikel/populer";
import Terbaru from "../../components/artikel/terbaru";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Artikel() {
  useEffect(() => {
    document.title = "Adanest | Artikel";
  }, []);
  return (
    <>
      <Container>
        <Header.Secondary
          leftAddon={<Header.Brand />}
          rightAddon={
            <>
              <Header.NotificationIcon />
              <Header.UserProfileBtn />
              <Link to="/buat-artikel">
                <button className="btn btn-filled btn-filled-yellow btn-sm">
                  Buat Artikel
                </button>
              </Link>
            </>
          }
        />
        <Hero />
        <Populer />
        <Terbaru />
      </Container>
      <Footer.FooterContainer>
        <Footer.FooterChild />
      </Footer.FooterContainer>
    </>
  );
}

export default Artikel;
