<template>
    <div class="nf" id="newsfeed">
        <NewsFeedItem v-for="post in posts" :key="post.id">
            <Row>
                <Column class="column__ct_1 avatar">
                    <img :src="post.user.gravatar">
                </Column>
                <Column class="column__ct_10">
                    <span class="username">{{ post.user.username }}</span>
                    <span class="time">{{ post.timestamp }}</span>
                </Column>
            </Row>
            <Row>
                <Column class="column__ct_12">
                    <p>{{post.content}}</p>
                </Column>
            </Row>
        </NewsFeedItem>        
    </div>
</template>
<script>
import NewsFeedItem from '@/components/Social/NewsFeedItem'
import Column from '@/components/Common/Column'
import Row from '@/components/Common/Row'

var crypto = require('crypto');
var moment = require('moment');
var md5 = str => {
    return crypto.createHash('md5').update(str).digest("hex");
}

var gethtime = timestamp => {
   return moment.unix(timestamp).fromNow();
}

export default {
    name: 'NewsFeed',
    components: {
        NewsFeedItem,
        Column,
        Row
    },
    data() {
        return {
            posts: [
                {   
                    id: 1,
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
                    user: {
                        id: 10,
                        username: 'anurupr',
                        email: 'anurupraveendran@gmail.com',
                        gravatar: 'https://www.gravatar.com/avatar/' + md5('anurupraveendran@gmail.com')+ '?d=robohash&r=PG'
                    },
                    timestamp: gethtime(1596993895),
                
                },
                {   
                    id: 2,
                    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
                    user: {
                        id: 11,
                        username: 'swarupr',
                        email: 'swarupraveendran@gmail.com',
                        gravatar: 'https://www.gravatar.com/avatar/' + md5('swarupraveendran@gmail.com') +'?d=robohash&r=PG'

                    },
                    timestamp: gethtime(1596993895)
                },
            
            ]
        }
      }
}
</script>
<style scoped> 
    .nf-item:not(:first-child):not(:last-child) {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }

    .nf-item:first-child {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    .nf-item:last-child {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }

    .nf-item + .nf-item {
        margin-top: 0.25rem;
    }

   .nf-item p {
        font-family: 'Segoe UI Historic', 'Segoe UI', Helvetica, Arial, sans-serif;
        font-size: 1.5rem;
       
        /* this makes sure text is justified with proper spacing */
        text-align: justify;
        text-justify: distribute;
        text-align-last: left;
        
        
    }

    .nf-item img {
        border-radius: 150px;
        border: 1px solid #aaa;
        box-shadow: 0 0px 5px 0 rgba(0, 0, 0, 0.2);
         width: 100%;
    }

    .nf-item .avatar {
        max-width: 80px;
        padding-right: 0;
    }


    .nf-item .column {
        flex-basis: auto;
    }

    
    .nf-item .column > span {
        float: left;
    }

    .nf-item .column > span {
        display: block;
        width: 100%;
    }

    .nf-item .column > span {
        text-align: left;
    }

    

    .nf-item .row {
        display: flex;
    }

    .nf-item .time {
        font-size: 1.2rem;
    }

    .nf-item .username {
        color: steelblue;
    }


</style>