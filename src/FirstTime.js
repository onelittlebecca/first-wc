import { html, css, LitElement } from 'lit-element';

export class FirstTime extends LitElement {
  static get styles() {
    return css`
      :host {
        --first-time-text-color: #000;
        display: block;
        padding: 25px;
        color: var(--first-time-text-color);
        margin: 20px;
        font-family: Source Sans Pro Web,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
        font-size: 1.06rem;
        line-height: 1.5;
        background-position: 1.75rem 1.25rem;
        background-repeat: no-repeat;
        background-size: 2rem;
        padding: 1.25rem 1.25rem 1rem 1.75rem;
        position: relative;
      }

      h3.usa-alert__heading{
        font-family: Source Sans Pro Web,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
        font-size: 1.33rem;
        line-height: 1.1;
        margin-top: 0;
        margin-bottom: .5rem;
      }

      .usa-alert__body{
        padding-left: 3.25rem;
      }

      :host([status='success']){
        background-image: url(https://designsystem.digital.gov/assets/img/alerts/success.svg),linear-gradient(transparent,transparent);
        background-repeat: no-repeat;
        background-color: #ecf3ec;
        border-left: solid #00a91c 10px;
      }

      :host([status='warning']){
        background-image: url(https://designsystem.digital.gov/assets/img/alerts/warning.svg),linear-gradient(transparent,transparent);
        background-repeat: no-repeat;
        background-color: #faf3d1;
        border-left: solid #ffbe2e 10px;
      }

      :host([status='error']){
        background-image: url(https://designsystem.digital.gov/assets/img/alerts/error.svg),linear-gradient(transparent,transparent);
        background-repeat: no-repeat;
        background-color:#f4e3db;
        border-left: solid #d63e04 10px;
      }

      :host([status='info']){
        background-image: url(https://designsystem.digital.gov/assets/img/alerts/info.svg),linear-gradient(transparent,transparent);
        background-repeat: no-repeat;
        background-color: #e7f6f8;
        border-left: solid #00bde3 10px;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      status: { type: String, reflect:true },
      //reflect = true == json object -- fancy, allows this property to be used as an attribute so you can assign CSS to it
    };
  }

  constructor() {
    super();
    this.status = 'success';
  }

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
