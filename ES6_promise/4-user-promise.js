export default function signUpUser(firstName, lastName) {
  const SimplePromise = new Promise((resolve) => {
    resolve({ firstName, lastName });
  });
  return SimplePromise;
}
