import React, { FC, useEffect, useState } from 'react'
import { Card } from '../../atomos/card/card'
import { Search } from '../../molecules/search/search'
import { Gift } from '../../../interfaces/interfaces'
import { UserService } from '../../../services/user.service'
import DeleteIcon from "./assets/delete-icon.svg";
import WarningIcon from "./assets/warning-icon.svg";
import { Title } from '../../atomos/title/title' 
import { Gift } from '../../../services/user.service' 


export interface HomeProps {
    gift: any
    some?: string
}
export const Home: FC<HomeProps> = (props: HomeProps) => {
    const [url, setUrl] = useState<Gift[]>([])

    useEffect(() => {
        UserService.getGift()
          .then((response) => {
            setUrl(response)
          })
          .catch(() => {})
      }, [])
 

      return (
          <>
          <Title principalText='Gift Galery'></Title>
          <Search/>
         <section className='home'>
            <Card
            gift={Gift}
            deleteGift={props.gift.url}
            />
         </section>
         <section className="home__gift-options">
           
                  <img src={DeleteIcon} alt="delete-icon" />
                  <img src={WarningIcon} alt="edit-icon" />
                </section>
          </>
      )
}