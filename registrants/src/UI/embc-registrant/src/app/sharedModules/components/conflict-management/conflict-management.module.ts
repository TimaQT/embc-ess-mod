import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConflictManagementRoutingModule } from './conflict-management-routing.module';
import { ConflictManagementComponent } from './conflict-management.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { CoreModule } from '../../../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    ConflictManagementRoutingModule,
    MatStepperModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatAutocompleteModule,
    CoreModule,
    ConflictManagementComponent
  ]
})
export class ConflictManagementModule {}
