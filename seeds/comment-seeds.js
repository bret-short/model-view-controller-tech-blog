const { Comment } = require('../models');

const commentData = [{
        comment_text: "Great point, this movie is not very enjoyable.",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "This is definitely my least favorite star wars.",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "I really like becoming evil.",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;