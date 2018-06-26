const token = ' 3c1cd86a8d162ead8772f0862a330e5f20881d40'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
