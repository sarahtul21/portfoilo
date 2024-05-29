import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    // NameEditorComponent,
    // ProfileEditorComponent,
    // NgIf,
    // ReactiveFormsModule,
    TopBarComponent,
  ],
})
export class AppComponent implements OnInit {
  title = 'web-app';

  ngOnInit(): void {
    initFlowbite();
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/