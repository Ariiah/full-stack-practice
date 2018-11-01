
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {id: 1, Done: 'CODE'},
        {id: 2, ToDo: 'code more'}
      ])
      .then(() => {
      return knex.raw(`SELECT setval('task_id_seq', (SELECT MAX(id) FROM task))`)
      })
    })
}
