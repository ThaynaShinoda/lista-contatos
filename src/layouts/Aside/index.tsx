import { MagnifyingGlass } from "@phosphor-icons/react";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/store";
import { modifyCategory, newSearch } from "../../redux/slices/filterSlice";
import { ContactList } from "../ContactList";
import { AddButton } from "../../components/AddButton";
import { AsideContainer, OptionsArea, Search, Select } from "./style";

export function Aside() {
  const { search , category } = useSelector((state: RootReducer) => state.filter)
  
  const dispatch = useDispatch()

  return(
    <AsideContainer>
      <OptionsArea>
        <Search>
          <MagnifyingGlass />
          <input 
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => dispatch(newSearch(e.target.value))} />
        </Search>
        <Select value={category}
        onChange={(e) => dispatch(modifyCategory(e.target.value as "All" | "Normal" | "Favorites" | "Work"))}>
          <option value="All" >All</option>
          <option value="Normal">Normal</option>
          <option value="Favorites">Favorites</option>
          <option value="Work">Work</option>
        </Select>
        <AddButton/>
      </OptionsArea>
      <ContactList />
    </AsideContainer>
  )
}