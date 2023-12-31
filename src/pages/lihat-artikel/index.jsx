import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "use-http";
import KomentarBalasan from "../../components/artikel/komentar-balasan";
import SebuahArtikel from "../../components/artikel/sebuah-artikel";
import Container from "../../components/shared/container";
import Footer from "../../components/shared/footer";
import Header from "../../components/shared/header";
import { ToTopSecondary } from "../../components/shared/to-top";

function LihatArtikel() {
  const params = useParams();
  const [post, setPost] = useState({});
  const { get, loading } = useFetch(`${import.meta.env.VITE_API_URL}posts/p`, {
    cachePolicy: "no-cache",
    headers: {
      Authorization: `Bearer ${Cookies.get("access_token")}`,
    },
  });

  useEffect(() => {
    get(params.artikelId).then((res) => {
      setPost(res);
    });
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
            </>
          }
        />
        {loading && <div className="full-height">Loading...</div>}
        {post?._id && <SebuahArtikel {...post} />}

        <KomentarBalasan />
      </Container>
      <Footer.FooterContainer>
        <Footer.FooterChild />
      </Footer.FooterContainer>
      <ToTopSecondary />
    </>
  );
}

export default LihatArtikel;
