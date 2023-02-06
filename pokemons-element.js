
class PokemonsElement extends Polymer.Element {
    static get is() { return 'pokemons-element'; }
    static get properties() {
        return {
            pokemonList: {
                type: Object,
                value: {}
            }
        };
    }
}

window.customElements.define(PokemonsElement.is, PokemonsElement);