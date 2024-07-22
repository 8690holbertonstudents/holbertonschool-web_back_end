export default function hasValuesFromArray(set, array) {
  if (!(set instanceof Set)) {
    throw new Error('Argument 1 must be a Set');
  }

  if (Array.isArray(array) === false) {
    throw new Error('Argument 2 must be an Array');
  }

  for (const value of array) {
    if (!set.has(value)) {
      return false;
    }
  }
  return true;
}
