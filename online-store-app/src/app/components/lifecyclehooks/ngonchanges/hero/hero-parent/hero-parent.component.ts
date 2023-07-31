import { Component, ViewChild } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { HeroChildComponent } from '../hero-child/hero-child.component';

@Component({
  selector: 'app-hero-parent',
  templateUrl: './hero-parent.component.html',
  styleUrls: ['./hero-parent.component.css']
})
export class HeroParentComponent {
  hero!: Hero;
  power = '';
  title = 'OnChanges';
  @ViewChild(HeroChildComponent) childView!: HeroChildComponent;

  constructor() {
    this.reset();
  }

  reset() {
    // new Hero object every time; triggers onChanges
    this.hero = new Hero('Windstorm');
    // setting power only triggers onChanges if this value is different
    this.power = 'sing';
    if (this.childView) {
      this.childView.reset();
    }
  }
}
