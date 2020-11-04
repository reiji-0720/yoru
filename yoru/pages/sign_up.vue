<template>
  <v-container fluid class="pt-0">
    <v-row class="logo" justify="center">
      <v-col class="pt-0" cols="1"></v-spacer></v-col>
      <v-col class="pt-0" cols="10">
        <v-img src="/YORU.png" max-height="134px" />
      </v-col>
      <v-col class="pt-0" cols="1"></v-spacer></v-col>
    </v-row>
    <v-row justify="center">
      <h2>Create new account</h2>
    </v-row>
    <v-row class="emailField pt-5" justify="center">
      <v-col cols="2">
        <v-img src="/mail.png"/>
      </v-col>
      <v-col cols="10">
        <v-text-field background-color="#1F2E35" label="Email" placeholder="email" solo flat hide-details></v-text-field>
      </v-col>
    </v-row>
    <v-row class="passwordField" justify="center">
      <v-col class="py-0 my-0" cols="2">
        <v-img src="/password.png"/>
      </v-col>
      <v-col cols="10">
        <v-text-field color="#3DD598" background-color="#1F2E35" label="Password" placeholder="password" :type="show ? 'text' : 'password'" :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" @click:append="show = !show" solo flat hide-details></v-text-field >
      </v-col>
    </v-row>
    <v-row class="confirmPasswordField" justify="center">
      <v-col class="py-0 my-0" cols="2">
        <v-spacer></v-spacer>
      </v-col>
      <v-col class="py-0 my-0" cols="10">
        <v-text-field color="#3DD598" background-color="#1F2E35" label="Password" placeholder="confirm your password" :type="show ? 'text' : 'password'" :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" @click:append="show = !show" solo flat hide-details></v-text-field >
      </v-col>
    </v-row>
    <v-row class="buttons" justify="center">
      <v-col cols="12">
        <v-btn depressed block color="#3DD598" style="text-transform: none; border-radius: 15px" min-height="58px">Create new account →</v-btn>
      </v-col>
    </v-row>
    <v-row justify="center">
      <div>
        <p class="mb-0" style="text-align: center">or</p>
        <p style="text-align: center"><font color="#96A7AF">if you already have an account</font></p>
      </div>
    </v-row>
    <v-row class="buttons" justify="center">
      <v-col cols="12">
        <v-btn depressed block color="#286053" style="text-transform: none; border-radius: 15px" min-height="58px"><font color="#3DD598">Sign in →</font></v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      password: 'Password',
    }
  },
}
</script>