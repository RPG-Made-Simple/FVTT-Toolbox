////////////////////////////////////////////////////////////////////////////////
//                  _______          _ _                                      //
//                  |__   __|        | | |                                    //
//                     | | ___   ___ | | |__   _____  __                      //
//                     | |/ _ \ / _ \| | '_ \ / _ \ \/ /                      //
//                     | | (_) | (_) | | |_) | (_) >  <                       //
//                     |_|\___/ \___/|_|_.__/ \___/_/\_\ LIBRARY              //
//                                                         By ZotyDev         //
////////////////////////////////////////////////////////////////////////////////
// ? Main module class. All the methods here will be exposed to the API.
import { Constants as C } from "./constants.js";

export class Toolbox {
    ////////////////////////////////////////////////////////////////////////////
    // Data that will be used by the module
    ////////////////////////////////////////////////////////////////////////////
    static data = {
        showcaseModules: [],
    }

    ////////////////////////////////////////////////////////////////////////////
    // Initializes the module
    ////////////////////////////////////////////////////////////////////////////
    static initialize() {

    }

    ////////////////////////////////////////////////////////////////////////////
    // Checks if the passed value is not empty and is of the correct type
    ////////////////////////////////////////////////////////////////////////////
    static check(value, type) {
        // Debug
        C.D.info('Toolbox.check()');

        // Check if 'type' is valid
        const isTypePresent = !foundry.utils.isEmpty(type);
        if (!isTypePresent) {
            // Debug
            C.D.info('"type" not informed, making empty-only check');
        } else {
            if (typeof type !== 'string') {
                // Debug
                C.D.error('"type" must be a string');

                return;
            }
        }

        // Check the value
        if (foundry.utils.isEmpty(value)) {
            // Debug
            C.D.info('"value" is empty');

            return false;
        }

        // Type handlers
        if (isTypePresent) {
            if (type === 'array') {
                if (!Array.isArray(value)) {
                    // Debug
                    C.D.info('"value" is not a "array"');

                    return false;
                }
            } else {
                if (typeof value !== type) {
                    // Debug
                    C.D.info(`"value" is not a "${type}"`);

                    return false;
                }
            }

            // Debug
            C.D.info(`"value" is not empty and is a "${type}"`);
        } else {
            // Debug
            C.D.info('"value" is not empty');
        }

        return true;
    }

    ////////////////////////////////////////////////////////////////////////////
    // Will log the passed data in a fancy way
    ////////////////////////////////////////////////////////////////////////////
    static showcaseModule(data) {
        // Debug
        C.D.info('Toolbox.showcaseModule()');

        // Check arguments
        if (!Toolbox.check(data, 'string')) {
            // Debug
            C.D.error('"data" is invalid');

            return;
        }

        // Debug
        C.D.info(`Showcasing module "${data}"`);

        Toolbox.data.showcaseModules.push(data);
    }

    ////////////////////////////////////////////////////////////////////////////
    // Showcase the modules that ask for it
    ////////////////////////////////////////////////////////////////////////////
    static doTheShowcase() {
        for (const module of Toolbox.data.showcaseModules) {
            // Does a fancy showcase of the modules that ask for it at the
            // console
            console.log(`%c${module}`, `
            font-weight: bold;
            font-size: 36px;
            color: rgb(255,0,136);
            text-shadow:
                2px 2px 0 rgb(220,19,153),
                4px 4px 0 rgb(173,44,174),
                6px 6px 0 rgb(146,58,187),
                8px 8px 0 rgb(115,75,201),
                10px 10px 0 rgb(70,99,222),
                12px 12px 0 rgb(37,117,238),
                14px 14px 0 rgb(0,136,255)`);
        }
    }

    ////////////////////////////////////////////////////////////////////////////
    // Checks if the user has the specified permissions
    ////////////////////////////////////////////////////////////////////////////
    static can(permissions, username) {
        // Debug
        C.D.info('Toolbox.can()');

        // Check if the arguments are valid
        if (!Toolbox.check(permissions, 'array')) {
            // Debug
            C.D.error('"permissions" is invalid');

            return;
        }
        for (const permission of permissions) {
            if (typeof permission !== 'string') {
                // Debug
                C.D.error('"permissions" must be a String Array')

                return;
            }
        }
        for (const permission of permissions) {
            const truePermission = game.permissions[permission];
            if (foundry.utils.isEmpty(truePermission)) {
                // Debug
                C.D.error(`Passed "${permission}" couldn't be found`);

                return;
            }
        }
        let user;
        if (foundry.utils.isEmpty(username)) {
            // Debug
            C.D.info('"username" is missing, doing the check for the local user');

            user = game.user;
            username = user.name;
        } else {
            user = game.users.find(element => element.name == username);
            if (foundry.utils.isEmpty(user)) {
                // Debug
                C.D.error(`"${username}" is not a valid user`);

                return;
            }

            // Check if the user is currently active
            // ? This method checks if a user can do something, if the user is not
            // ? active they can't do.
            if (!user.active) {
                // Debug
                C.D.info(`"${username}" is not currently active, thus they can't do`);

                return false;
            }
        }

        // Debug
        C.D.info(`Checking if the user "${username}" can do something that requires the following permissions:`, permissions);

        for (const permission of permissions) {
            if (!user.hasPermission(permission)) {
                // Debug
                C.D.info(`The user "${username}" lacks one or more permissions`);

                return false;
            }
        }

        // Debug
        C.D.info(`The user "${username}" has all the permissions`);

        return true;
    }

    ////////////////////////////////////////////////////////////////////////////
    // Checks if a file/folder exists
    ////////////////////////////////////////////////////////////////////////////
    static async doesExist(path) {
        // Debug
        C.D.info('Toolbox.doesExist()');

        // Check if the arguments are valid
        if (!Toolbox.check(path, 'string')) {
            // Debug
            C.D.error('"path" is invalid');

            return;
        }

        // Process the passed data
        const indexOfName = path.lastIndexOf('/') + 1;
        const filename = path.slice(indexOfName);
        const pathname = path.slice(0, indexOfName - 1);

        // Debug
        C.D.info('Processed data:', {
            data: [filename, pathname],
        });

        try {
            // Debug
            C.D.info(`Checking if "${path}" exists...`);

            // Check if the passed path is a file
            if (filename.includes('.')) {
                // Check if the passed path is a JSON
                if (filename.includes('.json')) {
                    // Debug
                    C.D.info(`"${path}" is a JSON`);

                    const folders = await FilePicker.browse('data', pathname);
                    return (folders.files.includes(path.slice(2)));
                } else {
                    // Debug
                    C.D.error(`"${path}" is not a JSON, only JSON files are supported`)

                    return;
                }
            } else {
                // Debug
                C.D.info(`"${path}" is a folder`);

                const folders = await FilePicker.browse('data', pathname);
                return (folders.dirs.includes(path.slice(2)));
            }
        } catch (error) {
            // Debug
            C.D.error(`Failed to check if "${path}" exists:`, error);

            return;
        }
    }

    ////////////////////////////////////////////////////////////////////////////
    // Save a JSON
    ////////////////////////////////////////////////////////////////////////////
    static async saveFile(path, data) {
        // Debug
        C.D.info('Toolbox.saveFile()');

        // Check if the arguments are valid
        if (!Toolbox.check(path, 'string')) {
            // Debug
            C.D.error('"path" is invalid');

            return;
        }
        if (foundry.utils.isEmpty(data)) {
            // Debug
            C.D.error('"data" is missing');

            return;
        }

        // Process the passed data
        const indexOfName = path.lastIndexOf('/') + 1;
        const filename = path.slice(indexOfName);
        const pathname = path.slice(0, indexOfName - 1);

        // Debug
        C.D.info('Processed data:', {
            data: [filename, pathname],
        });

        try {
            // Debug
            C.D.info(`Saving "${path}"...`);

            const newFile = new File([JSON.stringify(data)], filename, { type: 'application/json' });
            const result = await FilePicker.upload('data', pathname, newFile, {}, { notify: false });

            // Debug
            C.D.info(`Successfully saved "${path}"`);

            return true;
        } catch (error) {
            // Debug
            C.D.error(`Failed to save "${path}":`, error);

            return false;
        }
    }

    ////////////////////////////////////////////////////////////////////////////
    // Load a JSON and return its content
    ////////////////////////////////////////////////////////////////////////////
    static async loadFile(path) {
        // Debug
        C.D.info('Toolbox.loadFile()');

        // Check if the arguments are valid
        if (!Toolbox.check(path, 'string')) {
            // Debug
            C.D.error('"path" is invalid');

            return;
        }

        try {
            // Debug
            C.D.info(`Loading "${path}"...`);

            const result = await foundry.utils.fetchJsonWithTimeout(path);

            // Debug
            C.D.info(`Successfully loaded "${path}"`);

            return result;
        } catch (error) {
            // Debug
            C.D.error(`Failed to load "${path}":`, error);

            return;
        }
    }

    ////////////////////////////////////////////////////////////////////////////
    // Create a file/folder if it doesn't exist yet
    ////////////////////////////////////////////////////////////////////////////
    static async makeSure(path, defaultData) {
        // Debug
        C.D.info('Toolbox.makeSure()');

        // Check if the arguments are valid
        if (!Toolbox.check(path, 'string')) {
            // Debug
            C.D.error('"path" is invalid');

            return;
        }

        // Debug
        C.D.info(`Making sure "${path}" exists...`);

        // Check if the path exists
        if (await Toolbox.doesExist(path)) {
            // Debug
            C.D.info(`"${path}" already exists`);

            return true;
        }

        // Process the passed data
        const indexOfName = path.lastIndexOf('/') + 1;
        const filename = path.slice(indexOfName);
        const pathname = path.slice(0, indexOfName - 1);

        // Debug
        C.D.info('Processed data:', {
            data: [filename, pathname],
        });

        // Check if the passed path is a file
        if (filename.includes('.')) {
            // Check if the passed path is a JSON
            if (filename.includes('.json')) {
                // Check if the defaultData got passed
                if (foundry.utils.isEmpty(defaultData)) {
                    // Debug
                    C.D.error('"defaultData" is missing');

                    return;
                }

                // Debug
                C.D.info(`"${path}" is missing, creating it...`);

                // Create the file with the passed defaultData
                await Toolbox.saveFile(path, defaultData);

                // Debug
                C.D.info(`Successfully created "${path}" with default data:`, defaultData);

                return false;
            } else {
                // Debug
                C.D.error(`"${path}" is not a JSON, only JSON files are supported`)

                return;
            }
        } else {
            try {
                // Debug
                C.D.info(`"${path}" is missing, creating it...`);

                // Create the folder
                await FilePicker.createDirectory('data', path);

                // Debug
                C.D.info(`Successfully created "${path}"`);

                return false;
            } catch (error) {
                // Debug
                C.D.error(`Failed to create`);

                return;
            }
        }
    }

    ////////////////////////////////////////////////////////////////////////////
    // Returns all the users which have the passed permissions
    ////////////////////////////////////////////////////////////////////////////
    static everyoneWhoCan(permissions) {
        // Debug
        C.D.info('Toolbox.everyoneWhoCan()');

        // Debug
        C.D.info('Searching for everyone with all the required permissions...');

        let users = [];
        for (const user of game.users) {
            if (Toolbox.can(permissions, user.name)) {
                users.push(user);
            }
        }

        // Check if atleast one user got found
        if (users.length == 0) {
            // Debug
            C.D.error(`Couldn't find anyone who can do:`, permissions);

            return;
        }

        return users;
    }

    ////////////////////////////////////////////////////////////////////////////
    // Returns the first found user that has the passed permissions
    ////////////////////////////////////////////////////////////////////////////
    static anyoneWhoCan(permissions) {
        // Debug
        C.D.info('Toolbox.anyoneWhoCan()');

        // Debug
        C.D.info('Searching for someone with all the required permissions...');

        // Check if the current user can do it
        if (Toolbox.can(permissions)) {
            // Debug
            C.D.info('Local user has all the required permissions');

            return game.user;
        }

        // Debug
        C.D.info('Local user lacks one or more of the permissions, trying to find someone else...');

        // Find someone else who can do it
        let userWithPerms;
        for (const user of game.users) {
            // Check if the user has the permissions
            if (Toolbox.can(permissions, user.name)) {
                // Debug
                C.D.info(`The user "${user.name}" has all the required permissions`);

                return user;
            }
        };

        // Debug
        C.D.error(`Couldn't find anyone with all the required permissions`);

        return;
    }
}
