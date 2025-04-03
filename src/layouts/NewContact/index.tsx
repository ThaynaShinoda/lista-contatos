import { CirclesFour, Envelope, Phone, UserCircle } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addContact, Contact, removeContact } from "../../redux/slices/contactSlice";
import { ContactFormContainer, ContainerButtons, Form, RemoveButton, SaveButton } from "./style";

export function NewContact({ id, fullName, phonenumber, email, category }: Contact) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Criando estado local para armazenar os valores editados
  const [editedContact, setEditedContact] = useState({
    fullName,
    phonenumber,
    email,
    category,
  });

  // Atualiza o estado local sempre que as props mudam (quando o usuário seleciona outro contato)
  useEffect(() => {
    setEditedContact({
      fullName,
      phonenumber,
      email,
      category,
    });
  }, [id, fullName, phonenumber, email, category]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setEditedContact({
      ...editedContact,
      [e.target.name]: e.target.value,
    });
  };

  const formatPhoneNumber = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3") 
      .replace(/^(\d{2})(\d{4})(\d{4})$/, "($1) $2-$3"); 
  };
  
  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedContact({
      ...editedContact,
      phonenumber: formatPhoneNumber(e.target.value),
    });
  };
  
  return(
    <ContactFormContainer>
      <h1>New contact</h1>
      <Form onSubmit={(e) => {
        e.preventDefault(); 
        dispatch(addContact({ id, ...editedContact }));
        navigate("/");
      }}>
        <label htmlFor="name"><UserCircle /> Full name</label>
        <input type="text" id="name" name="fullName" value={editedContact.fullName} onChange={handleChange} required/>

        <label htmlFor="mobile"><Phone /> Mobile</label>
        <input type="tel" id="mobile" name="phonenumber" value={editedContact.phonenumber} onChange={handleChange} onBlur={handleBlur} required pattern="^\(\d{2}\) \d{4,5}-\d{4}$"/>

        <label htmlFor="email"><Envelope /> E-mail</label>
        <input type="text" id="email" name="email" value={editedContact.email} onChange={handleChange} />

        <label htmlFor="category"><CirclesFour /> Category</label>
        <select id="category" name="category" value={editedContact.category} onChange={handleChange}>
          <option value="Normal">Normal</option>
          <option value="Favorites">Favorites</option>
          <option value="Work">Work</option>
        </select>

        <ContainerButtons>
          <SaveButton type="submit">
            Save
          </SaveButton>
          <RemoveButton type="button" onClick={() => {
            dispatch(removeContact(id));
            navigate("/");
          }}>Cancel</RemoveButton>
        </ContainerButtons>
      </Form>
    </ContactFormContainer>
  )
}