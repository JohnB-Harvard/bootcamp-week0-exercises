/**
  These exercises aim to get you familiar with object syntax. Hopefully it doesn't trigger
  highschool biology flashbacks.
 */

// You can think of an object like a python dictionary or tree
// They usually have lots of deeply nested data
const TreeOfLife = {
  // Objects can contain basic data types ...
  rank: 'domain',
  archae: 'archaebacteria',
  bacteria: 'eubacteria',
  // ... but they can also contain nested objects, arrays, functions, or anything else
  eukarya: {
    rank: 'kingdom',
    plantae: ['my succulent', 'tomatoes', 'big trees'],
    animalia: {
      rank: 'phylum',
      birds: 'work for the bourgeoisie.',
      humans: ['you', 'me', 'us', 'them', 'everyone!'],
    },
    fungi: {
      guy: "he's fun",
    },
    protista: 'What even is this?',
  },
  // The best domain's key
  bestDomain: 'archae',
}

//TODO -- Write a function which returns the domain "archae"
const getArchae = () => {
  return TreeOfLife.archae;
}

// TODO -- Write a function which returns the array of humans
const getHumans = () => {
  return TreeOfLife.eukarya.animalia.humans;
}

// TODO -- Write a function which adds a name to the array of humans
const addHuman = (name) => {
  TreeOfLife.eukarya.animalia.humans.push(name);
  return;
}

// TODO -- Write a fuction which returns the data representing the "bestDomain"
const getBestDomain = () => {
  let best = TreeOfLife.bestDomain;
  return TreeOfLife[best];
}

// TODO -- Write a function which sets the best domain to "eukarya" and then returns the "bestDomain"
const setGetBestDomain = () => {
  TreeOfLife.bestDomain = "eukarya";
  return getBestDomain();
}

/**
  TODO
  Write a function using destructuring and object renaming which returns an array with all the ranks like:
  (Don't hardcode it, pull it from the TreeOfLife)
  [
    'domain',
    'kingdom',
    'phylum',
  ]
 */
const getRanks = () => {
  //let ranks = [];
  const {rank: rank1, eukarya:{rank:rank2, animalia:{rank: rank3}}} = TreeOfLife;
  return [rank1, rank2, rank3];
  //ranks.push(TreeOfLife.rank);
  //ranks.push(TreeOfLife.eukarya.rank);
  //ranks.push(TreeOfLife.eukarya.animalia.rank);
  //return ranks;
}

// TODO -- Write a function which uses destructuring and the rest operator to return everything BUT the "eukarya"
const noEukaryotes = () => {
  const {eukarya, ...rest} = TreeOfLife;
  return rest;
}

module.exports = {
  getArchae,
  getHumans,
  addHuman,
  getBestDomain,
  setGetBestDomain,
  getRanks,
  noEukaryotes,
  TreeOfLife,
}
