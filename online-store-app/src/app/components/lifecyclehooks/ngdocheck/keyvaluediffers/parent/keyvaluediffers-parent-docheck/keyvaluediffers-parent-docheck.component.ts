import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-keyvaluediffers-parent-docheck',
  templateUrl: './keyvaluediffers-parent-docheck.component.html',
  styleUrls: ['./keyvaluediffers-parent-docheck.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KeyvaluediffersParentDocheckComponent {
  data = { name: "" };

  changeData(value: string) {
    this.data.name = value;
  }
}
