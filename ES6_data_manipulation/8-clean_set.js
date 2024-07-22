export default function cleanSet(set, startString) {
  if (!(set instanceof Set)) {
    throw new Error('Argument 1 must be a Set');
  }

  if (typeof startString !== 'string') {
    throw new Error('Argument 2 must be a string');
  }

  if (startString.length === 0) {
    return '';
  }

  let result = '';

  for (const value of set) {
    if (value.startsWith(startString)) {
      const NewString = value.slice(startString.length);
      result += `${NewString}-`;
    }
  }
  return result.slice(0, -1);
}
