const Like = require('../Models/Like');

const getUserLikes = (req, res) => {
  const userId = req.params.userId;


  Like.findAll({where: {userId}})
      .then(likes => {
        res.json({response: likes})
      })

}

const setUserLike = (req, res) => {
  const {url, urlFull, userId} = req.body

  const likeIsUnique = () => {
    return Like.count({where: {url, urlFull, userId}})
              .then(count => {
                if(count != 0){
                  return false
                }
                return true
              })
  }

  likeIsUnique().then(likeUnique => {
    if (likeUnique === true) {
      Like.create({url, urlFull, userId})
          .then(like => {
            res.json({response: like})
          });
    } else {
      res.send(false)
    }
  })


}


const unsetUserLike = (req, res) => {
  const {url, urlFull, userId} = req.body

  Like.destroy({ where: {url, urlFull, userId}})
      .then(like => {
          res.json(`unsetlike`);
        });
}

// Preguntar lo de tipos de datos integer y string

module.exports = {
  getUserLikes,
  setUserLike,
  unsetUserLike
};
