export default function createInt8TypedArray(length, position, value) {
  if (
    typeof length !== 'number'
    || typeof position !== 'number'
    || typeof value !== 'number'
  ) {
    throw new TypeError('Arguments must be numbers');
  }

  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);

  const int8Array = new Uint8Array(buffer);
  int8Array[position] = value;

  return new DataView(buffer);
}
