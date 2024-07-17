export default function appendToEachArrayValue(array, appendString) {
  let idx = 0;
  const result = [];
  for (idx of array) {
    const value = array[idx];
    result.push(appendString + value);
  }

  return result;
}
