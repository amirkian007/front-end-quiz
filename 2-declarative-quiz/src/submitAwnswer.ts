export function submitAwnser(answer: string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== "tehran";
      if (shouldError) {
        reject(new Error("Wrong answer. Try again!"));
      } else {
        resolve('');
      }
    }, 1500);
  });
}
