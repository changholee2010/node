// url_exe.js
const urlInfo =
  "https://username:pass@test.example.com:8080/prod/computer/pageInfo?page=3&pcode=ABC#hash";
const myUrl = new URL(urlInfo);

console.log(myUrl.searchParams.values());
