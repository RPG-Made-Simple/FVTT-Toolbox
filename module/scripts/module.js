////////////////////////////////////////////////////////////////////////////////
//                  _______          _ _                                      //
//                  |__   __|        | | |                                    //
//                     | | ___   ___ | | |__   _____  __                      //
//                     | |/ _ \ / _ \| | '_ \ / _ \ \/ /                      //
//                     | | (_) | (_) | | |_) | (_) >  <                       //
//                     |_|\___/ \___/|_|_.__/ \___/_/\_\ LIBRARY              //
//                                                         By ZotyDev         //
////////////////////////////////////////////////////////////////////////////////
// ? Toolbox provides some common utilies to facilitate development. The methods
// ? exposed are generally used everywhere and thus making them a standalone
// ? module makes a lot of sense. All the exposed methods are subject to changes
// ? based on foundry updates, including deprecation.
import { Constants as C } from "./constants.js";
import { Toolbox } from "./toolbox.js";

////////////////////////////////////////////////////////////////////////////////
// Entry-point for everything
////////////////////////////////////////////////////////////////////////////////
Hooks.once('init', () => {
    Hooks.once('debugger.ready', () => {
        // Debug info
        C.D = new Debugger(C.ID, C.NAME, true, true);
        C.D.info('Module Information:');
        C.D.info(`Version ${game.modules.get(C.ID).version}`);
        C.D.info('Library By ZotyDev');

        // Initialize de module
        Toolbox.initialize();

        // Setup the API and methods
        window['Toolbox'] = {
            showcaseModule: Toolbox.showcaseModule,
            can: Toolbox.can,
            doesExist: Toolbox.doesExist,
            saveFile: Toolbox.saveFile,
            loadFile: Toolbox.loadFile,
            makeSure: Toolbox.makeSure,
            everyoneWhoCan: Toolbox.everyoneWhoCan,
            anyoneWhoCan: Toolbox.anyoneWhoCan,
        }

        // ? To maintain some sort of order based on importance, the showcases
        // ? are done here. Also, since Debugger is a requirement, and Toolbox
        // ? gets ready after it, we must showcase Debugger here.
        Toolbox.showcaseModule('Debugger');
        Toolbox.showcaseModule(C.NAME_FLAT);

        // Informs that toolbox is ready to be used
        Hooks.call('toolbox.ready');

        // Debug
        C.D.info('Ready!!');

        // Does a fancy log of the modules using Toolbox
        for (const module of Toolbox.data.showcaseModules) {
            console.log(`%c${module}`, `
            font-weight: bold;
            font-size: 50px;
            color: rgb(255,0,136);
            text-shadow:
                3px 3px 0 rgb(220,19,153),
                6px 6px 0 rgb(173,44,174),
                9px 9px 0 rgb(146,58,187),
                12px 12px 0 rgb(115,75,201),
                15px 15px 0 rgb(70,99,222),
                18px 18px 0 rgb(37,117,238),
                21px 21px 0 rgb(0,136,255)`);
        }
    });
})
