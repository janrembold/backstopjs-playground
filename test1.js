module.exports = {
  scenarios: [
    {
      label: "React App",
      url: "http://host.docker.internal:3000"
    },
    {
      label: "React App Logo",
      url: "http://host.docker.internal:3000",
      readySelector: ".App-header .App-link",
      selectors: [".App-header .App-link"]
    }
  ]
};
