import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ProfilePage } from '../profile/profile';
import { DonationsPage } from '../donations/donations';
import { CharitiesListPage } from '../charities-list/charities-list';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  posts: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.http.get('https://www.reddit.com/r/gifs/new/.json?lmit=10').map(res => res.json()).subscribe(data => {
      this.posts = data.data.children;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');

  }

  navigateToProfile() {
    this.navCtrl.push(ProfilePage)
  }

  navigateToDonations() {
    this.navCtrl.push(DonationsPage)
  }

  navigateToCharitiesList() {
    this.navCtrl.push(CharitiesListPage)
  }

  navigateToLogin() {
    this.navCtrl.setRoot(LoginPage)
  }
}
