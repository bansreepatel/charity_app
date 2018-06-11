import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { CharitiesListPage } from '../charities-list/charities-list';
import { ProfilePage } from '../profile/profile';
import { DonationsPage } from '../donations/donations';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  homePage = HomePage;
  profilePage = ProfilePage;
  charitiesListPage = CharitiesListPage;
  donationsPage = DonationsPage;
}
