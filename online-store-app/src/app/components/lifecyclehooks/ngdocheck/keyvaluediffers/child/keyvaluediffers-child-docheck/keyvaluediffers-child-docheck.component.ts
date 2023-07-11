import { ChangeDetectorRef, Component, Input, KeyValueDiffers } from '@angular/core';

@Component({
  selector: 'app-keyvaluediffers-child-docheck',
  templateUrl: './keyvaluediffers-child-docheck.component.html',
  styleUrls: ['./keyvaluediffers-child-docheck.component.css']
})
export class KeyvaluediffersChildDocheckComponent {
  @Input() data: { name: string };
  private differ = this.differs.find({}).create();

  constructor(
    private cdr: ChangeDetectorRef,
    private differs: KeyValueDiffers
  ) {}

  ngDoCheck() {
    const changes = this.differ.diff(this.data);
    if (changes) {
      console.log("Object changed");
      changes.forEachChangedItem(item => console.log("Changed", item));
      changes.forEachAddedItem(item => console.log("Added", item));
      changes.forEachRemovedItem(item => console.log("Removed", item));
      this.cdr.markForCheck();
    } else {
      console.log("No changes");
    }
  }
}
