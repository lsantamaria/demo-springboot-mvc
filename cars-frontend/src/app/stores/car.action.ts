import  {Action } from  '@ngrx/store';

export const CAR_ADD ='CAR_ADD';
export const CARS_ADD ='CARS_ADD';
export const CARS_UPDATE ='CARS_UPDATE';
export const CARS_DELETE ='CARS_DELETE';
export const CARS_EMPTY ='CARS_EMPTY';


export class AddAction implements Action {
  type=CAR_ADD;

  constructor(public payload: any){}
}
export class AddListAction implements Action {
  type=CARS_ADD;
  constructor(public payload: any[]){}
}

export class UpdateAction implements Action {
  type=CARS_UPDATE;
  constructor(public payload:{indexCar:any, car:any} ){}
}

export class DeleteAction implements Action {
  type=CARS_DELETE;
  constructor(public payload:any ){}
}
export class EmptyAction implements Action {
  type=CARS_EMPTY;
  constructor(public payload: any[]){}
}

export  type CarActions =  AddAction | AddListAction  | DeleteAction | UpdateAction | EmptyAction;

