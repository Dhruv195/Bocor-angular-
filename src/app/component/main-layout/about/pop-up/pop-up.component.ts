import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent {

  @Input() header: string | undefined;
  @Input() description: string | undefined;
  @Output() close = new EventEmitter<void>();

  closePopup() {
    this.close.emit();
  }

}
