import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Category } from './category';
import { Business } from './business';
import 'rxjs/add/operator/map';

@Injectable()
export class FirebaseService {
  businesses: FirebaseListObservable<Business[]>;
  categories: FirebaseListObservable<Category[]>;
  constructor(private af: AngularFire) { }

  getBusinesses(category: String = null) {
    if (category != null) {
      this.businesses = this.af.database.list('/business',
      {
        query: {
          orderByChild: 'category',
          equalTo: category
        }
      }) as
    FirebaseListObservable<Business[]>;
  }
  else{
     this.businesses = this.af.database.list('/business') as
     FirebaseListObservable<Business[]>;
  }
     return this.businesses;
  }
  getCategories() {
    this.categories = this.af.database.list('/categories') as
    FirebaseListObservable<Category[]>;
    return this.categories;
  }
  deleteOne(id){
    this.businesses.remove(id)
  }

  insert(item) {
    this.businesses.push(item);
  }
  updateOne(key, item){
    this.businesses.update(key, item);
  }
}
