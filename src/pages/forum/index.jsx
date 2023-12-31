import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ModalBuatPost from "../../components/forum/modal-buat-post";
import Posts, { Search } from "../../components/forum/post";
import Container from "../../components/shared/container";
import Footer from "../../components/shared/footer";
import Header from "../../components/shared/header";
import { ToTopSecondary } from "../../components/shared/to-top";
import "./style.css";

function Forum() {
  const [searchParams] = useSearchParams();
  const [posts, setPosts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    document.title = "Adanest | Forum";
  }, []);
  return (
    <div className="bg-forum">
      <Container>
        <Header.Secondary
          leftAddon={<Header.Brand />}
          rightAddon={
            <>
              <Header.NotificationIcon />
              <Header.UserProfileBtn />
              <button onClick={toggleModal} className="btn btn-filled btn-filled-yellow btn-sm">
                Buat Post
              </button>
            </>
          }
        />
        <Search setPosts={setPosts} />
        <Posts posts={posts} setPosts={setPosts} postId={searchParams.get("id")} />
      </Container>
      <ModalBuatPost isOpen={isOpen} setPosts={setPosts} toggleModal={toggleModal} />
      <Footer.FooterContainer>
        <Footer.FooterChild />
      </Footer.FooterContainer>
      <ToTopSecondary />
    </div>
  );
}

export default Forum;
