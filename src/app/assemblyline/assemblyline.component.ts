import { Component, Input } from "@angular/core";

@Component({
  selector: "assemblyline",
  templateUrl: "./assemblyline.component.html",
  styleUrls: ["./assemblyline.component.scss"]
})
export class AssemblyLineComponent {
  @Input() stages: string[];
  itemValue : string = "";
  assemblyItem: string;
  assemblyLines: string[][];
  item: string = '';
  constructor() {}

  ngOnInit(){
    console.log("stages",this.stages);
    this.assemblyLines = this.stages.map(() => []);
  }

  addItem(e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
      this.assemblyLines[0].unshift(this.item);
      this.item = '';
    }
  }

  moveNext(e, assemblyItem, assemblyItemIndex, assemblyLineIndex) {
    this.assemblyLines[assemblyLineIndex].splice(assemblyItemIndex, 1);
    if (this.assemblyLines.length !== assemblyLineIndex + 1) {
      this.assemblyLines[assemblyLineIndex + 1].unshift(assemblyItem);
    }
  }

  movePrev(e, assemblyItem, assemblyItemIndex, assemblyLineIndex) {
    e.preventDefault();
    this.assemblyLines[assemblyLineIndex].splice(assemblyItemIndex, 1);
    if (assemblyLineIndex !== 0) {
      this.assemblyLines[assemblyLineIndex - 1].push(assemblyItem);
    }
  }
}
