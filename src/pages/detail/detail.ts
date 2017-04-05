import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../pages/home/home.ts'
/*
  Generated class for the Detail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {
  public item: any;
  public title: any;
  public intro:any;
  public timeprep:any;
  public timecook:any;
  public yield:any;
  public ingredients: any;
  public directions: any;
  public image: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get('item');
    this.title = this.item.title;
    this.intro = this.item.intro;
    this.timeprep = this.item.timeprep;
    this.timecook = this.item.timecook;
    this.yield = this.item.yield;
    this.ingredients = this.item.ingredients;
    this.directions = this.item.directions;
    this.image = this.item.image;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }
}
