// 8-clean_set.js

function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }

  return [...set].filter((item) => item.startsWith(startString))
    .map((item) => item.slice(startString.length))
    .join('-');
}

export default cleanSet;
