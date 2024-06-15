import {lazy} from 'react';

export function lazyLoad(file){
     return lazy(()=> import(`../components/${file}`))
   
}