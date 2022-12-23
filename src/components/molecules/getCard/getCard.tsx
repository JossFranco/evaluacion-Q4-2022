import { FC, useState } from 'react'
import { Card } from '../../atomos/card/card'
import { Gift } from '../../../interface/interface' 
import './getCard'

interface GetCardProps {
    gift: Gift
    deleteGift: () => void
    stateModal: booblean
    setStateModal: (arg:boolean) => void
    
}
export const GetCard: FC<GetCardProps> = ({ gift, deleteGift, stateModal, setStateModal }) => {
    const [isDeleted, setIsDeleted] = useState(false)
    return(
<section className="getCard">
    <section className="getCard__content">
        <Card gift={gift} isDeleted={isDeleted} setIsDeleted={setIsDeleted} deleteGift={deleteGift}></Card>
    </section>
</section>
    )
}