exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {u_id: 10001, name: 'Andreas', email: 'benzan81@gmail.com'},
        {u_id: 10002, name: 'Thom', email: 'thom@gmail.com'},
        {u_id: 10003, name: 'Peter', email: 'peter@gmail.com'},
      ]);
    });
};