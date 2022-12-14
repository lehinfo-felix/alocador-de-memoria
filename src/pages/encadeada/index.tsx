import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FilesPage } from "../../components/FilesPage";
import { Header } from "../../components/Header";
import { useDisk } from "../../hooks/useDisk";

export function Encadeada() {
    const hookDisks = useDisk()

    return (
        <>
        <Header information="As unidades de memória em verde estão alocados. Clique"/>
        <button><Link to={'/'}>Voltar</Link></button>

        <FilesPage name={hookDisks.encadeada.name} />
        
        </>        
    )
}