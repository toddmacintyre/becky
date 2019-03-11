import * as React from "react";
import * as styles from '../styles/main.module.css';

class Main extends React.Component {
  public render() {
    return (
      <main className={styles.main}>
        <figure className={[styles.parallaxImg, styles.bgimg1].join(' ')}>
          <figcaption className={styles.captionContainer}>
            <span className={styles.caption}>BECKY STOUT</span>
          </figcaption>
        </figure>

        <section className={styles.section1}>
          <h3>BIOGRAPHY</h3>
          <p>
            Nascetur per nec posuere turpis, lectus nec libero turpis nunc at,
            sed posuere mollis ullamcorper libero ante lectus, blandit
            pellentesque a, magna turpis est sapien duis blandit dignissim.
            Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum
            consequat morbi, curabitur aliquam pede, nullam vitae eu placerat
            eget et vehicula. Varius quisque non molestie dolor, nunc nisl
            dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus
            pulvinar, in in neque risus odio. Accumsan fringilla vulputate at
            quibusdam sociis eleifend, aenean maecenas vulputate, non id
            vehicula lorem mattis, ratione interdum sociis ornare. Suscipit
            proin magna cras vel, non sit platea sit, maecenas ante augue etiam
            maecenas, porta porttitor placerat leo.
          </p>
          <a href='#'>Full download</a>
        </section>

        <figure className={[styles.parallaxImg, styles.bgimg2].join(' ')}>
          <figcaption className={styles.captionContainer}>
            <span className={styles.caption2}>LESSONS</span>
          </figcaption>
        </figure>

        <section className={styles.section2}>
            <p>
              Something about taking lessons. vulputate at quibusdam sociis eleifend, aenean maecenas vulputate,
              non id vehicula lorem mattis, ratione. <a href='#'>linky link</a>
            </p>
        </section>

        <figure className={[styles.parallaxImg, styles.bgimg3].join(' ')}>
          <figcaption className={styles.captionContainer}>
            <span className={styles.caption}>CONTACT</span>
          </figcaption>
        </figure>

        <section className={styles.section3}>
            <p>
              Reach out to contact Becky etc etc vulputate at quibusdam sociis eleifend, aenean maecenas vulputate,
              non id vehicula lorem mattis, ratione <a href='#'>linky link</a>
            </p>
        </section>

        <figure className={[styles.parallaxImg, styles.bgimg1].join(' ')}>
          <figcaption className={styles.captionContainer}>
            <span className={styles.caption}>FINALE</span>
          </figcaption>
        </figure>
      </main>
    );
  }
}

export default Main;
