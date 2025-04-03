import { Aside } from "../../layouts/Aside";
import { HomeMessage } from "./style";

export function Home() {
  return(
    <>
      <Aside />
      <HomeMessage>Welcome back!</HomeMessage>
    </>
  )
}