function diagnose() {
    const symptoms = document.getElementById("symptoms").value.toLowerCase();
    let result = '';

    if (symptoms.includes("headache")) {
        result = "Possible diagnosis: Migraine or Tension Headache.";
    } else if (symptoms.includes("fever")) {
        result = "Possible diagnosis: Flu or Infection.";
    } else {
        result = "Please provide more specific symptoms for a diagnosis.";
    }

    document.getElementById("result").innerText = result;
}
