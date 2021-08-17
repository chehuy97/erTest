import axios, {AxiosResponse} from 'axios'
import { Article } from '../redux/acticle/article.type'

const base_url = 'https://5f55a98f39221c00167fb11a.mockapi.io'

export const getListArticles = ():Promise<AxiosResponse<Article[]>> => axios.get(base_url+'/blogs')

export const getActicleDetail = (id:number) => axios.get(base_url+'blogs/'+id)