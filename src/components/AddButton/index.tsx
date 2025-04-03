import { UserCirclePlus } from "@phosphor-icons/react";
import { Button } from "./style";

export function AddButton() {
  return(
    <Button to="/newContact"><UserCirclePlus size={24} /></Button>
  )
}