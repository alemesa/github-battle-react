import axios from 'axios';

const id = '84578f19a9a926634249';
const sec = '502dc7203598a42426d1e277384404091c24d88c';
const params = `?client_id=${id}&client_secret=${sec}`;
const latest = `${params}&order=asc&sort=updated`;

export function getUserRepos(username) {
  return axios
    .get(`http://api.github.com/users/${username}/repos${latest}`)
    .then(user => user.data);
}

export function getProfile(username) {
  return axios
    .get(`http://api.github.com/users/${username}${params}`)
    .then(user => user.data);
}

function getRepos(username, quantity = 100) {
  return axios.get(
    `http://api.github.com/users/${username}/repos${params}&per_page=${quantity}`
  );
}

export function getStarCount(repos) {
  return repos.data.reduce((count, repo) => {
    return count + repo.stargazers_count;
  }, 0);
}

function calculateScore(profile, repos) {
  let followers = profile.followers;
  let totalStars = getStarCount(repos);

  return followers * 3 + totalStars;
}

function handleError(error) {
  console.warn(error);
  return null;
}

function getUserData(player) {
  return axios.all([getProfile(player), getRepos(player)]).then(function(data) {
    let profile = data[0];
    let repos = data[1];

    return {
      profile: profile,
      score: calculateScore(profile, repos)
    };
  });
}

function sortPlayers(players) {
  return players.sort((a, b) => {
    return b.score - a.score;
  });
}

export function battle(players) {
  return axios
    .all(players.map(getUserData))
    .then(sortPlayers)
    .catch(handleError);
}

export function fetchPopularRepos(language) {
  var encodedURI = window.encodeURI(
    'https://api.github.com/search/repositories?q=stars:>1+language:' +
      language +
      '&sort=stars&order=desc&type=Repositories'
  );
  return axios.get(encodedURI).then(function(response) {
    return response.data.items;
  });
}
