import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const MyPromise = Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      const [photo, user] = values;
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
  return MyPromise;
}
