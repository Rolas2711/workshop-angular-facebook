import { Component, OnInit } from '@angular/core';
import FixturePosts from '../../../../fixtures/posts.fixtures.json'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  fakePosts= FixturePosts;
  constructor() { }

  ngOnInit(): void {
  }

}
