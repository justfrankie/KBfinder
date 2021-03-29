export default {
  search: function (searchTerm, searchLimit, sortBy, subreddit) {
    console.log(searchTerm);
    return fetch(
      `http://www.reddit.com/search.json?q=${searchTerm}&sort=${sortBy}&limit=${searchLimit}&subreddit=${subreddit}`
    )
      .then((res) => res.json())
      .then((data) => {
        return data.data.children.map((data) => data.data);
      })
      .catch((err) => console.log(err));
  },
};
