const AdmZip = require("adm-zip");
const fs = require("fs");

console.log('-------DONT USE THIS FILE-------');

const APP_NAME = "Application";
const BUILD_DIRECTORY = "./build";
const TEMP_DIRECTORY = "css-js";

function formatDate(date) {
    var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    var hours = date.getHours();
    var minutes = date.getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " ";
    return [year, month, day].join(".") + "--" + strTime;
}

async function createZipArchive(p) {
    const styles = fs.readdirSync(`${p}/static/css`);
    const scripts = fs.readdirSync(`${p}/static/js`);

    const css = /(main\.)(\w{8}).css/g;
    const js = /(main\.)(\w{8}).js/g;

    const reactStyleFile =
        `${p}/static/css/` + styles.find((file) => css.test(file));
    const reactScriptFile =
        `${p}/static/js/` + scripts.find((file) => js.test(file));

    if (!fs.existsSync(`${p}/${TEMP_DIRECTORY}`)) {
        fs.mkdirSync(`${p}/${TEMP_DIRECTORY}`);
    }

    fs.copyFileSync(reactStyleFile, `${p}/${TEMP_DIRECTORY}/main.css`);
    fs.copyFileSync(reactScriptFile, `${p}/${TEMP_DIRECTORY}/main.js`);

    try {
        let date = formatDate(new Date());
        date = date.replaceAll("/", "-");
        date = date.replaceAll(":", ".");
        date = date.replaceAll(" ", "");

        console.log(`${p}/${TEMP_DIRECTORY}/main.js`);

        fs.appendFileSync(
            `${p}/${TEMP_DIRECTORY}/main.js`,
            `\n console.log('VERSION: ${APP_NAME}-${date}');`
        );

        const zip = new AdmZip();
        const outputFile = `${p}/${APP_NAME}-${date}.zip`;
        zip.addLocalFolder(p + "/" + TEMP_DIRECTORY);
        zip.writeZip(outputFile);
        console.log(`Created ${outputFile} successfully`);
    } catch (e) {
        console.log(`Something went wrong. ${e}`);
    }
}

createZipArchive(BUILD_DIRECTORY);
