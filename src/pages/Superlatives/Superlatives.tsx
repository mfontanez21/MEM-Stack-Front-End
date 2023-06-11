import styles from "./Superlatives.module.css";

import andrew from "../../assets/images/andrew.jpg";
import callum from "../../assets/images/callum.jpg";
import musto from "../../assets/images/musto.jpg";
import nick from "../../assets/images/nick.jpg";
import monica from "../../assets/images/monica.jpg";
import bobby from "../../assets/images/bobby.png";
import shapeshift from "../../assets/images/shapeshift.png";
import chris from "../../assets/images/chris.jpg";
import mustomessage from "../../assets/images/mustomessage.png";

const Superlatives = () => {
  return (
    <div className={styles.container}>
      <article className={styles.winner}>
        <h1>Most Likely to invent a new form of social media...</h1>
        <img src={andrew} className={styles.winnerImg} />
        <h2>Andrew Rentschler!! 🥳🎉</h2>
      </article>
      <article className={styles.winner}>
        <h1>Best questions asked during lecture...</h1>
        <img src={callum} className={styles.winnerImg} />
        <h2>Callum Nelson!! 🥳🎉</h2>
      </article>
      <article className={styles.winner}>
        <h1>Most likely to forget to unmute before talking...</h1>
        <img src={musto} className={styles.winnerImg} />
        <h2>Musto!! 🥳🎉</h2>
      </article>
      <article className={styles.winner}>
        <h1>Early Bird: Most likely to be on Zoom first...</h1>
        <img src={nick} className={styles.winnerImg} />
        <h2>Nick Wooten!! 🥳🎉</h2>
      </article>
      <article className={styles.winner}>
        <h1>Most likely to talk on Zoom without raising hand...</h1>
        <img src={andrew} className={styles.winnerImg} />
        <h2>Andrew Rentschler!! 🥳🎉</h2>
      </article>
      <article className={styles.winner}>
        <h1>Best unit project styling...</h1>
        <img src={monica} className={styles.winnerImg} />
        <h2>Monica Scoletti!! 🥳🎉</h2>
      </article>
      <article className={styles.winner}>
        <h1>Class Clown...</h1>
        <img src={bobby} className={styles.winnerImg} />
        <h2>Bobby Walsh!! 🥳🎉</h2>
      </article>
      <article className={styles.winner}>
        <h1>Best Presentation...</h1>
        <img src={shapeshift} className={styles.bigImg} />
        <h2>Shapeshift by PEDs!! 🥳🎉</h2>
      </article>
      <article className={styles.winner}>
        <h1>Most likely to become a TA after the cohort...</h1>
        <img src={chris} className={styles.winnerImg} />
        <h2>Chris MacNamara!! 🥳🎉</h2>
      </article>
      <article className={styles.winner}>
        <h1>Funniest Slack Message...</h1>
        <img src={mustomessage} className={styles.bigImg} />
        <h2>Musto's "Dangerous CS Knowledge" 🥳🎉</h2>
      </article>
    </div>
  );
};

export default Superlatives;
