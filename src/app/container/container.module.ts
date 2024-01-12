import { NgModule } from '@angular/core';
import { ContainerComponent } from './container.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { NotificationModule } from '../notification/notification.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ContainerComponent, MenuComponent, HeaderComponent],
  imports:[NotificationModule,FormsModule],
  exports: [ContainerComponent],
})
export class ContainerModule { }
