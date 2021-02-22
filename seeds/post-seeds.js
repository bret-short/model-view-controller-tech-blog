const { Post } = require('../models');

const postData = [{
        title: 'Star Wars Episode I',
        content: 'This is one of the worst Star Wars movies by far. Lots of back story that no one really cared about. But we got Maul which was awesome.',
        user_id: 1

    },
    {
        title: 'Star Wars Episode II',
        content: 'This is also one of the worst Star Wars movie with way too much dialogue for an action/adventure movie. But this did introduce the Clone Wars and subsequent TV show which was the best thing to come out of the whole prequel era.',
        user_id: 2
    },
    {
        title: 'Star Wars Episode III',
        content: 'This is the best the prequels had to offer. Anakin turning to the dark side and becoming Vader after one of the all-time great fight scenes in movie history.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;