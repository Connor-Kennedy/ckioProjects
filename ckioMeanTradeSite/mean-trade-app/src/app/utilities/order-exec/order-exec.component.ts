import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-exec',
  template: `






    <div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-info">MARKET ORDER</button>
      <button type="button" class="btn btn-info">LIMIT ORDER</button>
      <button type="button" class="btn btn-info">STOP ORDER</button>
    </div>
    <br>
    <br>
    <div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-success">BUY</button>
      <button type="button" class="btn btn-danger">SELL</button>
      <app-quick-ticker-price></app-quick-ticker-price>
    </div>
    <br>
    <br>

    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <div class="input-group-text">
          Trailing Stop?
          <input type="checkbox" aria-label="Checkbox for following text input">
        </div>
      </div>
      <input type="text" class="form-control" aria-label="Text input with checkbox">
    </div>

    <form>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Volume</label>
        <div class="col-sm-10">
          <input type="number" class="form-control" id="inputPassword">
        </div>
      </div>
    </form>


  `,
  styles: [
  ]
})
export class OrderExecComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


