import  FC from 'react'
import { Button } from "../button/button"
import DeleteIcon from '../../../assets/delete-icon.svg'
import './card.scss'
import { Gift } from "../../../interface/interface"
import { UserService } from "../../../services/user.service"


interface CardProps {
  gift: Gift
  isDeleted?: (arg:boolean)=> void
  deleteGift:() => void
}
export const Card: FC<CardProps> = ({ gift, isDeleted, setIsDelete, deleteGift}) => {
 
  const deleteCard = async () => {
    await UserService.deleteGift(gift).then ((response) => console.log('Gift eliminado'))
    setIsDelete(false)
  }
  const openModal = () => {
    setIsDelete(true)
  }
  const closeModal = () => {
    setIsDelete(false) 
  }
  return(
    <div className="card">
      <section className="card__container">
{ isDeleted && (
    <section className="card__modal">
<p>¿Desea eliminar este GIFT?</p>
<div className="card__button-container">
<Button onClick={deleteCard} >Eliminar</Button>
<Button onClick={closeModal}>Cancelar</Button>
</div>
    </section>
  )}
        <img className=' isDeleted' src={gift.url} alt="Close} />
        <img
              src={DeleteIcon}
              alt="close-icon"
              className="image__closeIcon"
              onClick={openModal}
            />
      </section>
    </div>
  )
}

  