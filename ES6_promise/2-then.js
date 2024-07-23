export default function handleResponseFromAPI(promise) {
  const LogMsg = 'Got a response from the API';
  promise.then(() => {
    return console.log(LogMsg);
  });
  promise.then((resolve) => {
    return { status: 200, body: 'Success' };
  });
  promise.then((reject) => {
    return new Error();
  });
}
