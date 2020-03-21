const jwt = require('jsonwebtoken')

const authMiddleWare = async (req, res, next) => {
  try {
    const authorization = await req.header('Authorization')

    if (!authorization) {
      return res.status(401).send({
        message: 'Not authorized to do this action'
      })
    }
    try {
      const decoded = jwt.verify(authorization, 'shhhhh')
      console.dir(decoded)
    } catch (err) {
      // err
      console.error(err)
    }
    // get token and verify token valid or not
    // get user information and add info to req such as token, userid, username, isAdmin?
    return next()
  } catch (error) {
    return res.status(500).json({ message: `${JSON.stringify(error)}` })
  }
}
module.exports = authMiddleWare
