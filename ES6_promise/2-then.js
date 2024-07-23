export default function handleResponseFromAPI(promise) {
  const LogMsg = 'Got a response from the API';
  promise.then(() => {
    return { status: 200, body: 'Success' };
  });
  promise.catch(() => {
    return new Error();
  });
  promise.finally(() => {
    return console.log(LogMsg);
  });
}
