import Container from "../Container/Container";
import Logo from "../Logo/Logo";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Logo />
      </Container>
      <div className="footer__notice">
        <Container>
          <p className="footer__notice-text">Daniil Yurkevich @2023</p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
