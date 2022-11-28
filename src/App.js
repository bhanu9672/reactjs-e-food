import Layout from "./components/Layout/Layout";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
	return (
		<AuthContextProvider>
			<Layout />
		</AuthContextProvider>
	)
}

export default App;
