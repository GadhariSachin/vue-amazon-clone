<template>
  <div class="login">
    <router-link to="/">
      <img
        class="login__logo"
        src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        alt="amazon india"
      />
    </router-link>

    <div class="login__container">
      <h1>Login</h1>

      <form>
        <h5>E-mail</h5>
        <input type="text" v-model="email" />

        <h5>Password</h5>
        <input type="text" v-model="password" />

        <button type="submit" class="login__signinButton" @click="signIn">
          Sign In
        </button>
      </form>

      <p>
        By continuing, you agree to Amazon Clone's Conditions of Use and Privacy
        Notice.
      </p>

      <div class="a-divider a-divider-break">
        <h5>New to Amazon?</h5>
      </div>

      <button class="login__registerButton" @click="gotoRegistration">
        Create your Amazon account
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    gotoRegistration() {
      return true;
    },
    signIn() {
      return true;
    },
  },
};
</script>

<style scoped>
.login {
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}

.login__logo {
  margin-top: 20px;
  margin-bottom: 20px;
  object-fit: contain;
  width: 100px;
  margin-left: auto;
  margin-right: auto;
}

.login__container {
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 300px;
  border-radius: 5px;
  border: 1px solid lightgray;
  padding: 20px;
}

.login__container > h1 {
  font-weight: 500;
  margin-bottom: 20px;
}

.login__container > form > h5 {
  margin-bottom: 5px;
}

.login__container > form > input {
  height: 30px;
  margin-bottom: 10px;
  background-color: white;
  width: 98%;
  border-radius: 3px;
  border-color: grey;
  border-style: outset;
}

.login__container > p {
  font-size: 12px;
  margin-top: 15px;
}

.login__signinButton {
  background: #f0c14b;
  border: 1px solid;
  border-radius: 3px;
  border-color: #a88734 #9c7e31 #846a29;
  width: 100%;
  height: 30px;
  margin-top: 10px;
}

.login__registerButton {
  border: 1px solid;
  border-color: darkgray;
  width: 100%;
  height: 30px;
  border-radius: 3px;
  margin-top: 10px;
}

.a-divider.a-divider-break {
  text-align: center;
  position: relative;
  top: 2px;
  padding-top: 1px;
  margin-bottom: 14px;
  line-height: 0;
  margin-top: 24px;
}

.a-divider.a-divider-break h5 {
  line-height: 1;
  font-size: 12px;
  color: #767676;
  font-weight: 400;
  z-index: 2;
  position: relative;
  display: inline-block;
  background-color: #fff;
  padding: 0 10px 0 10px;
}

.a-divider.a-divider-break:after {
  content: "";
  width: 100%;
  background-color: transparent;
  display: block;
  height: 1px;
  border-top: 1px solid #e7e7e7;
  position: absolute;
  top: 50%;
  margin-top: 1px;
  z-index: 1;
}
</style>