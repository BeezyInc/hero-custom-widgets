const css = `@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@600;700&display=swap');

/* BASIC STYLES FOR ALL THE CUSTOM ADAPTIVE CARDS */
html,
body,
.ac-adaptiveCard {
  height: 100%;
}

body {
  -webkit-font-smoothing: antialiased;
  margin: 0;
  overflow: hidden;
}

.ac-adaptiveCard:focus {
  outline: 0;
}

/* SPECIFIC STYLES FOR STOCK WIDGET */
.ac-adaptiveCard > .ac-container:nth-child(3) {
  margin-top: auto !important;
}

.ac-adaptiveCard > .ac-container:nth-child(3) .ac-textBlock {
  text-transform: uppercase;
}

.ac-adaptiveCard > .ac-container:nth-child(5) .ac-columnSet .ac-container:first-child .ac-textBlock {
  line-height: .96 !important;
}

.ac-adaptiveCard > .ac-container:nth-child(5) .ac-columnSet .ac-container:nth-child(3) .ac-image {
  position: relative;
  bottom: -0.375rem;
}

.ac-actionSet {
  justify-content: flex-end !important;
}

button.style-default {
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  display: inline-flex !important;
  flex: 0 1 auto !important;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  opacity: .8;
  padding: 0;
}

button.style-default:focus {
  outline: none;
}

/* RESPONSIVE STYLES */

/* Wide block tablet */
@media screen and (max-width: 25.5625rem) and (height: 13.625rem),

/* Narrow block tablet*/
screen and (min-width: 15rem) and (max-width: 18.9375rem) and (max-height: 20.75rem) {
  .ac-adaptiveCard {
    padding: 1.5rem !important;
  }

  button.style-default {
    font-size: .875rem !important;
  }

  .ac-adaptiveCard > .ac-container:nth-child(3) .ac-textBlock {
    font-size: .75rem !important;
  }

  .ac-adaptiveCard > .ac-container:nth-child(5) .ac-columnSet > .ac-container:first-child .ac-textBlock:first-child {
    font-size: 2rem !important;
  }

  .ac-adaptiveCard > .ac-container:nth-child(5) .ac-columnSet .ac-container:nth-child(3) .ac-image {
    bottom: -.25rem;
  }
}

/* Narrow block tablet*/
@media screen and (min-width: 15rem) and (max-width: 18.9375rem) and (max-height: 20.75rem) {
  .ac-adaptiveCard > .ac-container:nth-child(5) .ac-columnSet {
    flex-wrap: wrap;
  }

  .ac-adaptiveCard > .ac-container:nth-child(5) .ac-columnSet > .ac-container:first-child {
    flex-grow: 1 !important;
    flex-basis: 100% !important;
  }

  .ac-adaptiveCard > .ac-container:nth-child(5) .ac-columnSet > .ac-vertical-separator:nth-child(2) {
    display: none !important;
  }

  .ac-adaptiveCard > .ac-container:nth-child(5) .ac-columnSet > .ac-container:nth-child(3) .ac-image {
    bottom: -.0625rem !important;
  }

  .ac-adaptiveCard > .ac-container:nth-child(5) .ac-columnSet > .ac-container:nth-child(4) {
    margin-top: .1875rem !important;
  }
}`;

export default css;
