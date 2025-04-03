import { RouterProvider } from "react-router-dom"
import { Provider } from "react-redux"
import { routes } from "./routes"
import store from "./redux/store"
import { GlobalStyles, Wrapper } from "./styles"

function App() {

  return (
    <Provider store = {store}>
      <Wrapper>
        <GlobalStyles />
        <RouterProvider router={routes} />
      </Wrapper>
    </Provider>
  )
}

export default App
