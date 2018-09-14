class CellsCompanionLastYearCashflowDm extends Polymer.Element {

  static get is() {
    return 'cells-companion-last-year-cashflow-dm';
  }

  static get properties() {
    return {
      host: {
        type: String,
        value: 'https://wh1s9vx7wg.execute-api.us-west-2.amazonaws.com'
      },
      path: {
        type: String,
        value: 'Stage/last-year-cashflow'
      },
      data: {
        type: Array,
        value: []
      }
    }
  }

  _parseResponse(evt) {
    console.log(evt);
    this.set('data', evt.detail.data);
  }
}

customElements.define(CellsCompanionLastYearCashflowDm.is, CellsCompanionLastYearCashflowDm);
