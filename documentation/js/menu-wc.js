'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">reward-point-system documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-908f05417e1650452ad7a259785b6e0e79cd33be54d0609d54d60ceef6d30053cff10d22ed0d527c6502e1345f6171ccfc17a557388b8800f5b220082fff9d42"' : 'data-bs-target="#xs-controllers-links-module-AppModule-908f05417e1650452ad7a259785b6e0e79cd33be54d0609d54d60ceef6d30053cff10d22ed0d527c6502e1345f6171ccfc17a557388b8800f5b220082fff9d42"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-908f05417e1650452ad7a259785b6e0e79cd33be54d0609d54d60ceef6d30053cff10d22ed0d527c6502e1345f6171ccfc17a557388b8800f5b220082fff9d42"' :
                                            'id="xs-controllers-links-module-AppModule-908f05417e1650452ad7a259785b6e0e79cd33be54d0609d54d60ceef6d30053cff10d22ed0d527c6502e1345f6171ccfc17a557388b8800f5b220082fff9d42"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-908f05417e1650452ad7a259785b6e0e79cd33be54d0609d54d60ceef6d30053cff10d22ed0d527c6502e1345f6171ccfc17a557388b8800f5b220082fff9d42"' : 'data-bs-target="#xs-injectables-links-module-AppModule-908f05417e1650452ad7a259785b6e0e79cd33be54d0609d54d60ceef6d30053cff10d22ed0d527c6502e1345f6171ccfc17a557388b8800f5b220082fff9d42"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-908f05417e1650452ad7a259785b6e0e79cd33be54d0609d54d60ceef6d30053cff10d22ed0d527c6502e1345f6171ccfc17a557388b8800f5b220082fff9d42"' :
                                        'id="xs-injectables-links-module-AppModule-908f05417e1650452ad7a259785b6e0e79cd33be54d0609d54d60ceef6d30053cff10d22ed0d527c6502e1345f6171ccfc17a557388b8800f5b220082fff9d42"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsModule.html" data-type="entity-link" >ProductsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ProductsModule-edb0bf0fb406e0b5442fffb8ff6388d6ac7c43241908964a874ec4fdbb42411f9360e0edc1144d2e03c69ed5320dfee7b877f455e34c42bb84e31c015c8294b6"' : 'data-bs-target="#xs-controllers-links-module-ProductsModule-edb0bf0fb406e0b5442fffb8ff6388d6ac7c43241908964a874ec4fdbb42411f9360e0edc1144d2e03c69ed5320dfee7b877f455e34c42bb84e31c015c8294b6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductsModule-edb0bf0fb406e0b5442fffb8ff6388d6ac7c43241908964a874ec4fdbb42411f9360e0edc1144d2e03c69ed5320dfee7b877f455e34c42bb84e31c015c8294b6"' :
                                            'id="xs-controllers-links-module-ProductsModule-edb0bf0fb406e0b5442fffb8ff6388d6ac7c43241908964a874ec4fdbb42411f9360e0edc1144d2e03c69ed5320dfee7b877f455e34c42bb84e31c015c8294b6"' }>
                                            <li class="link">
                                                <a href="controllers/ProductsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ProductsModule-edb0bf0fb406e0b5442fffb8ff6388d6ac7c43241908964a874ec4fdbb42411f9360e0edc1144d2e03c69ed5320dfee7b877f455e34c42bb84e31c015c8294b6"' : 'data-bs-target="#xs-injectables-links-module-ProductsModule-edb0bf0fb406e0b5442fffb8ff6388d6ac7c43241908964a874ec4fdbb42411f9360e0edc1144d2e03c69ed5320dfee7b877f455e34c42bb84e31c015c8294b6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductsModule-edb0bf0fb406e0b5442fffb8ff6388d6ac7c43241908964a874ec4fdbb42411f9360e0edc1144d2e03c69ed5320dfee7b877f455e34c42bb84e31c015c8294b6"' :
                                        'id="xs-injectables-links-module-ProductsModule-edb0bf0fb406e0b5442fffb8ff6388d6ac7c43241908964a874ec4fdbb42411f9360e0edc1144d2e03c69ed5320dfee7b877f455e34c42bb84e31c015c8294b6"' }>
                                        <li class="link">
                                            <a href="injectables/ProductsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Product.html" data-type="entity-link" >Product</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateProductDto.html" data-type="entity-link" >CreateProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProductDto.html" data-type="entity-link" >UpdateProductDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});