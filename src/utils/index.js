var crypto = require('crypto');
var moment = require('moment');
export const md5 = str => {
    return crypto.createHash('md5').update(str).digest("hex");
}

export const  cgravatar = (email) => {
    return 'https://www.gravatar.com/avatar/' + md5(email)+ '?d=robohash&r=PG'
}

export const  gethtime = (timestamp) => {
   return moment.unix(timestamp).fromNow();
}

export const getrandomtime = () => {
    var d =  randomDate(new Date(2012, 0, 1), new Date());
    console.log('d', d)
    return moment(d).unix();
}

export const createfeeduser = (user) => {
    return {
        gravatar: cgravatar(user.email),
        ...user
    }
}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}