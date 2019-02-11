const users = [
  {
    id: 1,
    username: 'alpcan',
  },
  {
    id: 2,
    username: 'hasan',
  },
  {
    id: 3,
    username: 'burak',
  },
];

const user = users.find(item => item.username = 'burak');
console.log(user);


//linq de gibi. array de expressiona göre değer döndürüyor