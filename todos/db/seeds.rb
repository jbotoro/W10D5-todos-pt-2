# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



todo0 = Todo.create(
    title: "Walk Annie" ,
    body: "I'f I somehow find the willpower I can " ,
    done: false
)
todo1 = Todo.create(
    title: "Walk Romeo",
    body: "He is unruly " ,
    done: false
)
todo2 = Todo.create(
    title: "Give Romee his medicina" ,
    body: "Poor boy" ,
    done: true
)
todo3 = Todo.create(
    title: "Do my laundry" ,
    body: "Small load of whites is possible " ,
    done: false
)
todo4 = Todo.create(
    title: "Survive App Academy" ,
    body: " It's a marathon not a sprint " ,
    done: false
)