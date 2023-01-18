import './footer.scss'
const Footer = () => {
  const now = new Date();
  const currentYear = now.getFullYear();

  return (
    <footer className="footer" id="footer">
      <section className="text-center">
        <span>
          &copy; copyright {currentYear}
          <br />
          All Rights Reserved - Bellissi
        </span>
      </section>
    </footer>
  );
}

export default Footer;
