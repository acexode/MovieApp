import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './services/firebase.service';
import { Category } from './services/category';
import { Business } from './services/business';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseService]
})

export class AppComponent implements OnInit {
  title = 'app works!';
  businesses: Business[];
  categories: Category[];
  appState: String;
  activeKey: String;

    Ecompany: string;
    Ecategory: string;
    EstreetAddress: string;
    Ecity: string;
    Edescription: string;
    Estate: string;
    EzipCode: string;
    Eemail: string;
    Ephone: string;
    Eyears_in_business: number
  constructor(private fbService: FirebaseService) {

  }
  ngOnInit() {
    this.fbService.getBusinesses().subscribe((business) => {
      this.businesses = business;
    });

    this.fbService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });

  }
  changeState(state, key) {
    console.log('changing state to ' + state);
    // tslint:disable-next-line:curly
    if (key) this.activeKey = key;
    this.appState = state;
  }
  filterCategory(category) {
    this.fbService.getBusinesses(category).subscribe((business) => {
      this.businesses = business;
    })
  }

  // deleting contact
  delete(id) {
    this.fbService.deleteOne(id)
  }
  // a-dd contact
  addBusiness(
    company: string,
    category: string,
    streetAddress: string,
    city: string,
    description: string,
    state: string,
    zipCode: string,
    email: string,
    phone: string,
    years_in_business: number
  ) {
    const details = {
      company: company,
      category: category,
      streetAddress: streetAddress,
      city: city,
      description: description,
      state: state,
      zipCode: zipCode,
      email: email,
      phone: phone,
      years_in_business: years_in_business
    };
    console.log(details)
    this.fbService.insert(details);
   this.appState = 'default';
  }
// edit and update
  edit(business) {
    this.changeState('edit', business.$key);
    this.Ecompany = business.company;
    this.Ecategory = business.category;
    this.EstreetAddress = business.streetAddress;
    this.Ecity = business.city;
    this.Edescription = business.description;
    this.Estate = business.state;
    this.EzipCode = business.zipCode;
    this.Eemail = business.email;
    this.Ephone = business.phone;
    this.Eyears_in_business = business.years_in_business;
  }
  updateBusiness() {
    const upd = {
      company: this.Ecompany,
      category: this.Ecategory,
      streetAddress: this.EstreetAddress,
      city: this.Ecity,
      description: this.Edescription,
      state: this.Estate,
      zipCode: this.EzipCode,
      email: this.Eemail,
      phone: this.Ephone,
      years_in_business: this.Eyears_in_business
    };
    this.fbService.updateOne(this.activeKey, upd);
    this.appState = 'default';
  }
  
}
