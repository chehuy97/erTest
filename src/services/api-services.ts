import { environmentVariable } from './../config';
import axios, {AxiosResponse} from 'axios'
import { Article } from '../redux/article/article.type'

const base_url = environmentVariable.BASE_URL

export const getListArticles = (requestParams:{[key:string]:any}):Promise<AxiosResponse<Article[]>> => axios.get(base_url+'/blogs', {
    params: requestParams
})

export const getActicleDetail = (id:string):Promise<AxiosResponse<Article>> => axios.get(base_url+'/blogs/'+id)