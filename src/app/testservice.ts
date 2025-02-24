import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Calculator {
    add = (a: number, b: number) => a+b;
    substract = (a: number, b: number) => a-b;
    multiply = (a: number, b: number) => a*b;
}