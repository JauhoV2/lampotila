function muunnaLampotila() {
    const muunnosTyyppi = document.getElementById('muunnosTyyppi').value;
    const lampotila = parseFloat(document.getElementById('lampotila').value);
    const desimaaliValinta = document.querySelector('input[name="desimaali"]:checked').value;

    if (isNaN(lampotila)) {
        naytaViesti("Anna kelvollinen numero!");
        return;
    }

    if (muunnosTyyppi === "CtoF" && lampotila < -273.15) {
        naytaViesti("Lämpötila ei voi olla pienempi kuin absoluuttinen nollapiste (-273,15 °C).");
        return;
    }

    if (muunnosTyyppi === "FtoC" && lampotila < -459.67) {
        naytaViesti("Lämpötila ei voi olla pienempi kuin absoluuttinen nollapiste (-459,67 °F).");
        return;
    }

    let tulos;
    if (muunnosTyyppi === "CtoF") {
        tulos = (lampotila * 9 / 5) + 32;
        naytaViesti(`${lampotila} °C on ${tulos.toFixed(desimaaliValinta)} °F`);
    } else if (muunnosTyyppi === "FtoC") {
        tulos = (lampotila - 32) * 5 / 9;
        naytaViesti(`${lampotila} °F on ${tulos.toFixed(desimaaliValinta)} °C`);
    }
}

function naytaViesti(viesti) {
    document.getElementById('tulos').textContent = viesti;
}
