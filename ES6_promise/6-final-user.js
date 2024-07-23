import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  if (
    typeof firstName !== 'string' ||
    typeof lastName !== 'string' ||
    typeof fileName !== 'string'
  ) {
    throw new Error('All arguments must be strings');
  }

  const allPromises = Promise.all([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]);

  const settledPromises = Promise.allSettled(allPromises).then((results) => {
    results.forEach((result) => {
      console.log(result.status, result.value);
    });
  });
  return settledPromises;
}
