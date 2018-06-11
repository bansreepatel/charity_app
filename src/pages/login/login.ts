import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import { DonationsPage } from '../donations/donations';
import { Http } from '@angular/http';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public username: string;
  public password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) { 
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  navigateToHome() {
    this.navCtrl.push(HomePage);
  }

  navigateToProfile() {
    this.navCtrl.push(ProfilePage)
  }

  navigateToTabs() {
    this.navCtrl.push(TabsPage)
  }

  navigateToRegister(){
    this.navCtrl.push(RegisterPage)
  }

  navigateToDonations(){
    this.navCtrl.push(DonationsPage)
  }
  
  login() {
    this.http
      .post("http://localhost:3000/login", {
        username: this.username,
        password: this.password
    })
    .subscribe(
      result => 
        {console.log(result);
      
        this.navCtrl.push(TabsPage, {
          username: this.username,
          password: this.password
        });
      },
      error => {
        console.log(error);
      }
    );
  }
}