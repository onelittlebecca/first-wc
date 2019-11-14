import { html, css, LitElement } from 'lit-element';

export class FirstTime extends LitElement {
  /**
   * LitElement life cycle - styles declaration
   */
  static get styles() {
    // this being an array will help setup for the future when there's the ability to import
    // the usa style sheet into this element (and others) for easier use
    return [css`
      :host {
        --first-time-text-color: #000; /* is this something that can be changed as per the usa standard? */
        display: block;
        padding: 25px;
        color: var(--first-time-text-color);
        margin: 20px;
        font-family: Source Sans Pro Web,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
        font-size: 1.06rem;
        line-height: 1.5;
        background-position: 1.75rem 1.25rem; /* This might be ok but REM can operate a bit odd in shadow roots at times */
        background-repeat: no-repeat;
        background-size: 2rem;
        padding: 1.25rem 1.25rem 1rem 1.75rem;
        position: relative;
      }
      /* the usa-alert__heading class scoping isn't needed in here unless you want to be keeping with the existing style names */
      /* otherwise, you could just do h3 by itself without issue */
      h3.usa-alert__heading{
        font-family: Source Sans Pro Web,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
        font-size: 1.33rem;
        line-height: 1.1;
        margin-top: 0;
        margin-bottom: .5rem;
      }
      /* same as above, dono if this scoping is needed but it's not bad to do */
      .usa-alert__body{
        padding-left: 3.25rem;
      }

      :host([status='success']){
        background-image: url(https://designsystem.digital.gov/assets/img/alerts/success.svg),linear-gradient(transparent,transparent);
        background-color: #ecf3ec;
        border-left: solid #00a91c 10px;
      }

      :host([status='warning']){
        background-image: url(https://designsystem.digital.gov/assets/img/alerts/warning.svg),linear-gradient(transparent,transparent);
        background-color: #faf3d1;
        border-left: solid #ffbe2e 10px;
      }

      :host([status='error']){
        background-image: url(https://designsystem.digital.gov/assets/img/alerts/error.svg),linear-gradient(transparent,transparent);
        background-color:#f4e3db;
        border-left: solid #d63e04 10px;
      }

      :host([status='info']){
        background-image: url(https://designsystem.digital.gov/assets/img/alerts/info.svg),linear-gradient(transparent,transparent);
        background-color: #e7f6f8;
        border-left: solid #00bde3 10px;
      }
    `];
  }
  /**
   * LitElement life cycle - properties declaration
   */
  static get properties() {
    return {
      title: { type: String },
      status: { type: String, reflect:true },
      dialog: { type: Boolean }
      //reflect = true == json object -- fancy, allows this property to be used as an attribute so you can assign CSS to it
    };
  }
  /**
   * LitElement life cycle - property changed
   */
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName == 'status' || propName == 'dialog') {
        this.__setAriaStatus(this.status, this.dialog);
      }
    });
  }
  /**
   * Aria status setting based on value
   */
  __setAriaStatus(status, dialog) {
    // modify our aria based on error status and if we are acting as a dialog
    if (status === 'error') {
      if (dialog) {
        this.setAttribute('role', 'alertdialog');
      }
      else {
        this.setAttribute('role', 'alert');
      }
    }
  }
  /**
   * HTMLElement life cycle
   */
  constructor() {
    super();
    this.status = 'success';
    this.dialog = false;
  }
  /**
   * LitElement life cycle - render callback
   */
  render() {
    return html`
      <div class="usa-alert usa-alert-${this.status}">
        <div class="usa-alert__body">
          <h3 class="usa-alert__heading">${this.title}</h3>
          <p class="usa-alert__text"><slot></slot></p>
        </div>
      </div>
    `;
  }
}
