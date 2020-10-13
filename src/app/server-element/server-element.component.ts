import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  encapsulation: ViewEncapsulation.Emulated, // None, Native
})
// good practice to implement interfaces alongside the lifecycle hook methods
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  // tslint:disable-next-line: no-input-rename
  @Input("srvElement") element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild("heading", { static: true }) header: ElementRef;
  @ContentChild("contentParagraph", { static: true })
  paragraph: ElementRef;

  constructor() {
    console.log("constructor called");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnchanges");
    console.log("changes: ", changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit called");
    console.log("TextContent:", this.header.nativeElement.textContent);
    console.log(
      "Text content of paragraph:",
      this.paragraph.nativeElement.textContent
    );
  }

  ngDoCheck(): void {
    // whenever Angular checks for any changes
    console.log("ngDoCheck called!");
  }

  // called after DoCheck and only once - relates to the <p> content we projected
  ngAfterContentInit() {
    console.log("ngAfterContentInit called");
    console.log(
      "Text content of paragraph:",
      this.paragraph.nativeElement.textContent
    );
  }
  // after ngAfterContentInit
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called");
  }
  // After ngAfterContentChecked
  ngAfterViewInit() {
    console.log("ngAfterViewInit called");
    console.log("TextContent:", this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy called");
  }
}
