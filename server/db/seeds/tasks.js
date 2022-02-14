exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {t_id: 1, 
        title: 'pick up plastic', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis lacinia elit fringilla dignissim. Aenean interdum ultricies interdum. Morbi magna ex, pulvinar in facilisis id, rhoncus ac eros. Sed dignissim augue vel nisi ornare iaculis. Maecenas elementum felis vel metus facilisis elementum nec vel quam. Nam erat dui, efficitur at lobortis quis, blandit sed justo. Sed ultricies urna sem, quis aliquet metus vehicula placerat.',
        priority: 'high',
        category: "daily",
        status: "in progress",
        expiry: "2018-11-29T00:00:00.000Z",
        created_at: "2018-11-29T00:00:00.000Z",
        created_by: 10002,
        },
        {t_id: 2, 
        title: 'wash the dishes', 
        description: 'Integer molestie, lectus sit amet pellentesque maximus, odio tortor suscipit justo, eu porttitor mi nunc scelerisque elit. Nunc et nibh erat. Aenean semper bibendum orci, quis scelerisque justo malesuada at. Vestibulum commodo ex at massa finibus semper. Phasellus metus dui, placerat in nulla ut, convallis venenatis magna. Donec finibus molestie ligula, eu porta nisi maximus a. Cras tincidunt imperdiet purus, vel lacinia augue lacinia eu.',
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
