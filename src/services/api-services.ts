import axios, {AxiosResponse} from 'axios'
import { Article } from '../redux/article/article.type'

const base_url = 'https://5f55a98f39221c00167fb11a.mockapi.io'

export const getListArticles = (requestParams:{[key:string]:any}):Promise<AxiosResponse<Article[]>> => axios.get(base_url+'/blogs', {
    params: requestParams
})

export const getActicleDetail = (id:string):Promise<AxiosResponse<Article>> => axios.get(base_url+'/blogs/'+id)