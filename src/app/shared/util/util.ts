import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class Utility {

    constructor(){}

    /**
     * ArrayOrderByDate(arr, dateProp)
     * @param arr 
     * @param dateProp 
     */
    
    ArrayOrderByDate(arr, dateProp): Array<any>  {
        return arr.slice().sort(function (a, b) {
            return a[dateProp] < b[dateProp] ? -1 : 1;
        });
    }

}
