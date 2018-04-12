import {Component, OnInit} from "@angular/core"

@Component({
  selector: 'huper-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  content = 'Welcome do HuFood App!'

  constructor() { }

  ngOnInit() {
  }

}
