require 'date'

puts "destroying all feedbacks"
Feedback.destroy_all

puts "destroying all ratings"
Rating.destroy_all

puts "destroying all Agenda"
Agenda.destroy_all

puts "destroying all Meeting"
Meeting.destroy_all

puts "destroying all activities"
Activity.destroy_all

puts "destroying all User Team"
UserTeam.destroy_all

puts "destroying all teams"
Team.destroy_all

puts "destroying all users"
User.destroy_all

puts "destroying all companies"
Company.destroy_all



kick_maker = Company.create!({
  name: "Kick Maker",
  address: "11 villa Gaudelet 75011 Paris",
  photo: "https://www.belaircamp.org/wp-content/uploads/2018/06/KickMaker.png"
  });
#kick_maker.remote_photo_url = "https://www.dropbox.com/s/4hq7iczfih7enj9/KickMaker.png?dl=0"
kick_maker.save

puts "company created"


users_parameters = [
  {
    first_name: "Vincent",
    last_name: "Despatin",
    email: "vincent.despatin@kickmaker.com",
    company: kick_maker,
    password: "123456",
    photo: "https://uinames.com/api/photos/male/9.jpg"
  },
  {
      first_name: "Mikael",
  last_name: "Garriguet",
  email: "mikael.garriguet@kickmaker.com",
  password: "123456",
  company: kick_maker,
  photo: "https://uinames.com/api/photos/male/14.jpg"
  },
  {
  first_name: "Clément",
  last_name: "Pecastaings",
  email: "clement.pecastaings@kickmaker.com",
  password: "123456",
  company: kick_maker,
  photo: "https://uinames.com/api/photos/male/6.jpg"
  },
  {
  first_name: "Louise",
  last_name: "Salle",
  email: "louise.salle@kickmaker.com",
  password: "123456",
  company: kick_maker,
  photo: "https://uinames.com/api/photos/female/5.jpg"
  },
  {
  first_name: "Magdalena",
  last_name: "Niemec",
  email: "Magdalena.niemec@kickmaker.com",
  password: "123456",
  company: kick_maker,
  photo: "https://uinames.com/api/photos/female/3.jpg"
  },
  {
  first_name: "Laurent",
  last_name: "Toave",
  email: "Laurent.toave@kickmaker.com",
  password: "123456",
  company: kick_maker,
  photo: "https://uinames.com/api/photos/male/13.jpg"
  },
  {
  first_name: "Nicolas",
  last_name: "Martin",
  email: "nicolas.martin@kickmaker.com",
  password: "123456",
  company: kick_maker,
  photo: "https://uinames.com/api/photos/male/2.jpg"
  },
  {
  first_name: "Christophe",
  last_name: "Boucquet",
  email: "Christophe.boucquet@kickmaker.com",
  password: "123456",
  company: kick_maker,
  photo: "https://uinames.com/api/photos/male/20.jpg"
  },
  {
  first_name: "Servane",
  last_name: "Level",
  email: "servane.level@kickmaker.com",
  password: "123456",
  company: kick_maker,
  photo: "https://uinames.com/api/photos/female/17.jpg"
  },
  {
  first_name: "Raphaelle",
  last_name: "Grec",
  email: "raphaelle.grec@kickmaker.com",
  password: "123456",
  company: kick_maker,
  photo: "https://uinames.com/api/photos/female/25.jpg"
  },
  {
  first_name: "Diane",
  last_name: "Johnston Roussillon",
  email: "diane.johnston-roussillon@kickmaker.com",
  password: "123456",
  company: kick_maker,
  photo: "https://uinames.com/api/photos/female/10.jpg"
  }
]

array_users = users_parameters.map do |user|
  User.create!(user)
end

puts "Users created"

manager = User.first
sales = Team.create({
  name: "Sales",
  description: "10 outstanding sales Rep",
  average_age: 35,
  desired_intensiveness: "medium",
  manager: manager
  });
puts "Team created"

sales_team_parameters = [
  {
    user: array_users[0],
    team: sales
  },
  {
    user: array_users[1],
    team: sales
  },
  {
    user: array_users[2],
    team: sales
  },
  {
    user: array_users[3],
    team: sales
  },
  {
    user: array_users[4],
    team: sales
  },
  {
    user: array_users[5],
    team: sales
  },
  {
    user: array_users[6],
    team: sales
  },
  {
    user: array_users[7],
    team: sales
  },
  {
    user: array_users[8],
    team: sales
  },
  {
    user: array_users[9],
    team: sales
  },
  {
    user: array_users[10],
    team: sales
  },
  ]

  array_sales_team = sales_team_parameters.map do |sales|
  UserTeam.create!(sales)
end




activities_parameters = [
  {
  name: 'Yoga',
  description: "Yoga focuses on strength, flexibility and breathing to boost physical and mental wellbeing.
  The main components of yoga are postures (a series of movements designed to increase strength and flexibility) and breathing.",
  address: "40 Avenue de la République, 75011 Paris",
  intensiveness: "low",
  photo: "https://www.paris-energies-karate.com/s/cc_images/cache_2479056842.jpg"
  },
  {
  name: "Nordic walking",
  description: "Mickael and Kate come to you, provide you walking stick and let's go for a 1-hour speed walking in Paris in a 'taylor-made' circuit.",
  address: "11 villa gaudelet 75011 Paris",
  intensiveness: "low",
  photo: "http://biendansmacuisine.com/wp-content/uploads/2013/11/marche-nordique-hotel-de-ville-paris.jpg"
  },
  {
  name: "cycling",
  description: "Aimed at cyclists who have an increasing level cycling ability who are keen to start cycling on longer routes nearby but perhaps far away.
  We provide bikes and helmet.
  Each group will be tailored to over all ability to ensure a suitable route and some of these trips have already seen cyclists with Electric Bikes go that little bit further !!",
  address: "11 villa gaudelet 75011 Paris",
  intensiveness: "low",
  photo: "https://www.legrandhuit.eu/images/entreprises-team-building/haut/Image0004.jpg"
  },
  {
  name: "Tai-chi",
  description: "Our Beginners’ courses are suitable for all, regardless of age, level, shape and size – they will improve your health and well-being and make you feel good!
  Tai Chi Life is a friendly community where everyone is welcome. We are a diverse group with big results. If you want to grow with grace and fulfill your dreams, this is the right place for you.",
  address: "9 rue alphonse Baudin 75011 Paris",
  intensiveness: "low",
  photo: "https://www.agence-evenementielle-innovevents.fr/wp-content/uploads/2019/04/tai-chi-animation-seminaire-brise-glace-entreprise-original.jpg"
  },
  {
  name: "Feldenkrais",
  description: "Re-educate the nervous system through gentle, carefully structured sequences of movements. Learn Feldenkrais and improve your body’s performance in sport, dance, music or everyday life by becoming aware of habits that limit you.
  Courses are open to everyone and all skill levels. Devised by the physicist Moshé Feldenkrais, the Feldenkrais method aims to help you re-discover your innate capacity for graceful efficient movement.",
  address: "100 Rue de la Folie Méricourt, 75011 Paris",
  intensiveness: "low",
  photo: "https://www.disponibilite-creative.fr/wp-content/uploads/2017/01/cours-collectifs.jpg"
  },
  {
  name: "Ping-Pong",
  description: "Table Tennis is quite a gentle on your body, almost injury-free and does not require any special skills at least until the beginner level. And the best part is, it's relatively easier to learn and a great way to de-stress yourself.
  People of all age groups can play and enjoy this sport. On average you burn 500 calories per hour while playing table tennis.
  Table tennis is a great game to gel up with friends, family and colleagues. Simple rules, along with the ease of playing makes it a perfect recreational sport. Moreover, the game is not very demanding physically but at the same time is very engaging.",
  address: "9 rue alphonse Baudin 75011 Paris",
  intensiveness: "Medium",
  photo: "http://www.jamespot.com/fr/blog/wp-content/uploads/2010/11/Tournois-de-Ping-Pong-Jamespot-Fiitli-5.jpg"
  # equipment activity : Ping Pong fight club
  # time: 1h 60
  },
  {
  name: "Badminton",
  description: "A one-hour session of badminton burns upto 450 calories per hour. Between the running, diving, lunging, and hitting, this sport helps gives a great cardio workout and serves as a path to weight-loss and building endurance.
  The fast-paced nature of the game significantly improves your reflexes and speed. Badminton reduces anxiety and stress
  A 2v2 match provide ample opportunities for one to socialise to meet new people whilst also giving one the experience of an intense double match!",
  address: "9 rue alphonse Baudin 75011 Paris",
  intensiveness: "Medium",
  photo: "https://fiitli.com/wp-content/uploads/2019/01/La-Cantine-VS-Ge%CC%81omensura.jpg"
  },
  {
  name: "Korfball",
  description: "Korfball is a truly mixed-gender sport, which naturally creates an air of camaraderie and comradeship. This dynamic, high-energy game will get your heart pumping and your blood flowing.",
  address: "11 Rue de Candie, 75011 Paris",
  intensiveness: "Medium",
  photo: "https://i1.wp.com/gazettesports.fr/wp-content/uploads/2015/12/DSC06454.jpg?resize=530%2C396&ssl=1"
  },
  {
  name: "Circus",
  description: "Circus helps people learn life skills, such as independence,
  self-confidence, success and social skills 'The team spirit, with ages and backgrounds losing
  their importance, has been tremendous. We’ve
  achieved this simply by doing things together, us
  instructors included. At times, this has meant that
  we have played around with pictures and shared
  laughs. At other times we’ve had quite long chats
  in between exercises. We’ve discarded practically
  all rules and improvise all situations pretty freely.'",
  address: "110 Rue Amelot, 75011 Paris",
  intensiveness: "Medium",
  photo: "https://ig.prmeng.rosselcdn.net//i/0/0.015/1x0.97/d-20170913-3GUYFT.jpg?auth=a3693"
  },
  {
  name: "Volleyball",
  description: "",
  address: "9 rue alphonse Baudin 75011 Paris",
  intensiveness: "Medium",
  photo: "https://www.handicap.fr/static/contenu/img3/volley-assis-handisport-9662.jpg"
  },
  {
  name: "Circuit Training",
  description: "Exercise is the ultimate mood booster. Reduce stress and anxiety with your collegues, stay motivated, promote healthy competition and make your average gym session so much more fun.",
  address: "9 Passage Thiéré, 75011 Paris",
  intensiveness: "High",
  photo: "https://windoo-storage.ams3.digitaloceanspaces.com/standard_picture/59e0d8c03f679435771991.jpg"
  },
  {
  name: "Indoor Rock Climbing",
  description: "Rock climbing is a physically and mentally demanding sport, one that often tests a climber’s strength, endurance, agility, and balance along with his or her mental control
  You will challenge yourself, conquer fears, burn calories (820 for 1 hour climbing) and you will combine cardio and strength into a single workout.",
  address: "35 Rue des Grands Champs, 75020 Paris",
  intensiveness: "High",
  photo: "https://www.investinprovence.com/sites/default/files/arkoseprado_blocpark800px.jpg"
  },
  {
  name: "Swedish Fit",
  description: "9 rue alphonse Baudin 75011 Paris",
  address: "9-11 Rue de Malte, 75011 Paris",
  intensiveness: "High",
  photo: "https://i.f1g.fr/media/figaro/orig/2016/01/20/XVM2476d366-bf7a-11e5-936d-d2bfcae1fcdd.jpg"
  },
  {
  name: "Rowing",
  description: "Rowing is all about trust, dedication, selflessness, determination, honesty and commitment.
  TopRow offers 'Learn to Row' courses, which give an introduction to the exciting sport of rowing.
  Their professional team will guide trainees on the water, teaching ypur team the rowing technique during structured lessons.
  Aimed at anyone with an interest in the sport, TopRow is the place to pick up the oars.",
  address: "48 quai de Jemmapes 75010 Paris",
  intensiveness: "High",
  photo: "http://lifa.aviron.free.fr/wordpress/wp-content/uploads/Entreprise1.jpg"
  },
  {
  name: "Atheltism - 3 tasks of Hercules",
  description: "How far can you throw a javellin? How fast can you run on a 100 meters race? How far can you jump?
  Challenge your collegues in individual or team competition on a 3 sessions.",
  address: "23 Rue des Balkans, 75020 Paris",
  intensiveness: "High",
  photo: "http://s1.lprs1.fr/images/2017/09/13/7257846_b12ef4b6-97df-11e7-98ab-14eea8c7b1d9-1_1000x625.jpg"
  }
]
array_activities = activities_parameters.map do |activity|
  Activity.create!(activity)
end
puts "Activities created"


meetings_parameters = [
  {
  name: "Kick Off 2018",
  description: "Objectif - 10 Mios",
  start_time: DateTime.new(2019,1,11,9,30,0),
  available_duration: 240,
  activity: array_activities[11],
  team: sales
  },
  {
  name: "PRV Presenation - February",
  description: "presentation Plan de Remunération Variable",
  start_time: DateTime.new(2019,2,4,9,0,0),
  available_duration: 60,
  activity: array_activities[10],
  team: sales
  },
  {
  name: "D-10 final sprint",
  description: "Efficacity - Energy - postivism",
  start_time: DateTime.new(2019,3,15,9,0,0),
  available_duration: 60,
  activity: array_activities[5],
  team: sales
  },
  {
  name: "Kick Off T2",
  description: "All we need to perform",
  start_time: DateTime.new(2019,3,1,9,30,0),
  available_duration: 90,
  activity: array_activities[3],
  team: sales
  },
  {
  name: "Monthly meeting - May",
  description: "Important information + focus client",
  start_time: DateTime.new(2019,5,6,9,0,0),
  available_duration: 60,
  activity: array_activities[7],
  team: sales
  },
  {
  name: "Final Sprint - June",
  description: "Efficacity - Energy - postivism",
  start_time: DateTime.new(2019,6,3,8,30,0),
  available_duration: 60,
  activity: array_activities[8],
  team: sales
  }
]

array_meetings = meetings_parameters.map do |meeting|
  Meeting.create!(meeting)
end
puts "Meeting created"


agenda_parameters = [
  {
  meeting: array_meetings[0],
  duration: 20,
  title: "1- 2018 Marketing Strategy",
  description: "PFME & Media Plan",
  user: array_users[0]
  },
  {
  meeting: array_meetings[0],
  duration: 25,
  title: "2- Innovation Plan",
  description: "",
  user: array_users[0]
  },
  {
  meeting: array_meetings[0],
  duration: 15,
  title: "3- <Cultivate></Cultivate> our Kickmaker cultures through sport",
  description: "presentation roadmap & milestones",
  user: array_users[0]
  },
  {
  meeting: array_meetings[1],
  duration: 30,
  title: "1- PRV mechanism & objectives",
  description: "presentation roadmap & milestones",
  user: array_users[0]
  },
  {
  meeting: array_meetings[1],
  duration: 30,
  title: "2- Q&A",
  description: "presentation roadmap & milestones",
  user: array_users[0]
  },
  {
  meeting: array_meetings[2],
  duration: 30,
  title: "Inspiring Best Practice ",
  description: "Cofely BP ",
  user: array_users[3]
  },
  {
  meeting: array_meetings[3],
  duration: 10,
  title: "1- Year-to-date results",
  description: "presentation global results and Year To Go ",
  user: array_users[0]
  },
  {
  meeting: array_meetings[3],
  duration: 10,
  title: "2- Recruiting plan",
  description: "presentation Markting ",
  user: array_users[0]
  },
  {
  meeting: array_meetings[3],
  duration: 5,
  title: "3- Monthly Objectives",
  description: "presentation global results and Year To Go ",
  user: array_users[0]
  },
  {
  meeting: array_meetings[3],
  duration: 10,
  title: "4- Mika's Best Practice",
  description: "VInci Deal Key of success ",
  user: array_users[1]
  },
  {
  meeting: array_meetings[4],
  duration: 20,
  title: "1- Pipeline and turnover to sign",
  description: " ",
  user: array_users[0]
  },
  {
  meeting: array_meetings[4],
  duration: 10,
  title: "2- Logistic issues",
  description: "New forms",
  user: array_users[6]
  },
  {
  meeting: array_meetings[5],
  duration: 15,
  title: "1- Team Decision to maje: focus client",
  description: "few times to complete objectives : choose battles",
  user: array_users[0]
  },
  {
  meeting: array_meetings[5],
  duration: 15,
  title: "2- Special Offer to complete Quarter",
  description: "10 days discount",
  user: array_users[9]
  }
]

array_agendas = agenda_parameters.map do |agenda|
  Agenda.create!(agenda)
end
puts "Agendas created"

rating_parameters = [
  {
  meeting: array_meetings[0],
  question:"How do you feel before this Meeting Sport Session?",
  manager: array_users[0]
  },
  {
  meeting: array_meetings[0],
  question:"Do you consider this meeting an efficient one",
  manager: array_users[0]
  },
  {
  meeting: array_meetings[1],
  question:"How do you feel before this Meeting Sport Session?",
  manager: array_users[0]
  },
  {
  meeting: array_meetings[1],
  question:"Do you consider this meeting an efficient one",
  manager: array_users[0]
  },
  {
  meeting: array_meetings[2],
  question:"How do you feel before this Meeting Sport Session?",
  manager: array_users[0]
  },
  {
  meeting: array_meetings[2],
  question:"Do you consider this meeting an efficient one",
  manager: array_users[0]
  },
  {
  meeting: array_meetings[3],
  question:"How do you feel before this Meeting Sport Session?",
  manager: array_users[0]
  },
  {
  meeting: array_meetings[3],
  question:"Do you consider this meeting an efficient one",
  manager: array_users[0]
  },
  {
  meeting: array_meetings[4],
  question:"How do you feel before this Meeting Sport Session?",
  manager: array_users[0]
  },
  {
  meeting: array_meetings[4],
  question:"Do you consider this meeting an efficient one",
  manager: array_users[0]
  },
  {
  meeting: array_meetings[5],
  question:"How do you feel before this Meeting Sport Session?",
  manager: array_users[0]
  },
  {
  meeting: array_meetings[5],
  question:"Do you consider this meeting an efficient one",
  manager: array_users[0]
  }
]
array_ratings = rating_parameters.map do |rating|
  Rating.create!(rating)
end


puts "Rating created"

feedback_parameters = [
  {
    user: array_users[0],
    rating: array_ratings[0],
    answer: 5
  },
  {
    user: array_users[0],
    rating: array_ratings[1],
    answer: 5
  },
  {
    user: array_users[0],
    rating: array_ratings[2],
    answer: 5
  },
  {
    user: array_users[0],
    rating: array_ratings[3],
    answer: 5
  },
  {
    user: array_users[0],
    rating: array_ratings[4],
    answer: 5
  },
  {
    user: array_users[0],
    rating: array_ratings[5],
    answer: 5
  },
  {
    user: array_users[0],
    rating: array_ratings[6],
    answer: 5
  },
  {
    user: array_users[0],
    rating: array_ratings[7],
    answer: 5
  },
  {
    user: array_users[0],
    rating: array_ratings[8],
    answer: 5
  },
  {
    user: array_users[0],
    rating: array_ratings[9],
    answer: 5
  },
  {
    user: array_users[0],
    rating: array_ratings[10],
    answer: 5
  },
  {
    user: array_users[0],
    rating: array_ratings[11],
    answer: 5
  },
  {
    user: array_users[1],
    rating: array_ratings[0],
    answer: 3
  },
  {
    user: array_users[1],
    rating: array_ratings[1],
    answer: 5
  },
  {
    user: array_users[1],
    rating: array_ratings[2],
    answer: 5
  },
  {
    user: array_users[1],
    rating: array_ratings[3],
    answer: 3
  },
  {
    user: array_users[1],
    rating: array_ratings[4],
    answer: 5
  },
  {
    user: array_users[1],
    rating: array_ratings[5],
    answer: 3
  },
  {
    user: array_users[1],
    rating: array_ratings[6],
    answer: 3
  },
  {
    user: array_users[1],
    rating: array_ratings[7],
    answer: 5
  },
  {
    user: array_users[1],
    rating: array_ratings[8],
    answer: 3
  },
  {
    user: array_users[1],
    rating: array_ratings[9],
    answer: 5
  },
  {
    user: array_users[1],
    rating: array_ratings[10],
    answer: 3
  },
  {
    user: array_users[1],
    rating: array_ratings[11],
    answer: 5
  },
  {
    user: array_users[2],
    rating: array_ratings[0],
    answer: 5
  },
  {
    user: array_users[2],
    rating: array_ratings[1],
    answer: 3
  },
  {
    user: array_users[2],
    rating: array_ratings[2],
    answer: 3
  },
  {
    user: array_users[2],
    rating: array_ratings[3],
    answer: 5
  },
  {
    user: array_users[2],
    rating: array_ratings[4],
    answer: 5
  },
  {
    user: array_users[2],
    rating: array_ratings[5],
    answer: 3
  },
  {
    user: array_users[2],
    rating: array_ratings[6],
    answer: 5
  },
  {
    user: array_users[2],
    rating: array_ratings[7],
    answer: 3
  },
  {
    user: array_users[2],
    rating: array_ratings[8],
    answer: 5
  },
  {
    user: array_users[2],
    rating: array_ratings[9],
    answer: 5
  },
  {
    user: array_users[2],
    rating: array_ratings[10],
    answer: 3
  },
  {
    user: array_users[2],
    rating: array_ratings[11],
    answer: 5
  },
  {
    user: array_users[3],
    rating: array_ratings[0],
    answer: 3
  },
  {
    user: array_users[3],
    rating: array_ratings[1],
    answer: 5
  },
  {
    user: array_users[3],
    rating: array_ratings[2],
    answer: 3
  },
  {
    user: array_users[3],
    rating: array_ratings[3],
    answer: 5
  },
  {
    user: array_users[3],
    rating: array_ratings[4],
    answer: 5
  },
  {
    user: array_users[3],
    rating: array_ratings[5],
    answer: 3
  },
  {
    user: array_users[3],
    rating: array_ratings[6],
    answer: 3
  },
  {
    user: array_users[3],
    rating: array_ratings[7],
    answer: 5
  },
  {
    user: array_users[3],
    rating: array_ratings[8],
    answer: 5
  },
  {
    user: array_users[3],
    rating: array_ratings[9],
    answer: 5
  },
  {
    user: array_users[3],
    rating: array_ratings[10],
    answer: 3
  },
  {
    user: array_users[3],
    rating: array_ratings[11],
    answer: 3
  },
  {
    user: array_users[4],
    rating: array_ratings[0],
    answer: 5
  },
  {
    user: array_users[4],
    rating: array_ratings[1],
    answer: 3
  },
  {
    user: array_users[4],
    rating: array_ratings[2],
    answer: 5
  },
  {
    user: array_users[4],
    rating: array_ratings[3],
    answer: 2
  },
  {
    user: array_users[4],
    rating: array_ratings[4],
    answer: 2
  },
  {
    user: array_users[4],
    rating: array_ratings[5],
    answer: 2
  },
  {
    user: array_users[4],
    rating: array_ratings[6],
    answer: 5
  },
  {
    user: array_users[4],
    rating: array_ratings[7],
    answer: 5
  },
  {
    user: array_users[4],
    rating: array_ratings[8],
    answer: 5
  },
  {
    user: array_users[4],
    rating: array_ratings[9],
    answer: 2
  },
  {
    user: array_users[4],
    rating: array_ratings[10],
    answer: 5
  },
  {
    user: array_users[4],
    rating: array_ratings[11],
    answer: 2
  },
  {
    user: array_users[5],
    rating: array_ratings[0],
    answer: 5
  },
  {
    user: array_users[5],
    rating: array_ratings[1],
    answer: 5
  },
  {
    user: array_users[5],
    rating: array_ratings[2],
    answer: 4
  },
  {
    user: array_users[5],
    rating: array_ratings[3],
    answer: 5
  },
  {
    user: array_users[5],
    rating: array_ratings[4],
    answer: 4
  },
  {
    user: array_users[5],
    rating: array_ratings[5],
    answer: 4
  },
  {
    user: array_users[5],
    rating: array_ratings[6],
    answer: 5
  },
  {
    user: array_users[5],
    rating: array_ratings[7],
    answer: 5
  },
  {
    user: array_users[5],
    rating: array_ratings[8],
    answer: 5
  },
  {
    user: array_users[5],
    rating: array_ratings[9],
    answer: 5
  },
  {
    user: array_users[5],
    rating: array_ratings[10],
    answer: 5
  },
  {
    user: array_users[5],
    rating: array_ratings[11],
    answer: 4
  },
  {
    user: array_users[6],
    rating: array_ratings[0],
    answer: 5
  },
  {
    user: array_users[6],
    rating: array_ratings[1],
    answer: 5
  },
  {
    user: array_users[6],
    rating: array_ratings[2],
    answer: 3
  },
  {
    user: array_users[6],
    rating: array_ratings[3],
    answer: 5
  },
  {
    user: array_users[6],
    rating: array_ratings[4],
    answer: 5
  },
  {
    user: array_users[6],
    rating: array_ratings[5],
    answer: 3
  },
  {
    user: array_users[6],
    rating: array_ratings[6],
    answer: 5
  },
  {
    user: array_users[6],
    rating: array_ratings[7],
    answer: 5
  },
  {
    user: array_users[6],
    rating: array_ratings[8],
    answer: 3
  },
  {
    user: array_users[6],
    rating: array_ratings[9],
    answer: 5
  },
  {
    user: array_users[6],
    rating: array_ratings[10],
    answer: 5
  },
  {
    user: array_users[6],
    rating: array_ratings[11],
    answer: 5
  },
  {
     user: array_users[7],
    rating: array_ratings[0],
    answer: 4
  },
  {
    user: array_users[7],
    rating: array_ratings[1],
    answer: 5
  },
  {
    user: array_users[7],
    rating: array_ratings[2],
    answer: 4
  },
  {
    user: array_users[7],
    rating: array_ratings[3],
    answer: 4
  },
  {
    user: array_users[7],
    rating: array_ratings[4],
    answer: 5
  },
  {
    user: array_users[7],
    rating: array_ratings[5],
    answer: 5
  },
  {
    user: array_users[7],
    rating: array_ratings[6],
    answer: 5
  },
  {
    user: array_users[7],
    rating: array_ratings[7],
    answer: 4
  },
  {
    user: array_users[7],
    rating: array_ratings[8],
    answer: 5
  },
  {
    user: array_users[7],
    rating: array_ratings[9],
    answer: 5
  },
  {
    user: array_users[7],
    rating: array_ratings[10],
    answer: 5
  },
  {
    user: array_users[7],
    rating: array_ratings[11],
    answer: 5
  },
  {
    user: array_users[8],
    rating: array_ratings[0],
    answer: 4
  },
  {
    user: array_users[8],
    rating: array_ratings[1],
    answer: 5
  },
  {
    user: array_users[8],
    rating: array_ratings[2],
    answer: 4
  },
  {
    user: array_users[8],
    rating: array_ratings[3],
    answer: 4
  },
  {
    user: array_users[9],
    rating: array_ratings[4],
    answer: 5
  },
  {
    user: array_users[8],
    rating: array_ratings[5],
    answer: 5
  },
  {
    user: array_users[8],
    rating: array_ratings[6],
    answer: 4
  },
  {
    user: array_users[8],
    rating: array_ratings[7],
    answer: 5
  },
  {
    user: array_users[8],
    rating: array_ratings[8],
    answer: 5
  },
  {
    user: array_users[8],
    rating: array_ratings[9],
    answer: 4
  },
  {
    user: array_users[8],
    rating: array_ratings[10],
    answer: 4
  },
  {
    user: array_users[8],
    rating: array_ratings[11],
    answer: 5
  },
  {
    user: array_users[9],
    rating: array_ratings[0],
    answer: 4
  },
  {
    user: array_users[9],
    rating: array_ratings[1],
    answer: 5
  },
  {
    user: array_users[9],
    rating: array_ratings[2],
    answer: 5
  },
  {
    user: array_users[9],
    rating: array_ratings[3],
    answer: 3
  },
  {
    user: array_users[9],
    rating: array_ratings[4],
    answer: 4
  },
  {
    user: array_users[9],
    rating: array_ratings[5],
    answer: 5
  },
  {
    user: array_users[9],
    rating: array_ratings[6],
    answer: 3
  },
  {
    user: array_users[9],
    rating: array_ratings[7],
    answer: 5
  },
  {
    user: array_users[9],
    rating: array_ratings[8],
    answer: 4
  },
  {
    user: array_users[9],
    rating: array_ratings[9],
    answer: 5
  },
  {
    user: array_users[9],
    rating: array_ratings[10],
    answer: 4
  },
  {
    user: array_users[9],
    rating: array_ratings[11],
    answer: 5
  },
  {
     user: array_users[10],
    rating: array_ratings[0],
    answer: 5
  },
  {
    user: array_users[10],
    rating: array_ratings[1],
    answer: 3
  },
  {
    user: array_users[10],
    rating: array_ratings[2],
    answer: 5
  },
  {
    user: array_users[10],
    rating: array_ratings[3],
    answer: 3
  },
  {
    user: array_users[10],
    rating: array_ratings[4],
    answer: 5
  },
  {
    user: array_users[10],
    rating: array_ratings[5],
    answer: 5
  },
  {
    user: array_users[10],
    rating: array_ratings[6],
    answer: 2
  },
  {
    user: array_users[10],
    rating: array_ratings[7],
    answer: 4
  },
  {
    user: array_users[10],
    rating: array_ratings[8],
    answer: 3
  },
  {
    user: array_users[10],
    rating: array_ratings[9],
    answer: 4
  },
  {
    user: array_users[10],
    rating: array_ratings[10],
    answer: 3
  },
  {
    user: array_users[10],
    rating: array_ratings[11],
    answer: 5
  }
]

array_feedbacks = feedback_parameters.map do |feedback|
  Feedback.create!(feedback)
end
puts "Feedback created"

# sum = 0
# array_feedbacks.map do |f|
# i = f.rating[:answer]
# sum += i
# average = sum / array_feedbacks.length.to_i
# end

# puts average

