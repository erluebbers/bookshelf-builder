# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "begin seeding..."

Book.create(title: "Never Let Me Go", author: "Kazuo Ishiguro", description: "As children, Kathy, Ruth, and Tommy were students at Hailsham, an exclusive boarding school secluded in the English countryside. It was a place of mercurial cliques and mysterious rules where teachers were constantly reminding their charges of how special they were. Now, years later, Kathy is a young woman. Ruth and Tommy have reentered her life. And for the first time she is beginning to look back at their shared past and understand just what it is that makes them special--and how that gift will shape the rest of their time together.", genre: "Sci-Fi")
Book.create(title: "The Buried Giant", author: "Kazuo Ishigur", description: "In post-Arthurian Britain, the wars that once raged between the Saxons and the Britons have finally ceased. Axl and Beatrice, an elderly British couple, set off to visit their son, whom they haven't seen in years. And, because a strange mist has caused mass amnesia throughout the land, they can scarcely remember anything about him. As they are joined on their journey by a Saxon warrior, his orphan charge, and an illustrious knight, Axl and Beatrice slowly begin to remember the dark and troubled past they all share.", genre: "Historical Fiction")
Book.create(title: "The Remains of the Day", author: "Kazuo Ishiguro", description: "This is Kazuo Ishiguro's profoundly compelling portrait of Stevens, the perfect butler, and of his fading, insular world in post-World War II England. Stevens, at the end of three decades of service at Darlington Hall, spending a day on a country drive, embarks as well on a journey through the past in an effort to reassure himself that he has served humanity by serving the great gentleman, Lord Darlington. But lurking in his memory are doubts about the true nature of Lord Darlington's greatness, and much graver doubts about the nature of his own life.", genre: "Literary Fiction")
Book.create(title: "Heaven", author: "Mieko Kawakami", description: "Fuyuko Irie is a freelance copy editor in her mid-thirties. Working and living alone in a city where it is not easy to form new relationships, she has little regular contact with anyone other than her editor, Hijiri, a woman of the same age but with a very different disposition. When Fuyuko stops one day on a Tokyo street and notices her reflection in a storefront window, what she sees is a drab, awkward, and spiritless woman who has lacked the strength to change her life and decides to do something about it.", genre: "Literary Fiction")
Book.create(title: "Breasts and Eggs", author: "Mieko Kawakami", description: "On a sweltering summer day, Makiko travels from Osaka to Tokyo, where her sister Natsu lives. She is in the company of her daughter, Midoriko, who has lately grown silent, finding herself unable to voice the vague yet overwhelming pressures associated with adolescence. The story of these three women reunited in a working-class neighborhood of Tokyo is told through the gaze of Natsu--thirty years old, an aspiring writer, haunted by hardships endured in her youth. Over the course of their few days together in the capital, Midoriko's silence will prove a catalyst for each woman to confront her fears and family secrets.", genre: "Literary Fiction")

Userbook.create(user_id: 1, book_id: 1)
Userbook.create(user_id: 1, book_id: 2)
Userbook.create(user_id: 1, book_id: 3)
Userbook.create(user_id: 1, book_id: 4)


puts "Done seeding..."
