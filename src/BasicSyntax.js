export function romanToInteger(str) {
  const values = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    const curr = values[str[i]];
    const next = values[str[i + 1]];
    if (next && curr < next) {
      result -= curr;
    } else {
      result += curr;
    }
  }
  return result;
}

export function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-zа-яё0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}

export function flattenArray(arr) {
  return arr.flat(Infinity);
}

export function uniqueElements(arr) {
  return [...new Set(arr)];
}

export function groupBy(arr, key) {
  return arr.reduce((acc, item) => {
    const groupKey = typeof key === 'function' ? key(item) : item[key];
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(item);
    return acc;
  }, {});
}