import { Input } from "../../atomos/input/input"
import { Button } from "../../atomos/button/button"
import { useState, useEffect, FC } from "react"
import { UserService } from "../../../services/user.service"
import { Gift } from "../../../services/user.service"

interface SearchProps {
    setSearch: (value: string) => void
    setEditable: (value: boolean) => void
}
export const Search: FC<SearchProps> = (props: SearchProps) => {
    const [url, setUrl] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [gitf, setGift] = useState<Gift>({
        id:0,
        url: '',
        author_id:19
    })
    useEffect(() => {setUrl('')}
    ,[])
const createGift = async () =>{
    setGift({
        id: Math.floor(Math.random()* (1000 - 1) + 1),
url:url,
author_id:19
    })
    await UserService.creationGift(Gift).then ((response) => console.log('Gift creado'))
    .catch ((error)=> setErrorMessage('URL no válida'))
  }
return(
    <section className="search">
    <div className="search__input">
      <Input
        placeholder="Gift URL"
        name={url}
        onChange={(event: React.FormEvent<HTMLInputElement>) =>
          setUrl(event.currentTarget.value)
        }
        type="text"
        errorMessage={errorMessage}
      ></Input>
    </div>
    <div className="search__button">
      <Button onClick={createGift}>
        Agregar
      </Button>
    </div>
  </section>
)
}
