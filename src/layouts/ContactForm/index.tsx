import { CirclesFour, Envelope, Phone, UserCircle } from "@phosphor-icons/react";
import { useDispatch} from "react-redux";
import { useEffect, useState } from "react";
import { Contact, removeContact, updateContact } from "../../redux/slices/contactSlice";
import { useNavigate } from "react-router-dom";
import { ContactFormContainer, Container, ContainerButtons, DataContact, Form, InfoContact, RemoveButton, SaveButton, UpdateButton } from "./style";

export function ContactForm({ id, fullName, phonenumber, email, category }: Contact) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

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

  return (
    <Container>
      {isEditing ? (
        <ContactFormContainer>
          <h1>Edit contact</h1>
          <Form onSubmit={(e) => {
              e.preventDefault(); 
              dispatch(updateContact({ id, ...editedContact }));
              setIsEditing(false);
            }}
          >
            <label htmlFor="name"><UserCircle /> Full name</label>
            <input type="text" id="name" name="fullName" value={editedContact.fullName} onChange={handleChange} required/>

            <label htmlFor="mobile"><Phone /> Mobile</label>
            <input type="tel" id="mobile" name="phonenumber" value={editedContact.phonenumber} onChange={handleChange} onBlur={handleBlur} required pattern="^\(\d{2}\) \d{4,5}-\d{4}$" />

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
              <RemoveButton onClick={() => {
                dispatch(removeContact(id));
                navigate("/");
              }}>Remove</RemoveButton>
            </ContainerButtons>
          </Form>
        </ContactFormContainer>
      ) : (
        <InfoContact>
          <h1>{fullName}</h1>
          <DataContact>
            <h3><Phone /> Telefone</h3>
            <span>{phonenumber}</span>
            <h3><Envelope /> E-mail</h3>
            <span>{email}</span>
            <h3><CirclesFour /> Categoria</h3>
            <span>{category}</span>
          </DataContact>
          <UpdateButton onClick={() => setIsEditing(true)}>Edit</UpdateButton>
        </InfoContact>
      )}
    </Container>
  );
}
