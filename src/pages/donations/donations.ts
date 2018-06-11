import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ThankYouPage } from '../thank-you/thank-you';

/**
 * Generated class for the DonationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-donations',
  templateUrl: 'donations.html',
})
export class DonationsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonationsPage');
  }

  navigateToThankYou() {
    this.navCtrl.push(ThankYouPage)
  }
}
