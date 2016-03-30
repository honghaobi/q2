## SQL To Knex Assignment

For this assignment you will be taking your knowledge of SQL and Knex and writing the necessary Knex code to output SQL below. Fork and clone this repo and submit a pull request with your answers. You can use [http://michaelavila.com/knex-querylab/](http://michaelavila.com/knex-querylab/) to check your answers

#### Turn the following SQL queries into Knex queries (you can write them next to each SQL query or below):

1. `SELECT * FROM students;`

*  knex('students').select().then(function(data) {
    console.log(data);
  });

2. `SELECT * FROM students WHERE id=1;`

*  knex('students').select().where(id:1)

2. `SELECT * FROM students WHERE id=5 LIMIT 1;`

*  knex('students').select().where(id:1).limit(1)

3. `SELECT COUNT(*) FROM students;`

*  knex('students').select().count()

4. `SELECT MIN('year') FROM students;`

*  knex('students').select().min('year')

5. `SELECT * FROM students WHERE name IS NOT NULL;`

*  knex('students').select().whereNotNull('name')

6. `SELECT * FROM todos WHERE id IN ('1', '2', '3') OR user_id IN ('4', '5', '6');`

*  knex('todos').select().whereIn('id',['1','2','3']).orWhereIn('user_id',['4','5'])

7. `SELECT * FROM students LIMIT 10 OFFSET 30;`

*  knex('students').select().limit(10).offset(30)

8. `INSERT INTO students (name,fav_color) VALUES ('tyler','purple');`

*  knex('students').insert({name:'tyler', fav_color: 'purple'})

9. `INSERT INTO students (name,fav_color) VALUES ('liz','blue') RETURNING *;`

*  knex('students').insert({name:'liz', fav_color: 'blue'},*)

10. `UPDATE students SET name ='cho' WHERE id=5;`

*  knex('students').where({id:5}).update({name:'cho'})

11. `DELETE * FROM students;`

*  knex('students').del()

12. `UPDATE "students" SET "score" = "score" + 10 WHERE id=1;`

*  knex('students').where('id','=', 1).increment('score',10)

13. `SELECT * FROM "students" LEFT OUTER JOIN "todos" ON "students"."id" = "todos"."student_id";`

*  knex.select('*').from('students').leftOuterJoin('todos', 'students.id', 'todos.student_id')

14. `SELECT * FROM "students" RIGHT OUTER JOIN "todos" ON "students"."id" = "todos"."student_id";`

*  knex.select('*').from('students').rightOuterJoin('todos', 'students.id', 'todos.student_id').then(function(data) {
    console.log(data);
  });

#### Answer the following questions:

1. See the documentation for `pluck` - when would a method like this be useful?

*  This will pluck the specified column from each row in your results, yielding a promise which resolves to the array of values selected.

knex.table('users').pluck('id').then(function(ids) {
  console.log(ids);
});

2. How do you specify that a column must be unique using Knex?

*  uniquecolumn.unique()
Sets the column as unique.

3. How do you specify that a column can not be NULL using Knex?

*  notNullablecolumn.notNullable()
Adds a not null on the current column being created.

4. Can you also write raw SQL within knex queries? If so, how do you do that?

knex.raw('select * from students where id = 1', [1]).then(function(data) {
  ...
});
