document.addEventListener('DOMContentLoaded', function () {
    const packages = document.querySelectorAll('.basic-container');

    packages.forEach(package => {
        const minusButton = package.querySelector('.minus-button');
        const plusButton = package.querySelector('.plus-button');
        const amountElement = package.querySelector('.amount');
        const roomCountElement = package.querySelector('.room-count');
        const signUpButton = package.querySelector('.sign-up');
        const chosenRoomsElement = package.querySelector('.footer .chosen-rooms');

        const priceIncrement = 99;
        let initialPrice = parseInt(amountElement.textContent);
        let roomCount = 1;

        minusButton.addEventListener('click', function () {
            if (roomCount > 1) {
                roomCount--;
                updatePackageDetails();
            }
        });

        plusButton.addEventListener('click', function () {
            roomCount++;
            updatePackageDetails();
        });

        signUpButton.addEventListener('click', function () {
            chosenRoomsElement.textContent = roomCount;
        });

        function updatePackageDetails() {
            amountElement.textContent = (initialPrice + (priceIncrement * (roomCount - 1))).toString();
            roomCountElement.textContent = roomCount.toString();
        }
    });
});
