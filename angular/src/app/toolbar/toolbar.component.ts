import { Component, Input } from '@angular/core';
import { ToolbarData } from '../model/toolbar-data/toolbar-data.model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent
{
  @Input()
  Data : ToolbarData[] | undefined;

  @Input()
  backColor : string = "black";
}
