import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-cbutton',
  templateUrl: './cbutton.component.html',
  styleUrls: ['./cbutton.component.scss']
})
export class CbuttonComponent
{
  @ViewChild('MyButton')
  MyButton !: ElementRef;

  @ViewChild('MyMenu')
  MyMenu !: ElementRef;

  @Input()
  label : string = "Button";

  @Input()
  IsSpecial : boolean = false;

  @Input()
  Muted : boolean = false;

  @Input()
  Choices !: string[];

  @Input()
  Size : number;

  @Output()
  public onClick = new EventEmitter<MouseEvent>();

  @Output()
  public onSelect = new EventEmitter<MouseEvent>();

  cssVar !: SafeStyle;

  displayText : string = '';
  widthBox : number = 190;
  IsMenuOpen : boolean = false;

  constructor(private renderer : Renderer2, private sanitizer : DomSanitizer)
  {
    this.Size = 15;
    this.renderer.listen('window', 'click', (e:Event)=>{
      if(e.target !== this.MyButton.nativeElement && !this.MyButton.nativeElement.contains(e.target)){
        this.IsMenuOpen=false;
    }
    })
  }

  ngOnInit(): void {
    this.setLabel((this.Choices?'None':''));
    this.cssVar = this.sanitizer.bypassSecurityTrustStyle('--circle-width: ' + this.Size*20/20);
  }

  setLabel(str:string)
  {
    this.displayText = this.label + str;//14
    this.widthBox = this.displayText.length * (this.IsSpecial?(20/30*this.Size):(this.Choices?9.5/15*this.Size:11.3/15*this.Size)) + (this.IsSpecial?50:0) + this.Size/20  + (this.Choices?(30/15*this.Size):0);
  }

  TriggerAction(event : any)
  {
    //console.log(event);
    if(this.Choices)
    {
      this.IsMenuOpen = !this.IsMenuOpen;
    }
    if(this.Muted)
    {
      return
    }
    if(this.Choices && this.MyMenu.nativeElement.contains(event.target))
    {
      this.setLabel(event.target.innerText);
      this.onSelect.emit(event.target.innerText);
    }
    else if(this.onClick)
    {
      this.onClick.emit(event);
    }
  }
}
