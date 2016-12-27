import {
  Component, ReflectiveInjector, SystemJsNgModuleLoader, NgModuleFactory, ViewContainerRef,
  ViewChild, ComponentFactoryResolver, ChangeDetectorRef
} from '@angular/core';
import {JitCompiler} from "@angular/compiler";
@Component({
  selector: "my-clock",
  moduleId: module.id,
  templateUrl: "./clock.component.html",
  styleUrls: ["./clock.component.css"]
})
export class ClockComponent {
  time: Date;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    this.time = new Date();
  }

  ngOnInit() {
    setInterval(() => {
      this.time = new Date();

      //this.changeDetectorRef.detectChanges();
    }, 1000);
  }
}
