import { useContext } from "react"
import { AuthContext } from "../Components/AuthProvider/AuthProvider"

const useAuth =()=>{
const constext = useContext(AuthContext)
return constext
}

export default useAuth