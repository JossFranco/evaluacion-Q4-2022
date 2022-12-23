import axios, { AxiosResponse } from "axios"
import { Gift } from "../services/user.service"
import { colectionGift } from '../services/gift.json'
const API_URL = process.env.REACT_APP_API_URL as string;
export interface FirebaseWrapper<T> {
  data: T;
}
export class UserService {
  static async getGift() {
    const get: colectionGift[] =  [
      {
        id: 1,
        url: ' https://media.tenor.com/VzvFB3Apq-8AAAAM/captain-america-avengers.gif',
        author_id: 19
      },
      {
        id: 2,
        url: 'https://media.tenor.com/aQ7JU8GcbJoAAAAM/the-avengers-marvel.gif',
        author_id: 19
      },
      ]
      return get
    /*
    const response: AxiosResponse<Gift[]> = await axios.get(
      "https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws/?author_id=19",
      {
        headers: {
          author_id: "19",
        },
      }
    );
    return response.data;*/
  }
static async creationGift () {
const response = await axios.post('https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws/',
  {
    headers: {
      url: Gift.url,
      author_id: Gift.author_id,
    }
  })
console.log(response.data)
return response.data;
}

  static async deleteGift() {
    const response: AxiosResponse<Gift[]> = await axios.delete(
      "https://iyelrnlkoq7ra5mnxg5cobbkta0uubul.lambda-url.us-east-1.on.aws/",
      {
        headers: {
          id: Gift.id,
          url: Gift.url,
          author_id: 19,
        },
      }
    );
    return response.data;
  }

}


export { Gift };

