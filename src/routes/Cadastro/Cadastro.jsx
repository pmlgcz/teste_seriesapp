import fetch from '../../axios/config'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Cadastro.module.css'

export default function Cadastro() {

    const navigate = useNavigate()

    const [nome, setNome] = useState()
    const [email, setEmail] = useState()
    const [telefone, setTelefone] = useState()
    const [nascimento, setNascimento] = useState()

    
    const createPost = async(e) => {
        e.preventDefault();
        await fetch.post("/cadastro",{
            nome: nome,
            email: email,
            telefone: telefone,
            nascimento: nascimento,
        })
        alert(`Cadastro "${cadastro}" cadastrado com sucesso!`)
    }

    return(
        <div className={styles.newPost}>
            <h2>Cadastrar</h2>
            <form onSubmit={(e)=>createPost(e)}>
                <div className={styles.formControl}>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" name="nome" required placeholder="Digite o nome" className={styles.nomeInput} id="nome" onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className={styles.formControl}>
                    <label htmlFor="ano">Data de nascimento:</label>
                    <input type="number" required min={1900} max={2022} maxLength={4} minLength={4} name="ano" placeholder="Ex.: 1980" className={styles.anoInput} id="ano" onChange={(e) => setAno(e.target.value)}/>
                </div>
                <div className={styles.formControl}>
                    <label htmlFor="email">Email</label>
                    <input type="text" required name="email" placeholder="Digite email" className={styles.emailInput} id="email" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className={styles.formControl}>
                    <label htmlFor="telefone">Telefone</label>
                    <input type="text" required name="telefone" placeholder="Insira o numero de telefone" id="telefone" className={styles.telefoneInput} onChange={(e) => setTelefone(e.target.value)}/>
                </div>
                <input type="submit" className={styles.btn} value="Cadastrar" />
            </form>
        </div>
    )
}
