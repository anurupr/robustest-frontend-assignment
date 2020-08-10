/* Home View */
<template>
  <Container>
      <Row>
        <Column class="column__ct_12">
          <Header />
        </Column>
      </Row>
      <Row>
          <!-- Profile -->
          <Column class="column__ct_3">
            <Profile />
          </Column>
          <!-- Post Box + News Feed -->
          <Column class="column__ct_6">
            <PostBox />
            <NewsFeed />
          </Column>
          <!-- Suggestions -->
          <Column class="column__ct_3">
            <Suggestions />
          </Column>
      </Row>
  </Container>
</template>

<script>
import Container from "@/components/Common/Container"
import Row from "@/components/Common/Row"
import Column from "@/components/Common/Column"
import Header from "@/components/Common/Header"
import Profile from "@/components/Account/Profile"
import NewsFeed from "@/components/Social/NewsFeed"
import PostBox from "@/components/Social/PostBox"
import Suggestions from "@/components/Social/Suggestions"

export default {
    name: 'Home',
    components: {
        Container,
        Row,
        Column,
        Header,
        Profile,
        NewsFeed,
        PostBox,
        Suggestions
    }    
}
</script>