<template>
  <div>
    <h1>Users</h1>
    <v-simple-table dark>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Nazwa</th>
            <th class="text-left">ID</th>
            <th class="text-left">Data dołączenia</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>
              <router-link class="text--default" :to="`/user/${user.id}`">{{ user.username }}</router-link>
            </td>
            <td>{{ user.id }}</td>
            <td>{{ user.createdAt }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
  import axiosApi from '../../axios-api'
  export default {
    data() {
      return {
        users: []
      }
    },
    methods: {

    },
    mounted() {
      const url = 'user'
      axiosApi.get(url).then((response) => {
        const userData = response.data
        userData.forEach((user) => {
          this.users.push(user)
        })
      })
    }
  }
</script>