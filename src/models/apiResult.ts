import { Show } from "./show";

export interface ApiResult{
    pages:string;
    page:number;
    total:string;
    tv_shows:Show[];
}