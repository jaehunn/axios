const log = console.log;

// callback
{
  function increase(number, callback) {
    setTimeout(() => {
      const result = number + 10;

      if (callback) callback(result);
    }, 1000);
  }

  increase(0, (result) => console.log(result));

  // callback hell
  log("작업 시작");
  increase(0, (result) => {
    log(result);

    increase(result, (result) => {
      log(result);

      increase(result, (result) => {
        log(result);

        increase(result, (result) => {
          log(result);
          log("작업 완료");
        });
      });
    });
  });
}

// Promise
{
  function increase(number) {
    const promise = new Promise((res, rej) => {
      setTimeout(() => {
        const result = number + 10;

        if (result > 50) {
          const e = new Error("NumberToBig");

          return rej(e);
        }

        res(result);
      }, 1000);
    });

    return promise;
  }

  increase(0)
    .then((number) => {
      log(number);

      return increase(number);
    })
    .then((number) => {
      log(number);

      return increase(number);
    })
    .then((number) => {
      log(number);

      return increase(number);
    })
    .then((number) => {
      log(number);

      return increase(number);
    })
    .then((number) => {
      log(number);

      return increase(number);
    })
    .catch((e) => {
      log(e);
    });
}

// async/await
{
  function increase(number) {
    const promise = new Promise((res, rej) => {
      setTimeout(() => {
        const result = number + 10;

        if (result > 50) {
          const e = new Error("NumberToBig");

          return rej(e);
        }

        res(result);
      }, 1000);
    });

    return promise;
  }

  async function runTask() {
    try {
      let result = await increase(0);
      log(result);

      result = await increase(result);
      log(result);

      result = await increase(result);
      log(result);

      result = await increase(result);
      log(result);

      result = await increase(result);
      log(result);

      result = await increase(result);
      log(result);
    } catch (e) {
      log(e);
    }
  }
}
