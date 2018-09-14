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
        type: Object,
        value: {

        },
        notify: true
      }
    };
  }

  _parseResponse(evt) {
    let categories = [];
    let serie = [];
    JSON.parse(evt.detail.data).forEach(el => {
      categories.push(
          new Date(el.date).toLocaleDateString("es-AR", {month: 'short', year: '2-digit'}));
          serie.push(el.amount);
    });
    this.set('data', {
      categories: categories,
      data: {
        name: 'Cashflow',
        data: serie
      }
    });
  }
}

customElements.define(CellsCompanionLastYearCashflowDm.is, CellsCompanionLastYearCashflowDm);
