const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const blacklistTokenModel = require('../models/blacklistToken.model');
const jwt = require('jsonwebtoken');
const captainModel = require('../models/caption.model');

module.exports.authUser = async (req,res,next) =>{
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({message:"Unathorized"});
    }
    const isBlacklisted = await blacklistTokenModel.findOne({ token: token });

    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);
        req.user = user;
        return next();
    } catch (error) {
        return res.status(401).json({message:"Unathorized"}); 
    }
}

module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];


    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const isBlacklisted = await blacklistTokenModel.findOne({ token: token });



    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id)
        req.captain = captain;

        return next()
    } catch (err) {
        console.log(err);

        res.status(401).json({ message: 'Unauthorized' });
    }
}