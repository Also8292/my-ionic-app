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

  settingPopover(myEvent) {
    let popover = this.popoverCtrl.create(SettingPage);
    popover.present({
      ev: myEvent
    });
  }
}



// import { PopoverController } from 'ionic-angular';
// // import { MyPopOverPage } from './my-pop-over';

// export class MoreOptionComponent {

//   constructor(public popoverCtrl: PopoverController) { }

//   presentPopover() {
//     // const popover = this.popoverCtrl.create();
//     // popover.present();
//   }
// }