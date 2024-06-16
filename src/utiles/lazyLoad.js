import {lazy} from 'react';

export function lazyLoad(file){
     
     return lazy(()=> import(/* @vite-ignore */`../components/${file}`))
   
}