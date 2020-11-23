exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('trees').del()
    .then(function () {
      // Inserts seed entries
      return knex('trees').insert([
        {
          id: 1,
          name: 'Rautini/Chatham Island Christmas tree',
          description: 'Rautini, sometimes referred to as the Chatham Island Christmas tree, is a large tree daisy that grows up to 8 m tall. Its leaves grows up to 12 cm long and are clad in downy hairs, giving the whole plant a silvery hue. The brilliant yellow flowers can be seen in summer, while seeds mature in autumn',
          image:'https://www.nzpcn.org.nz/site/assets/files/0/22/739/pse_627261636879676c6f747469732d68756e7469692d6c6765.240x240-u1i1s1q90f1.jpg'
        },
        {
          id: 2,
          name: 'Lancewood/horoeka',
          description:'Lancewood, or horoeka, is a unique, small tree with lance-like foliage that changes dramatically as the tree matures. In fact, young trees are so different from adults that early botanists believed they were different species. Juveniles have a very straight and thin trunk without branches and a cluster of long, narrow, deflexed leaves at the top. Adult leaves are less than half the length of the juvenile’s leaves and twice the width, and they form a rounded crown at the top of the tree.',
          image:'https://sandrasgardenblog.files.wordpress.com/2019/02/lancewood-copy.jpg',
      
        },
      
        {
          id: 3,
          name: 'Kauri', 
          description: 'Kauri are among the worlds mightiest trees, growing to over 50 m tall, with trunk girths up to 16 m, and living for over 2,000 years.',
          image: 'https://www.learnz.org.nz/sites/learnz.org.nz/files/agathis-australis-12.jpg',
      
        },
        {
          id: 4,
          name: 'Kowhai',
          description: 'They are best known for their brilliant yellow flowers that appear in profusion in Spring and stand out among the forest greenery. We love to have kōwhai in our gardens. Kōwhai imagery is popular in art works and has been used on postage stamps and coins. ',
          image: 'https://www.odt.co.nz/sites/default/files/styles/odt_story_slideshow/public/slideshow/node-311905/2016/04/the_south_island_kowhai_is_just_one_of_eight_varie_53e2fb595f.JPG?itok=aGfSY6td'
      
        },
        {
          id: 5,
          name: 'Rata',
          description: 'Rātā trees, along with the pōhutukawa, are one of the best known native trees in New Zealand. Native birds benefit from rātā, but as possum numbers increase the threat to native birds and to rātā has also grown.',
          image: 'https://www.nzpcn.org.nz/site/assets/files/0/03/931/metrosideros-umb-small.460x0-u0i1s1q90f1.jpg',
      
        },
        {
          id: 6,
          name: 'Rimu',
          description: 'Dacrydium cupressinum; with common names of rimu, red pine, huarangi, puaka or Southern conifer, and belonging to the Podocarpaceae family. Rimu is a very tall canopy tree that is found in forests throughout the North Island and the coastal areas of the South Island, predominately the north, east and south areas. Rimu is a well known timber tree as well as being used in Rongoa, Maori medicine.',
          image: 'https://www.rocktheboat.co.nz/library/activities/rimu_leaves.jpg',
      
        }
      ])
    })
}
