import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  category  from  '../../assets/json/categoryOfSport.json';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class SportCategoryService {
  items:any
  constructor(private http: HttpClient,public fireservices:AngularFirestore) 
  {

  }

  get_allCategory()
  {
    return this.fireservices.collection('categoryOfSport').snapshotChanges()
  }
  getSportsCategory()
  {
    return category
  }
}
