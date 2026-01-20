import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import './About.scss';

export const AboutPage = () => {
  return (
    <>
      <section className="cathero">
        <h1 className="aboutcat">ABOUT US</h1>
      </section>
      <section className="about-page">
        <article className="aboutart">
          <p className="aboutus">
            Discover. Explore. Enjoy. Welcome to your ultimate digital travel
            guide, featuring ten handpicked destinations from around the globe,
            to spark your curiosity and make every trip unforgettable.
          </p>

          <p className="aboutus">
            From must-see sights and local hidden gems to culture and
            experiences, we’ve got everything you need to dive in and start your
            adventure. Whether you’re chasing thrills, seeking relaxation, or
            craving new cultural experiences, we help you find the perfect
            destination.
          </p>

          <p className="aboutus">
            Travel should be exciting, effortless, and for everyone. So pack
            your curiosity, follow your sense of adventure, and let’s make your
            next journey amazing!
          </p>
        </article>
        <div className="image-wrapper">
          <img
            className="aboutimg"
            src={`${import.meta.env.BASE_URL}Maldiverna/surfboard.jpg`}
            alt="A man with a surfboard on the beach"
          />

          <p className='linkscat'>Social links</p>
          <aside className="social-icons">
            <a
              className="icon"
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              className="icon"
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </aside>
        </div>
      </section>
    </>
  );
};
