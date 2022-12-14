import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FilesPage } from "../../components/FilesPage";
import { Header } from "../../components/Header";
import { useDisk } from "../../hooks/useDisk";

export function Contigua() {
    const hookDisks = useDisk()

    return (
        <>
        <Header information="As unidades de memória em verde estão alocados"/>
        <button><Link to={'/'}>AAAA</Link></button>

        <FilesPage name={hookDisks.contigua.name} />
        
        </>        
    )
}