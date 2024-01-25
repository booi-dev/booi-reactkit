const conlog = (res: any, symbol?: string, color?: string) => {
  const path = window.location.pathname;

  console.log(
    `%c${symbol ? symbol + " " + symbol + " " + symbol : "👉 👉 👉"}`,
    "color: red; font-size: 12px",
    `(${path})`,
    res
  );
};

export default conlog;
