<template>
    <div class="login-wrapper">
        <div class="login-row">
            <v-app id="inspire">
            <form>
                <v-text-field v-model="name" :error-messages="nameErrors" :counter="10" label="Name" required @input="$v.name.$touch()" @blur="$v.name.$touch()"></v-text-field>
                <v-text-field v-model="email" :error-messages="emailErrors" label="E-mail" required @input="$v.email.$touch()" @blur="$v.email.$touch()"></v-text-field>
                <v-btn @click="submit">submit</v-btn>
            </form>
            </v-app>
        </div>
    </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import  { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
    validations: {
        name: { required, maxLength: maxLength(10) },
        email: { required, email }
    },

    mixins: [validationMixin],

    data: () => ({
        name: '',
        email: '',
    }),

    computed: {
        nameErrors () {
            const errors = []
            if (!this.$v.name.$dirty) return errors
            !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
            !this.$v.name.required && errors.push('Name is required.')
            return errors
        },
        emailErrors () {
            const errors = []
            if (!this.$v.email.$dirty) return errors
            !this.$v.email.email && errors.push('Must be valid e-mail')
            !this.$v.email.required && errors.push('E-mail is required')
            return errors
        }
    },

    methods: {
        submit () {
            this.$v.$touch()
        }
    }
};
</script>

<style scoped>
.login-wrapper{
    width: 300px;
    height: 200px;
    margin: 0 auto;
}
.login-row{
    display: flex;
    align-items: center;
    justify-content: center
}
</style>
