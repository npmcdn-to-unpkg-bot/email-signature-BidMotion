//our root app component
import { Component, NgModule, OnInit } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <h1>BidMotion Email Signature</h1>
          <p>Please fill the form below to generate your signature.</p>
          <hr />
          <h2>Your Email Signature</h2>
          <form *ngIf="active" class="form-horizontal" #signatureForm="ngForm">
            <div class="form-group">
              <label for="firstName" class="col-xs-2 control-label">First Name</label>
              <div class="col-xs-6 has-feedback" [class.has-error]="!firstName.valid && !firstName.pristine" [class.has-success]="firstName.valid && !firstName.pristine">
                <input type="text" id="firstName" name="firstName" #firstName="ngModel" [(ngModel)]="signature.firstName" required class="form-control" placeholder="First name..." />
                <span *ngIf="firstName.valid && !firstName.pristine" class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
                <span *ngIf="firstName.valid && !firstName.pristine" id="firstName" class="sr-only">(success)</span>
                <div [hidden]="firstName.valid || firstName.pristine" class="alert alert-danger" role="alert">
                  First Name is invalid.
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="lastName" class="col-xs-2 control-label">Last Name</label>
              <div class="col-xs-6 has-feedback" [class.has-error]="!lastName.valid && !lastName.pristine" [class.has-success]="lastName.valid && !lastName.pristine">
                <input type="text" id="lastName" name="lastName" #lastName="ngModel" [(ngModel)]="signature.lastName" required class="form-control" placeholder="Last name..." />
                <span *ngIf="lastName.valid && !lastName.pristine" class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
                <span *ngIf="lastName.valid && !lastName.pristine" id="lastName" class="sr-only">(success)</span>
                <div [hidden]="lastName.valid || lastName.pristine" class="alert alert-danger" role="alert">
                  Last Name is invalid.
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="position" class="col-xs-2 control-label">Position</label>
              <div class="col-xs-6 has-feedback" [class.has-error]="!position.valid && !position.pristine" [class.has-success]="position.valid && !position.pristine">
                <input type="text" id="position" name="position" #position="ngModel" [(ngModel)]="signature.position" required class="form-control" placeholder="Last name..." />
                <span *ngIf="position.valid && !position.pristine" class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
                <span *ngIf="position.valid && !position.pristine" id="position" class="sr-only">(success)</span>
                <div [hidden]="position.valid || position.pristine" class="alert alert-danger" role="alert">
                  Position is invalid.
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="email" class="col-xs-2 control-label">Email</label>
              <div class="col-xs-6 has-feedback" [class.has-error]="!email.valid && !email.pristine" [class.has-success]="email.valid && !email.pristine">
                <input type="text" id="email" name="email" #email="ngModel" [(ngModel)]="signature.email" required pattern="[a-z0-9!#$%&'*+/=?^_\`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_\`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" class="form-control" placeholder="Email..." />
                <span *ngIf="email.valid && !email.pristine" class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
                <span *ngIf="email.valid && !email.pristine" id="email" class="sr-only">(success)</span>
                <div [hidden]="email.valid || email.pristine" class="alert alert-danger" role="alert">
                  Email is invalid.
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="phone" class="col-xs-2 control-label">Phone</label>
              <div class="col-xs-6 has-feedback" [class.has-error]="!phone.valid && !phone.pristine" [class.has-success]="phone.valid && !phone.pristine">
                <input type="text" id="phone" name="phone" #phone="ngModel" [(ngModel)]="signature.phone" required pattern="\\+\\d{1,2}( ?\\d{1,20}){1,6}" class="form-control" placeholder="+33 1 23 45 67 89..." />
                <span *ngIf="phone.valid && !phone.pristine" class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
                <span *ngIf="phone.valid && !phone.pristine" id="phone" class="sr-only">(success)</span>
                <div [hidden]="phone.valid || phone.pristine" class="alert alert-danger" role="alert">
                  Phone is invalid.<br />
                  Note that it needs to start with a + sign.
                </div>
              </div>
            </div>
            <div class="form-group">
              <label for="skype" class="col-xs-2 control-label">Skype Handle</label>
              <div class="col-xs-6 has-feedback" [class.has-error]="!skype.valid && !skype.pristine" [class.has-success]="skype.valid && !skype.pristine">
                <input type="text" id="skype" name="skype" #skype="ngModel" [(ngModel)]="signature.skype" required class="form-control" placeholder="Skype Handle..." />
                <span *ngIf="skype.valid && !skype.pristine" class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
                <span *ngIf="skype.valid && !skype.pristine" id="skype" class="sr-only">(success)</span>
                <div [hidden]="skype.valid || skype.pristine" class="alert alert-danger" role="alert">
                  Skype Handle is invalid.
                </div>
              </div>
            </div>
            <div class="form-group" *ngIf="skype.valid">
              <label for="skypeURL" class="col-xs-2 control-label">Skype URL</label>
              <div class="col-xs-6 has-feedback" [class.has-error]="!skypeURL.valid && !skypeURL.pristine" [class.has-success]="skypeURL.valid && !skypeURL.pristine">
                <input type="text" id="skypeURL" name="skypeURL" #skypeURL="ngModel" [(ngModel)]="signature.skypeURL" required pattern="https?:\\/\\/is\\.gd\\/.*" class="form-control" placeholder="Skype URL..." />
                <span *ngIf="skypeURL.valid && !skypeURL.pristine" class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>
                <span *ngIf="skypeURL.valid && !skypeURL.pristine" id="skypeURL" class="sr-only">(success)</span>
                <div [hidden]="skypeURL.valid || skypeURL.pristine" class="alert alert-danger" role="alert">
                  Skype URL is invalid.
                </div>
                <span id="helpBlock" class="help-block">
                  Skype shorten URL, use <a href="http://is.gd/" target="_blank">http://is.gd/</a> and enter:<br />
                  skype:{{signature.skype}}?chat
                </span>
              </div>
            </div>
            <div class="form-group">
              <div class="col-xs-offset-2 col-xs-10">
                <button type="button" class="btn btn-default" (click)="reset()">Reset Signature</button>
              </div>
            </div>
            <div class="alert alert-success" role="alert" *ngIf="signatureForm.form.valid">
              The signature below is valid, you can select it and paste it inside your Gmail account.
            </div>
            <div class="alert alert-danger" role="alert" *ngIf="!signatureForm.form.valid">
              Some fields are invalid, hence the signature below is not valid.
            </div>
            <hr />
            <div style="position: relative;">
              <div *ngIf="!signatureForm.form.valid" style="position: absolute; top: -5px; right: -5px; bottom: -5px; left: -5px; background-color: rgba(255, 0, 0, 0.42);"></div>
              <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate!important; table-layout: fixed;" width="450">
                  <tbody>
                      <tr>
                          <td align="left" valign="top" width="90">
                              <p style="margin-bottom: 10px; margin-right: 10px; font-family: Helvetica, Arial, sans-serif; font-size: 10px; line-height: 12px;">
                                  <a style="text-decoration:none" href="http://www.bidmotion.com?signature={{signature.email}}" target="_blank">
                                      <img src="https://hd-misc.s3.amazonaws.com/assets/misc/logo.png" alt="Bidmotion" border="0" style="border-radius: 50%;" height="80" width="80">
                                  </a>
                              </p>
                              <p style="font-size: 0px; line-height: 0; font-family: Helvetica, Arial, sans-serif;">
                                  <span style="white-space:nowrap;"><img src="https://hd-misc.s3.amazonaws.com/assets/misc/spacer.gif" width="13"></span>
                                  <a style="text-decoration: none; display: inline;" href="https://twitter.com/bidmotion" target="_blank"><img width="16" style="margin-bottom:2px; border:none; display:inline;" height="16" data-filename="twitter.png" src="https://hd-misc.s3.amazonaws.com/assets/icons/twitter.png" alt="Twitter"></a><span style="white-space:nowrap;"><img src="https://hd-misc.s3.amazonaws.com/assets/misc/spacer.gif" width="2"></span>
                                  <a style="text-decoration: none; display: inline;" href="https://www.linkedin.com/company/bidmotion" target="_blank"><img width="16" style="margin-bottom:2px; border:none; display:inline;" height="16" data-filename="linkedin.png" src="https://hd-misc.s3.amazonaws.com/assets/icons/linkedin.png" alt="LinkedIn"></a><span style="white-space:nowrap;"><img src="https://hd-misc.s3.amazonaws.com/assets/misc/spacer.gif" width="2"></span>
                                  <a style="text-decoration: none; display: inline;" href="https://www.facebook.com/bidmotion" target="_blank"><img width="16" style="margin-bottom:2px; border:none; display:inline;" height="16" data-filename="facebook.png" src="https://hd-misc.s3.amazonaws.com/assets/icons/facebook.png" alt="Facebook"></a><span style="white-space:nowrap;"><img src="https://hd-misc.s3.amazonaws.com/assets/misc/spacer.gif" width="2"></span>
                              </p>
                          </td>
                          <td align="left" valign="top" nowrap="nowrap" width="16" style="border-left-width: 2px; border-left-style: solid; border-left-color: rgb(88, 203, 181);">
                              <img src="https://hd-misc.s3.amazonaws.com/assets/misc/spacer.gif" width="10">
                          </td>
                          <td align="left" valign="top" nowrap="nowrap" width="354" style="margin-bottom: 0;">
                              <div style="">
                                  <p style="font-family: Helvetica, Arial, sans-serif; font-size: 10px; line-height: 12px; color: rgb(33, 33, 33); margin-bottom: 10px;">
                                      <span style="font-weight: bold; font-size: 12px; color: rgb(33, 33, 33); display: inline;">{{signature.firstName}} {{signature.lastName}}</span>
                                      <span style="display: inline;"><br></span>
                                      <span style="color: rgb(33, 33, 33); display: inline;">{{signature.position}}</span>
                                      <span style="display: inline;"><br></span>
                                      <span style="display: inline;"><br></span>
                                      <span style="display: inline;">Email: </span>
                                      <a href="mailto:{{signature.email}}" style="color: rgb(88, 203, 181); text-decoration: none; display: inline;">{{signature.email}}</a>
                                      <span style="display: inline;"><br></span>
                                      <span style="display: inline;">Skype: </span>
                                      <a href="{{signature.skypeURL}}" target="_blank" style="color: rgb(88, 203, 181); text-decoration: none; display: inline;">{{signature.skype}}</a>
                                      <span style="display: inline;"><br></span>
                                      <span style="display: inline;">Phone: </span><span style="color: rgb(33, 33, 33); display: inline;">{{signature.phone}}</span>
                                  </p>
                                  <p style="font-family: Helvetica, Arial, sans-serif; font-size: 10px; line-height: 12px; margin-bottom: 10px;">
                                      <a href="http://www.bidmotion.com/?signature={{signature.email}}" target="_blank" style="font-weight: bold; font-size: 12px; color: rgb(33, 33, 33); text-decoration: none; display: inline;">BidMotion</a>
                                      <span style="display: inline;"><br></span>
                                      <span></span> <span style="color: rgb(33, 33, 33); display: inline;">23, rue Blondel 75002 Paris</span>
                                      <span style="display: block;"></span>
                                      <span style="color: rgb(33, 33, 33); display: inline;">
                                        <a style="color: rgb(88, 203, 181); text-decoration: none; display: inline;" href="http://www.bidmotion.com?signature={{signature.email}}" target="_blank">
                                          http://www.bidmotion.com
                                        </a>
                                      </span>
                                      <span style="display: inline;"><br></span>
                                  </p>
                              </div>
                          </td>
                      </tr>
                      <tr>
                          <td colspan="3" height="5"></td>
                      </tr>
                      <tr>
                          <td colspan="3">
                              <a href="https://goo.gl/forms/z521EGAfbwvgE6Cv2" target="_blank" style="color: rgb(88, 203, 181); text-decoration: none; display: inline;">
                                  <img src="https://hd-misc.s3.amazonaws.com/assets/signatures/dmexco_banner_450x100_BidMotion-1.jpg" alt="Bidmotion at Dmexco" border="0" height="100" width="450">
                              </a>
                          </td>
                      </tr>
                  </tbody>
                </table>
              </div>
            </form>
          <hr />
          Made with <i class="fa fa-heart"></i> by <a href="https://twitter.com/urbanpierre" target="_blank">Pierre Urban</a>.
        </div>
      </div>
    </div>
  `,
  styles: [`

  `]
})
export class App implements OnInit {
  public signature: object;
  public active: boolean = false;
  private signatureModel: object = {
    firstName: '',
    lastName: '',
    position: '',
    email: '',
    phone: '',
    skype: '',
    skypeURL: '',
  };

  constructor() { }

  public ngOnInit():void {
    this.reset();
  }

  public reset():void {
    this.signature = Object.assign({}, this.signatureModel);
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ App ],
  bootstrap: [ App ]
})
export class AppModule {}
