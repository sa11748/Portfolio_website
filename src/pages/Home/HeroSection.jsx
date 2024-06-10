export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey, I'm Shubhangi</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Full Stack</span>{" "}
              {/* <br /> */}
              Developer
            </h1>
            <p className="hero--section-description">
            I specialize in creating dynamic and responsive web applications.
            <br /> With expertise in both front-end and back-end development, I
            bring a holistic approach to building innovative digital solutions.
            <br /> Let's collaborate to turn your ideas into reality.
            </p>
          </div>
          <button className="btn btn-primary">Get In Touch</button>
        </div>
        <div className="hero--section--img">
          <img src="./img/my.png" alt="Hero Section" />
        </div>
      </section>
    );
  }