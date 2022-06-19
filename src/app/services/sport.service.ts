import { Injectable } from '@angular/core';
import  sports  from  '../../assets/json/sports.json';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class SportService {
  items:any
  sports2!:any
  //prvi nacin
  constructor(private http: HttpClient,public fireservices:AngularFirestore) 
  {

    this.get_allSports().subscribe(data=>{
      this.sports2=data.map(e=>{
        
  return  e.payload.doc.data()
})
})
  }
getSports()
{
  return sports
}
  //treci
  get_allSports()
  {
    return this.fireservices.collection('Sports').snapshotChanges()
  }
  f()
  {


  }
  
}
