# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:

require 'Faker'
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
    User.create(username: 'Sam', password: 'starwars')
    User.create(username: 'DemoUser', password: 'password')
    
    Deck.create({ title: 'App Academy', creator_id: 1})
    Deck.create({ title: 'Computer Science', creator_id: 2})
    Deck.create({ title: 'AR', creator_id: 3})
    Deck.create({ title: 'Hieroglyphs', creator_id: 4})
    Deck.create({ title: 'Anatomy and Physiology', creator_id: 5})
    Deck.create({ title: 'Art', creator_id: 6})
    Deck.create({ title: 'Massage', creator_id: 8})
    
    
    Deck.create({ title: 'Greek Philosophers', creator_id: 1})
    Deck.create({ title: 'Computer Science', creator_id: 2})
    Deck.create({ title: 'AR', creator_id: 3})
    Deck.create({ title: 'Hieroglyphs', creator_id: 4})
    Deck.create({ title: 'Anatomy and Physiology', creator_id: 5})
    Deck.create({ title: 'Art', creator_id: 6})
    Deck.create({ title: 'Massage', creator_id: 8})

    20.times do 
        Card.create({ deck_id: 1, 
        front: Faker::GameOfThrones.character, 
        back: Faker::GameOfThrones.quote
        })
    end

    




    
    # Card.create({ deck_id: 1,   front: Faker::GreekPhilosphers.unique.name, back: Faker::GreekPhilosophers.unique.quote})
    # Card.create({ deck_id: 1,   front: Faker::GreekPhilosphers.unique.name, back: Faker::GreekPhilosophers.unique.quote})
    # Card.create({ deck_id: 1,   front: Faker::GreekPhilosphers.unique.name, back: Faker::GreekPhilosophers.unique.quote})
    # Card.create({ deck_id: 1,   front: Faker::GreekPhilosphers.unique.name, back: Faker::GreekPhilosophers.unique.quote})
    # Card.create({ deck_id: 1,   front: Faker::GreekPhilosphers.unique.name, back: Faker::GreekPhilosophers.unique.quote})
    # Card.create({ deck_id: 1,   front: Faker::GreekPhilosphers.unique.name, back: Faker::GreekPhilosophers.unique.quote})
    # Card.create({ deck_id: 1,   front: Faker::GreekPhilosphers.unique.name, back: Faker::GreekPhilosophers.unique.quote})
    # Card.create({ deck_id: 1,   front: Faker::GreekPhilosphers.unique.name, back: Faker::GreekPhilosophers.unique.quote})
    # Card.create({ deck_id: 1,   front: Faker::GreekPhilosphers.unique.name, back: Faker::GreekPhilosophers.unique.quote})
    # Card.create({ deck_id: 1,   front: Faker::GreekPhilosphers.unique.name, back: Faker::GreekPhilosophers.unique.quote})
    # Card.create({ deck_id: 1,   front: Faker::GreekPhilosphers.unique.name, back: Faker::GreekPhilosophers.unique.quote})
    # Card.create({ deck_id: 1,   front: Faker::GreekPhilosphers.unique.name, back: Faker::GreekPhilosophers.unique.quote})
    
    
    
    
    # Card.create({ deck_id: 2,front: 'Q', back: 'A'})
    # Card.create({ deck_id: 3,front: 'Q', back: 'A'})
    # Card.create({ deck_id: 4,front: 'Q', back: 'A'})
    # Card.create({ deck_id: 5,front: 'Q', back: 'A'})
    # Card.create({ deck_id: 6,front: 'Q', back: 'A'})
    # Card.create({ deck_id: 7,front: 'Q', back: 'A'})
    # Card.create({ deck_id: 8,front: 'Q', back: 'A'})
    # Card.create({ deck_id: 1,front: 'Q', back: 'A'})
    # Card.create({ deck_id: 2,front: 'Q', back: 'A'})
    # Card.create({ deck_id: 3,front: 'Q', back: 'A'})
    # Card.create({ deck_id: 4,front: 'Q', back: 'A'})
    # Card.create({ deck_id: 5,front: 'Q', back: 'A'})
    # Card.create({ deck_id: 6,front: 'Q', back: 'A'})
    # Card.create({ deck_id: 7,front: 'Q', back: 'A'})
    # Card.create({ deck_id: 8,front: 'Q', back: 'A'})
    # Card.create({ deck_id: 1,front: 'Q', back: 'A'})
    # Card.create({ deck_id: 2,front: 'Q', back: 'A'})
    # Card.create({ deck_id: 3,front: 'Q', back: 'A'})
    # Card.create({ deck_id: 4,front: 'Q', back: 'A'})
    # Card.create({ deck_id: 5,front: 'Q', back: 'A'})
    # Card.create({ deck_id: 6,front: 'Q', back: 'A'})
    # Card.create({ deck_id: 7,front: 'Q', back: 'A'})
    # Card.create({ deck_id: 8,front: 'Q', back: 'A'})
    # Card.create({ deck_id: 1,front: 'Q', back: 'A'})
    # Card.create({ deck_id: 2,front: 'Q', back: 'A'})
    # Card.create({ deck_id: 3,front: 'Q', back: 'A'})
    # Card.create({ deck_id: 4,front: 'Q', back: 'A'})
    # Card.create({ deck_id: 5,front: 'Q', back: 'A'})
    # Card.create({ deck_id: 6,front: 'Q', back: 'A'})
    # Card.create({ deck_id: 7,front: 'Q', back: 'A'})
    # Card.create({ deck_id: 8,front: 'Q', back: 'A'})