<template>
<section>
    <ul>
        <li v-for="user of users" :key="`user-${user}`" @click="removeUser(user)">
            {{ user }}
        </li>
    </ul>
    <div>
        <input type="text" ref="userNameInput">
        <button @click="addUser">Add User</button>
    </div>
</section>
</template>

<script>
export default {
    name: 'UsersList',

    data() {
        return {
            users: [
                'Max',
                'Ben',
                'Lekan',
                'Tayo',
                'Tola'
            ]
        }
    },

    methods: {
        addUser() {
            const newUser = this.$refs.userNameInput.value;
            this.users.unshift(newUser)
        },

        removeUser(user) {
            this.users = this.users.filter(usr => usr !== user)
        }
    }
}
</script>

<style scoped>
    ul {
        list-style: none;
        margin: 1rem 0;
        padding: 0;
    }

    li{
        border: 1px solid #ccc;
        padding: 1rem;
        text-align: center;
    }
</style>