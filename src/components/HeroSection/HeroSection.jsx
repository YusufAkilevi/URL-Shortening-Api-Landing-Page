import IllustrationWorking from "./IllustrationWorking";
import classes from "./HeroSection.module.css";
const HeroSection = () => {
  return (
    <div className={classes["hero-section"]}>
      <div className={classes.description}>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <a href="#">Get Started</a>
      </div>
      <div className={classes.illustration}>
        <IllustrationWorking />
      </div>
    </div>
  );
};

export default HeroSection;
