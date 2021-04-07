import Head from "next/head";
import styles from "../styles/Home.module.css";
import axios from "axios";
import reddit from "./api/redditapi";
export default function Home() {
  let resultBody = [];

  const handleClickAndSetResults = (e) => {
    const sortBy = "latest";
    const searchLimit = 30;
    const searchTerm = "space65";
    const subreddit = "mechmarket";

    reddit
      .search(searchTerm, searchLimit, sortBy, subreddit)
      .then((results) => {
        results.map((result, index) => {
          const {
            author,
            link_flair_text,
            permalink,
            subreddit_name_prefixed,
            title,
          } = result;
          resultBody.push({
            author,
            link_flair_text,
            permalink,
            subreddit_name_prefixed,
            title,
          });
        });
      });
    console.log("this is Resultbody: ", resultBody);
    e.preventDefault();
  };

  const renderResultBody = () => (
    <ul>
      {resultBody.map((result, index) => {
        const {
          author,
          link_flair_text,
          // permalink,
          subreddit_name_prefixed,
          title,
        } = result;
        return (
          <div>
            <p>{`Title: ${title}`}</p>
            <p>{`Author: ${author}`}</p>
            <p>{`Status: ${link_flair_text}`}</p>
            <p>{`subreddit: ${subreddit_name_prefixed}`}</p>
            <p>{`Link: ${titled}`}</p>
          </div>
        );
      })}
    </ul>
  );
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a href="https://github.com/justfrankie/kbfinder">KBfinder</a>
        </h1>

        <div className={styles.description}>
          <p className={styles.code}>
            A tool used to find average pricing for keycaps from /r/mechmarket
          </p>
          <div className={`input-group rounded ${styles.inputContainer}`}>
            <input
              type="search"
              className="form-control rounded inputBar"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
              id={styles.inputBar}
            />
            <button
              className={styles.searchButton}
              onClick={(e) => handleClickAndSetResults(e)}
              type="submit"
            >
              Search
            </button>
            <span className="input-group-text border-0" id="search-addon">
              <i className="fas fa-search"></i>
            </span>
          </div>
        </div>

        <div className={styles.grid}>
          <a href="www.reddit.com/r/mechmarket/" className={styles.card}>
            <h3>r/mechmarket &rarr;</h3>
            <p>Text Placeholder 1</p>
          </a>

          <a href="www.mechgroupbuys.com/" className={styles.card}>
            <h3>mechgroupbuys.com &rarr;</h3>
            <p>Text Placeholder 2</p>
          </a>

          <a
            href="https://keycaplendar.firebaseapp.com/?page=calendar"
            className={styles.card}
          >
            <h3>keycaplendar.com &rarr;</h3>
            <p>Text Placeholder 3</p>
          </a>

          <a href="https://keycapsets.com/" className={styles.card}>
            <h3>keycapsets.com &rarr;</h3>
            <p>Text Placeholder 4</p>
          </a>
        </div>
        {renderResultBody && <div>{renderResultBody()}</div>}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>

      <script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
}
