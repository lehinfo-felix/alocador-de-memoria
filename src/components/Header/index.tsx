import { Container } from "./styles";

interface Props {
    information: string
}

export function Header({information}: Props){
    return (
        <Container>
            <div className="box">
                <h1>Gerenciador de Discos</h1>
                <p>{information}</p>
                <hr />
            </div>
        </Container>
    )
}