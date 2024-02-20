<script>
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'

const CHARACTERS_QUERY = gql`
  query Characters {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`

export default {
  name: 'App',
  setup () {
    const { result, loading, error } = useQuery(CHARACTERS_QUERY);
    return {
      result,
      loading, 
      error
    }
  }
}

</script>

<style>

</style>

<template>
  <p v-if="error">Something went wrong...</p>
  <p v-if="loading">Loading...</p>
  <!-- <p v-else v-for="character in result.characters.results" :key="character.id">
    {{ character.name }}
    image: <img :src="character.image" alt="character.name">
  </p> -->
  <div v-else v-for="character in result.characters.results" :key="character.id" style="border: 0.5px solid black; margin:10px">
    <span>Name : {{ character.name }}</span>
    <br/>
    <span>image:</span> 
    <img :src="character.image" alt="character.name">
    </div>
 
  <div></div>
</template>