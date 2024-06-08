// 8-clean_set.js

function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }

  let result = '';
  for (const item of set) {
    if (typeof item === 'string' && item.startsWith(startString)) {
      result += `${result === '' ? '' : '-'}${item.slice(startString.length)}`;
    }
  }
  return result;
}

export default cleanSet;
