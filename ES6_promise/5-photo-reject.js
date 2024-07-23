export default function uploadPhoto(filename) {
  const FilePromise = new Promise((resolve, reject) => {
    reject(new Error(`${filename} cannot be processed`));
  });
  return FilePromise;
}
