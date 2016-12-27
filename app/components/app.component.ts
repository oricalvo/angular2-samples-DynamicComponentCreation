import {
  Component, ViewContainerRef,
  ViewChild, ComponentFactoryResolver
} from '@angular/core';
import {ClockComponent} from "./clock.component";

@Component({
  selector: "my-app",
  moduleId: module.id,
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild('placeholder', {read: ViewContainerRef}) placeholder;

  constructor(private viewContainerRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(ClockComponent);
    this.placeholder.clear();
    let componentRef = this.placeholder.createComponent(componentFactory);
    componentRef.changeDetectorRef.detectChanges();
  }

  createComponent() {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(ClockComponent);
    this.placeholder.clear();
    let componentRef = this.placeholder.createComponent(componentFactory);
  }
}
