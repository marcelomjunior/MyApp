import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoviesProvider } from '../../providers/movies/movies';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoviesProvider,
  ],
})
export class FeedPage {

  public date = new Date().toLocaleString();
  public informations = {
    name_user: "Marcelo junior",
    description: "Wait a minute. Wait a minute, Doc. Uhhh... Yeah Baby!!!"
  }
  public listMovies = new Array<any>();

  constructor(public navCtrl: NavController, public navParams: NavParams, private moviesProvider: MoviesProvider) {
  }

  ionViewDidLoad() {
    this.moviesProvider.getLatestMovies().subscribe(data => {
      const response = (data as any);
      this.listMovies = response.results;
      console.log(response);
    }, error => {
      console.log(error);
    })
  }

}
