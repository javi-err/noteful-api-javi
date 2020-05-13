const NotesService = {
  getAllNotes(knex) {
    return knex.select('*').from('noteful')
  },
insertNotes(knex, newNotes) {
  return knex
  .insert(newNotes)
  .into('noteful')
  .returning('*')
  .then(rows => {
    return rows[0]
  })
},
getbyID(knex, id) {
  return knex.from('noteful')
  .select('*')
  .where('id', id)
  .first()
},
deleteNotes(knex, id) {
  return knex('noteful')
  .where({id})
  .delete()
},
updateNotes(knex, id, newNotesFields) {
  return knex('noteful')
  .where({id})
  .update(newNotesFields)
},
}
module.exports = NotesService