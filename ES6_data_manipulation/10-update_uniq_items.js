export default function updateUniqueItems(OneMap) {
  if (!(OneMap instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [key, value] of OneMap) {
    if (value === 1) {
      OneMap.set(key, 100);
    }
  }
}
