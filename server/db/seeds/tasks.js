exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {t_id: 1, 
        title: 'pick up plastic', 
        description: 'asdf sdf;lkj sdafljlkj sdaflkjlk;',
        priority: 'high',
        category: "daily",
        status: "in progress",
        expiry: "2018-11-29T00:00:00.000Z",
        created_at: "2018-11-29T00:00:00.000Z",
        created_by: 10002,
        },
        {t_id: 2, 
        title: 'pick up plastic', 
        description: 'asdf sdf;lkj sdafljlkj sdaflkjlk;',
        priority: 'low',
        category: "daily",
        status: "done",
        expiry: "2018-11-29T00:00:00.000Z",
        created_at: "2018-11-29T00:00:00.000Z",
        created_by: 10002,
        },
      ]);
    });
};
