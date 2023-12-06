function cycleTheme() {
    const themeValue = getComputedStyle(document.documentElement).getPropertyValue('--theme');
    console.log("test")

    if (themeValue == '0') {
        document.documentElement.style.setProperty('--primary-color', 'white');
        document.documentElement.style.setProperty('--secondary-color', 'black');
        document.documentElement.style.setProperty('--theme', '1');
    } if (themeValue == '1') {
        document.documentElement.style.setProperty('--primary-color', '#382b26');
        document.documentElement.style.setProperty('--secondary-color', '#b8c2b9');
        document.documentElement.style.setProperty('--theme', '0');
    }
}

document.getElementById('bulb-button').addEventListener('click', cycleTheme);