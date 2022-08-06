import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { MyUpperPipe } from '../pipes/myupper.pipe';


@NgModule({
    declarations: [
        MyUpperPipe,
    ],

    imports: [
        CommonModule,
        AppRoutingModule,
        FormsModule
    ],

    exports: [
        CommonModule,
        AppRoutingModule,
        FormsModule,
        MyUpperPipe
    ],
    
})


export class SharedModule{}