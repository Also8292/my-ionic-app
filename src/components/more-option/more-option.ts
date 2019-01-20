import { SettingPage } from './../../pages/setting/setting';
import { Component, Input } from '@angular/core';
import { PopoverController } from 'ionic-angular';

@Component({
  selector: 'more-option',
  templateUrl: 'more-option.html'
})
export class MoreOptionComponent {

  @Input() title: string;
  constructor(public popoverCtrl: PopoverController) {}

  settingPopover(even) {
    let popover = this.popoverCtrl.create(SettingPage);
    popover.present({
      ev: even
    });
  }
}
