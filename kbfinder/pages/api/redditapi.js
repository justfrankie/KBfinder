export default {
  search: function (searchTerm, searchLimit, sortBy, subreddit) {
    return fetch(
      `https://www.reddit.com/r/videos/search.json?q=dog&restrict_sr=on&limit=10&include_over_18=on&sort=relevance&t=all`
      // `http://www.reddit.com/search.json?q=${searchTerm}&sort=${sortBy}&limit=${searchLimit}&subreddit=${subreddit}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log("data returned in api: ", data.data.children);
        return data.data.children.map((data) => data.data);
      })
      .catch((err) => console.log(err));
  },
};

// https://www.reddit.com/search.json?q=space65&sort=latest&limit=30&subreddit=mechmarket
