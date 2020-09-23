import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/router/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

const initialState = {
    "favorites": [],
    "results":[
       {
          "id":337401,
          "video":false,
          "vote_count":1078,
          "vote_average":7.8,
          "title":"Mulan",
          "release_date":"2020-09-04",
          "original_language":"en",
          "original_title":"Mulan",
          "genre_ids":[
             28,
             12,
             18,
             14,
             10752
          ],
          "backdrop_path":"/xl5oCFLVMo4d4Pgxvrf8Jmc2IlA.jpg",
          "adult":false,
          "overview":"When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.",
          "poster_path":"/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
          "popularity":1653.138,
          "media_type":"movie"
       },
       {
          "id":577922,
          "video":false,
          "vote_count":1290,
          "vote_average":7.5,
          "title":"Tenet",
          "release_date":"2020-08-22",
          "original_language":"en",
          "original_title":"Tenet",
          "genre_ids":[
             28,
             878,
             53
          ],
          "backdrop_path":"/wzJRB4MKi3yK138bJyuL9nx47y6.jpg",
          "adult":false,
          "overview":"Armed with only one word - Tenet - and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
          "poster_path":"/k68nPLbIST6NP96JmTxmZijEvCA.jpg",
          "popularity":238.203,
          "media_type":"movie"
       },
       {
          "id":501979,
          "video":false,
          "vote_count":128,
          "vote_average":6.5,
          "title":"Bill \u0026 Ted Face the Music",
          "release_date":"2020-08-27",
          "original_language":"en",
          "original_title":"Bill \u0026 Ted Face the Music",
          "genre_ids":[
             12,
             35,
             878
          ],
          "backdrop_path":"/oazPqs1z78LcIOFslbKtJLGlueo.jpg",
          "adult":false,
          "overview":"Yet to fulfill their rock and roll destiny, the now middle-aged best friends Bill and Ted set out on a new adventure when a visitor from the future warns them that only their song can save life as we know it. Along the way, they are helped by their daughters, a new batch of historical figures and a few music legends—to seek the song that will set their world right and bring harmony to the universe.",
          "poster_path":"/4V2nTPfeB59TcqJcUfQ9ziTi7VN.jpg",
          "popularity":337.236,
          "media_type":"movie"
       },
       {
          "id":500840,
          "video":false,
          "vote_count":254,
          "vote_average":6.7,
          "title":"I'm Thinking of Ending Things",
          "release_date":"2020-08-28",
          "original_language":"en",
          "original_title":"I'm Thinking of Ending Things",
          "genre_ids":[
             18,
             53
          ],
          "backdrop_path":"/x3NqAzuTWvnron4pXXyFGkyTFo7.jpg",
          "adult":false,
          "overview":"Nothing is as it seems when a woman experiencing misgivings about her new boyfriend joins him on a road trip to meet his parents at their remote farm.",
          "poster_path":"/5ynWWapdl45hJXUh0KIevxSG9JQ.jpg",
          "popularity":192.27,
          "media_type":"movie"
       },
       {
          "id":613504,
          "video":false,
          "vote_count":181,
          "vote_average":7.2,
          "title":"After We Collided",
          "release_date":"2020-09-02",
          "original_language":"en",
          "original_title":"After We Collided",
          "genre_ids":[
             18,
             10749
          ],
          "backdrop_path":"/dZJJDmiwp0W1NE74SY5WV00v0Ec.jpg",
          "adult":false,
          "overview":"Tessa finds herself struggling with her complicated relationship with Hardin; she faces a dilemma that could change their lives forever.",
          "poster_path":"/tM4hht0LdY06UbuxGR4LjK6adCD.jpg",
          "popularity":840.907,
          "media_type":"movie"
       },
       {
          "id":581392,
          "video":false,
          "vote_count":365,
          "vote_average":7.2,
          "title":"Peninsula",
          "release_date":"2020-07-15",
          "original_language":"ko",
          "original_title":"반도",
          "genre_ids":[
             28,
             27,
             53
          ],
          "backdrop_path":"/gEjNlhZhyHeto6Fy5wWy5Uk3A9D.jpg",
          "adult":false,
          "overview":"A soldier and his team battle hordes of post-apocalyptic zombies in the wastelands of the Korean Peninsula",
          "poster_path":"/sy6DvAu72kjoseZEjocnm2ZZ09i.jpg",
          "popularity":841.906,
          "media_type":"movie"
       },
       {
          "id":605116,
          "video":false,
          "vote_count":1123,
          "vote_average":6.7,
          "title":"Project Power",
          "release_date":"2020-08-14",
          "original_language":"en",
          "original_title":"Project Power",
          "genre_ids":[
             28,
             80,
             878
          ],
          "backdrop_path":"/qVygtf2vU15L2yKS4Ke44U4oMdD.jpg",
          "adult":false,
          "overview":"An ex-soldier, a teen and a cop collide in New Orleans as they hunt for the source behind a dangerous new pill that grants users temporary superpowers.",
          "poster_path":"/TnOeov4w0sTtV2gqICqIxVi74V.jpg",
          "popularity":841.67,
          "media_type":"movie"
       },
       {
          "id":539885,
          "video":false,
          "vote_count":225,
          "vote_average":6.1,
          "title":"Ava",
          "release_date":"2020-08-06",
          "original_language":"en",
          "original_title":"Ava",
          "genre_ids":[
             28,
             80,
             18,
             53
          ],
          "backdrop_path":"/ekkuqt9Q2ad1F7xq2ZONP0oq36P.jpg",
          "adult":false,
          "overview":"A black ops assassin is forced to fight for her own survival after a job goes dangerously wrong.",
          "poster_path":"/uGhQ2ZGBpzCj6wC5jUrybsZuPTI.jpg",
          "popularity":682.921,
          "media_type":"movie"
       },
       {
          "id":718444,
          "video":false,
          "vote_count":162,
          "vote_average":6.0,
          "title":"Rogue",
          "release_date":"2020-08-20",
          "original_language":"en",
          "original_title":"Rogue",
          "genre_ids":[
             28
          ],
          "backdrop_path":"/x4UkhIQuHIJyeeOTdcbZ3t3gBSa.jpg",
          "adult":false,
          "overview":"Battle-hardened O’Hara leads a lively mercenary team of soldiers on a daring mission: rescue hostages from their captors in remote Africa. But as the mission goes awry and the team is stranded, O’Hara’s squad must face a bloody, brutal encounter with a gang of rebels.",
          "poster_path":"/zVncJzXzwIO15YM1WilqYn30r54.jpg",
          "popularity":1236.635,
          "media_type":"movie"
       },
       {
          "id":508570,
          "video":false,
          "vote_count":108,
          "vote_average":7.2,
          "title":"The One and Only Ivan",
          "release_date":"2020-08-21",
          "original_language":"en",
          "original_title":"The One and Only Ivan",
          "genre_ids":[
             35,
             18,
             10751
          ],
          "backdrop_path":"/fFdOJxmG2U7IYYlkFKtDk1nGPhF.jpg",
          "adult":false,
          "overview":"Ivan is a 400-pound silverback gorilla who shares a communal habitat in a suburban shopping mall with Stella the elephant, Bob the dog, and various other animals. He has few memories of the jungle where he was captured, but when a baby elephant named Ruby arrives, it touches something deep within him. Ruby is recently separated from her family in the wild, which causes him to question his life, where he comes from and where he ultimately wants to be.",
          "poster_path":"/e7ZsW5EbLbQwoGx0548KCmCAXA9.jpg",
          "popularity":318.591,
          "media_type":"movie"
       },
       {
          "id":658777,
          "video":false,
          "vote_count":63,
          "vote_average":5.5,
          "title":"Freaks – You're One of Us",
          "release_date":"2020-09-02",
          "original_language":"de",
          "original_title":"Freaks – Du bist eine von uns",
          "genre_ids":[
             18,
             14
          ],
          "backdrop_path":"/9XD5AdBBDXOzyRYm1BFh6izi8Yh.jpg",
          "adult":false,
          "overview":"After having a chance encounter with a mysterious character, Wendy, a young working class mother, discovers that she has super powers.",
          "poster_path":"/6xzEwXNllYKxhRFCtWzRaYdA6gD.jpg",
          "popularity":190.883,
          "media_type":"movie"
       },
       {
          "id":644090,
          "video":false,
          "vote_count":137,
          "vote_average":6.7,
          "title":"Love, Guaranteed",
          "release_date":"2020-09-03",
          "original_language":"en",
          "original_title":"Love, Guaranteed",
          "genre_ids":[
             35,
             10749
          ],
          "backdrop_path":"/i6X9J6AgGhR3FNTtEc5GRs9e3ya.jpg",
          "adult":false,
          "overview":"A lawyer takes on a new client that wants to sue a dating website because it guarantees love.",
          "poster_path":"/6K22JB6fZZLBuM0knfl8rs9Zoxg.jpg",
          "popularity":252.17,
          "media_type":"movie"
       },
       {
          "id":284054,
          "video":false,
          "vote_count":15905,
          "vote_average":7.4,
          "title":"Black Panther",
          "release_date":"2018-02-13",
          "original_language":"en",
          "original_title":"Black Panther",
          "genre_ids":[
             28,
             12,
             14,
             878
          ],
          "backdrop_path":"/6ELJEzQJ3Y45HczvreC3dg0GV5R.jpg",
          "adult":false,
          "overview":"King T'Challa returns home from America to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne by factions within his own country as well as without. Using powers reserved to Wakandan kings, T'Challa assumes the Black Panther mantel to join with girlfriend Nakia, the queen-mother, his princess-kid sister, members of the Dora Milaje (the Wakandan 'special forces') and an American secret agent, to prevent Wakanda from being dragged into a world war.",
          "poster_path":"/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
          "popularity":164.249,
          "media_type":"movie"
       },
       {
          "id":340102,
          "video":false,
          "vote_count":190,
          "vote_average":6.1,
          "title":"The New Mutants",
          "release_date":"2020-08-26",
          "original_language":"en",
          "original_title":"The New Mutants",
          "genre_ids":[
             28,
             12,
             27,
             878
          ],
          "backdrop_path":"/eCIvqa3QVCx6H09bdeOS8Al2Sqy.jpg",
          "adult":false,
          "overview":"Five young mutants, just discovering their abilities while held in a secret facility against their will, fight to escape their past sins and save themselves.",
          "poster_path":"/45FNxAIooJFqjsVaCJts9YJHXS4.jpg",
          "popularity":286.868,
          "media_type":"movie"
       },
       {
          "id":425001,
          "video":false,
          "vote_count":31,
          "vote_average":6.0,
          "title":"The War with Grandpa",
          "release_date":"2020-01-31",
          "original_language":"en",
          "original_title":"The War with Grandpa",
          "genre_ids":[
             35,
             18,
             10751
          ],
          "backdrop_path":"/tjcx6sA2dcUBEUpjwXne69njia3.jpg",
          "adult":false,
          "overview":"Sixth-grader Peter is pretty much your average kid—he likes gaming, hanging with his friends and his beloved pair of Air Jordans. But when his recently widowed grandfather Ed  moves in with Peter’s family, the boy is forced to give up his most prized possession of all, his bedroom. Unwilling to let such an injustice stand, Peter devises a series of increasingly elaborate pranks to drive out the interloper, but Grandpa Ed won’t go without a fight.",
          "poster_path":"/bf0iXmSvZdJitc3kCJQpba26RoO.jpg",
          "popularity":35.423,
          "media_type":"movie"
       },
       {
          "id":618354,
          "video":false,
          "vote_count":142,
          "vote_average":7.4,
          "title":"Superman: Man of Tomorrow",
          "release_date":"2020-08-23",
          "original_language":"en",
          "original_title":"Superman: Man of Tomorrow",
          "genre_ids":[
             28,
             16,
             878
          ],
          "backdrop_path":"/bazlsLkNuhy3IuhviepqvlMm2hV.jpg",
          "adult":false,
          "overview":"It’s the dawn of a new age of heroes, and Metropolis has just met its first. But as Daily Planet intern Clark Kent – working alongside reporter Lois Lane – secretly wields his alien powers of flight, super-strength and x-ray vision in the battle for good, there’s even greater trouble on the horizon.",
          "poster_path":"/6Bbq8qQWpoApLZYWFFAuZ1r2gFw.jpg",
          "popularity":301.852,
          "media_type":"movie"
       },
       {
          "id":659986,
          "video":false,
          "vote_count":39,
          "vote_average":6.0,
          "title":"The Owners",
          "release_date":"2020-09-04",
          "original_language":"en",
          "original_title":"The Owners",
          "genre_ids":[
             27,
             53
          ],
          "backdrop_path":"/xUUtcxWC6H48UCrpRwwSPQz69XC.jpg",
          "adult":false,
          "overview":"A group of friends think they found the perfect easy score - an empty house with a safe full of cash. But when the elderly couple that lives there comes home early, the tables are suddenly turned. As a deadly game of cat and mouse ensues, the would-be thieves must fight to save themselves from a nightmare they could never have imagined.",
          "poster_path":"/gzFatNrw0lhKD5NxaU6zC7S2KjP.jpg",
          "popularity":58.052,
          "media_type":"movie"
       },
       {
          "id":299534,
          "video":false,
          "vote_count":14929,
          "vote_average":8.3,
          "title":"Avengers: Endgame",
          "release_date":"2019-04-24",
          "original_language":"en",
          "original_title":"Avengers: Endgame",
          "genre_ids":[
             28,
             12,
             878
          ],
          "backdrop_path":"/orjiB3oUIsyz60hoEqkiGpy5CeO.jpg",
          "adult":false,
          "overview":"After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
          "poster_path":"/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
          "popularity":176.439,
          "media_type":"movie"
       },
       {
          "id":614696,
          "video":false,
          "vote_count":189,
          "vote_average":7.9,
          "title":"#Alive",
          "release_date":"2020-06-24",
          "original_language":"ko",
          "original_title":"#살아있다",
          "genre_ids":[
             28,
             27,
             53
          ],
          "backdrop_path":"/pFsVnpABinjTdtdjp6kpK1tAtoo.jpg",
          "adult":false,
          "overview":"As a grisly virus rampages a city, a lone man stays locked inside his apartment, digitally cut off from seeking help and desperate to find a way out.",
          "poster_path":"/zqf711LsnQ5CcW3rISFw2t7OYzb.jpg",
          "popularity":341.363,
          "media_type":"movie"
       },
       {
          "id":438396,
          "video":false,
          "vote_count":111,
          "vote_average":6.2,
          "title":"Unknown Origins",
          "release_date":"2020-08-28",
          "original_language":"es",
          "original_title":"Orígenes secretos",
          "genre_ids":[
             18,
             53
          ],
          "backdrop_path":"/qGZe9qTuydxyJYQ60XDtEckzLR8.jpg",
          "adult":false,
          "overview":"In Madrid, Spain, a mysterious serial killer ruthlessly murders his victims by recreating the first appearance of several comic book superheroes. Cosme, a veteran police inspector who is about to retire, works on the case along with the tormented inspector David Valentín and his own son Jorge Elías, a nerdy young man who owns a comic book store.",
          "poster_path":"/sMO1v5TUf8GOJHbJieDXsgWT2Ud.jpg",
          "popularity":1577.352,
          "media_type":"movie"
       }
    ]

 }

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('app')
);