import crypto from 'crypto'

// const moment = () => import('moment');
import { formatDistance, fromUnixTime, getUnixTime } from 'date-fns' 

export const md5 = (str) => {
    return crypto.createHash('md5').update(str).digest("hex")
}

export const  cgravatar = (email) => {
    return 'https://www.gravatar.com/avatar/' + md5(email)+ '?d=robohash&r=PG'
}

// DEPRECATED
// export const gethtime = (timestamp) => {
//    return moment.unix(timestamp).fromNow();
// }

export const gethtime = (timestamp) => {
   return formatDistance(fromUnixTime(timestamp), new Date(), { addSuffix: true });
}

export const getutime = (t) => {
    if (typeof t === 'undefined') {
        t = new Date()
    }

    return getUnixTime(t)
}

// DEPRECATED
// export const getrandomtime = () => {
//     var d =  randomDate(new Date(2012, 0, 1), new Date());
//     console.log('d', d)
//     return moment(d).unix();
// }


export const getrandomtime = () => {
    var d =  randomDate(new Date(2012, 0, 1), new Date());    
    return getutime(d);
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