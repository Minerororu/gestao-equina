import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListComponent } from './list/list.component';
import { SelectComponent } from './select/select.component';
import { TextInputComponent } from './text-input/text-input.component';
import { TextInputAutocompleteComponent } from './text-input-autocomplete/text-input-autocomplete.component';
import { ImportModule } from '../import.module';
import { DateInputComponent } from './date-input/date-input.component';
import { NumberInputComponent } from './number-input/number-input.component';
import { CadastroAnimalComponent } from './cadastro-animal/cadastro-animal.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SelectFilterComponent } from './select-filter/select-filter.component';

@NgModule({
  declarations: [
    NavBarComponent,
    ListComponent,
    TextInputComponent,
    SelectComponent,
    TextInputAutocompleteComponent,
    NumberInputComponent,
    DateInputComponent,
    CadastroAnimalComponent,
    SearchBarComponent,
    SelectFilterComponent,
  ],
  imports: [CommonModule, ImportModule],
  exports: [
    NavBarComponent,
    ListComponent,
    TextInputComponent,
    SelectComponent,
    TextInputAutocompleteComponent,
    NumberInputComponent,
    CadastroAnimalComponent,
    SearchBarComponent,
    SelectFilterComponent,
    DateInputComponent,
  ],
})
export class ComponentModule {}
