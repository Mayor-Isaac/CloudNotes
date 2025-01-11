import {useNavigate} from "react-router-dom"
 function useMoveback(){
    const navigate = useNavigate()
    return ()=> navigate(-1)
}

export default useMoveback