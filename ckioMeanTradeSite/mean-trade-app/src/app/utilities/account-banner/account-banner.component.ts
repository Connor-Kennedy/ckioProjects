import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-banner',
  template: `
    <div class="alert alert-primary" role="alert" >
      <div class="row justify-content-end">
        <form class="form-inline">
        <div class="form-group mx-sm-3 mb-2">
            <label for="inputPassword2" class="sr-only">Username</label>
            <input type="text" class="form-control" id="userName" placeholder="Username">
          </div>
          <div class="form-group mx-sm-3 mb-2">
            <label for="inputPassword2" class="sr-only">Password</label>
            <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-primary mb-2">Login</button>
        </form>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class AccountBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
