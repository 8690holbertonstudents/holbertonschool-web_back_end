export default function signUpUser(firstName, lastName) {
  const SimplePromise = new Promise((resolve, reject) => {
    resolve({ firstName, lastName });
  });
  return SimplePromise;
}
