import { NavBar, Hero, ProductViewer} from "./components";



const App = () => {
  return(
    <div className="text-2xl font-bold">
      <NavBar />
      <Hero />
      <ProductViewer/>
    </div>
  )
}

export default App;