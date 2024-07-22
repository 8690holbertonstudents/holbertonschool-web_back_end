export default function setFromArray(OneArray) {
  if (!Array.isArray(OneArray)) {
    throw new Error('The argument must be an array');
  }
  return new Set(OneArray);
}
