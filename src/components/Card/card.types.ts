import {GestureResponderEvent} from 'react-native';

/* eslint-disable prettier/prettier */
export interface ICardProps {
    image:  string,
    mrp: number ,
    name: string ,
    description:string,
    price: number ,
    discount: string,
    buttonPress : (event: GestureResponderEvent) => void
}

export type INavigationProp = {

}
