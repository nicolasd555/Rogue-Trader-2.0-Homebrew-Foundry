const { HandlebarsApplicationMixin } = foundry.applications.api;
const { ActorSheetV2 } = foundry.applications.sheets;

export class PlayerSheet extends HandlebarsApplicationMixin(ActorSheetV2) {

	sheetContext = {};
	// #region Options
	static DEFAULT_OPTIONS = {
		
		classes: ["roguetrader", "sheet", "playersheet"],
		position: {
			width: 575,
			height: 740,
		},
		window: {
			resizable: true,
		},
		form: {
			submitOnChange: true,
			closeOnSubmit: false,
		},
		actions: {

		},
	};

	static PARTS = {
		header: { template: "systems/rogue-trader-2/templates/charactersheet/player/header.hbs" },
		origin: { template: "systems/rogue-trader-2/templates/charactersheet/player/origin.hbs" },
		characteristics: { template: "systems/rogue-trader-2/templates/charactersheet/characteristics.hbs" },
	};

	get title() {

		return this.actor.characterName;
	}

    /** @override */
    _configureRenderOptions(options) {

        super._configureRenderOptions(options);

        if (this.document.limited) options.parts = ["header"]
        else options.parts = ["header", "origin", "characteristics"];
    }

	/** 
	 * @override
	 * Creates Basic Datamodel, which is used to fill the HTML together with Handelbars with Data
	 */
    async _prepareContext(options) {
        
        const baseData = await super._prepareContext();
        
        let context = {
    
            // Set General Values
            owner: baseData.document.isOwner,
            editable: baseData.editable,
            actor: baseData.document,
            system: baseData.document.system,
            items: baseData.document.items,
            config: CONFIG.NETHER,
            isGM: baseData.user.isGM,
            effects: baseData.document.effects
        };

        // context = this.calculateExperiance(context);
        
        this.sheetContext = context;

        return context;
    }

	    /** @override */
    _onRender(context, options) {

        const tabs = new foundry.applications.ux.Tabs({navSelector: ".tabs", contentSelector: ".content", initial: "tab1"});
        tabs.bind(this.element);

        const tabs2 = new foundry.applications.ux.Tabs({navSelector: ".tabs2", contentSelector: ".content2", initial: "tab2-1"});
        tabs2.bind(this.element);
    }
};
