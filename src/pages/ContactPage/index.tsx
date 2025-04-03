import { useParams } from "react-router-dom";
import { Aside } from "../../layouts/Aside";
import { ContactForm } from "../../layouts/ContactForm";
import { useSelector } from "react-redux";
import { RootReducer } from "../../redux/store";


export function ContactPage() {

  const { id } = useParams<{ id: string }>();
  const contact = useSelector((state: RootReducer) =>
    state.contact.contacts.find((contact) => contact.id === Number(id))
  );

  if (!contact) {
    return <h1>Contato não encontrado</h1>;
  }

  return (
    <>
      <Aside />
      <ContactForm {...contact} />
    </>
  );
}