import { ElMessage } from "element-plus";
import { computed, ref } from "vue";
export const useUser =() => {
  const loginModel = ref({
    username: "",
    password: "",
  });
  const user = ref();
  const login = () => {
    user.value = { id: 1, username: loginModel.value.username };
    ElMessage.success("Login success");
  };
  const loggedIn = computed(() => user.value?.id);
  const logout =async() => {
    user.value=null;
    ElMessage.success("Register success")
  }
  return {
    loginModel,
    user,
    login,
    loggedIn,
    logout
  }
}