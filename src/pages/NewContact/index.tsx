import { Aside } from "../../layouts/Aside";
import { NewContact } from "../../layouts/NewContact";

export function NewContactPage() {
  return(
    <>
      <Aside />
      <NewContact id={0} fullName={""} phonenumber={""} email={""} category={""} />
    </>
  )
}