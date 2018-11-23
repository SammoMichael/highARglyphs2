# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:

#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
    Deck.destroy_all
    Card.destroy_all
    User.destroy_all
    
    
    
    user1 = User.create(username: 'Sam', password: 'starwars')
    user2 = User.create(username: 'DemoUser', password: 'password')
    user3 = User.create(username: 'DemoUser2', password: 'password')
    user4 = User.create(username: 'DemoUser3', password: 'password')
     20.times do
        User.create({ username: Faker::StarWars.character,
            password: 'starwars'
        })
    end


    deck1 = Deck.create({ title: 'StarWars', creator_id: user1.id})
    deck2 = Deck.create({ title: 'Shakespeare Quotes', creator_id: user2.id})
    deck4 = Deck.create({ title: 'Pokemon', creator_id: user4.id})
    deck5 = Deck.create({ title: 'Hacker Wisdom', creator_id: user4.id})
    deck3 = Deck.create({ title: 'GameOfThrones', creator_id: user3.id})
   
    20.times do 
        Card.create({ deck_id: deck1.id, 
        front: Faker::StarWars.character, 
        back: Faker::StarWars.quote
        })
    end

    20.times do 
        Card.create({ deck_id: deck2.id, 
        front: 'Which Shakespeare play is this quote from?', 
        back: Faker::Shakespeare.hamlet
        })
    end

    20.times do 
        Card.create({ deck_id: deck3.id, 
        front: Faker::GameOfThrones.character, 
        back: Faker::GameOfThrones.quote
        })
    end

    20.times do 
        Card.create({ deck_id: deck4.id, 
        front: "Where does #{Faker::Pokemon.name} live?", 
        back: Faker::Pokemon.location
        })
    end
    
    20.times do 
        Card.create({ deck_id: deck5.id, 
        front: 'How do I...', 
        back: Faker::Hacker.say_something_smart
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