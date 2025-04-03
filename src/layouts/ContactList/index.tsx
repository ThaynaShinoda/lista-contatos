import { useSelector } from "react-redux";
import { RootReducer } from "../../redux/store";
import { ContactListContainer, StyledLink } from "./style";

export function ContactList () {
  const contacts = useSelector((state: RootReducer) => state.contact.contacts)
  const {search, category } = useSelector((state: RootReducer) => state.filter)

  function filteringContacts() {
    let filteredContact = contacts

    if (search !== undefined) {
      filteredContact = filteredContact.filter((contact) => contact.fullName.toLowerCase().search(search.toLocaleLowerCase()) >= 0);
    }

    if(category !== "All") {
      filteredContact = filteredContact.filter((contact) => contact.category === category)
    } 

    // Ordenar os contatos por ordem alfabética (A-Z)
    return filteredContact.sort((a, b) => a.fullName.localeCompare(b.fullName));
  }

  const contactFilter = filteringContacts()
  
  return(
    <ContactListContainer>
        <h3>Contacts</h3>
        {contactFilter.map((contact) => (
        <p key={contact.id}>
          <StyledLink to={`/contact/${contact.id}`}>{contact.fullName}</StyledLink>
        </p>
      ))}
    </ContactListContainer>
  )
}