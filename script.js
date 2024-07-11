const donationInput = document.getElementById("donationAmount");
const donationButton = document.querySelector("button");
const goalAmount = 100;
const mercury = document.getElementById("mercury");
const donationLabel = document.getElementById("donationLabel");
let totalDonations = 0;

donationButton.addEventListener("click", handleDonation);


function handleDonation() {
    donationAmount = parseFloat(donationInput.value);
    totalDonations += donationAmount;
    const donationPercentage = (totalDonations / goalAmount) * 100;
    const mercuryHeight = donationPercentage;
    mercury.style.height = `${mercuryHeight}%`;

    if (totalDonations >= goalAmount) {
        setTimeout(function () {
            alert("Congratulations! We have reached the fundraising goal!!");
        }, 2000);
    }

    const donationLabelText = `← £${totalDonations}`;
    donationLabel.innerText = donationLabelText;

    const donationLabelPosition = `${Math.min(mercuryHeight, 100)}%`;
    donationLabel.style.bottom = donationLabelPosition;
};

