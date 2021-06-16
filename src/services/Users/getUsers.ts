import api from "../api";
import User from "../../models/User";

export default function getUsers(): any {
  api.get<User[]>("/users").then((response) => {
    return response.data;
  });
}
