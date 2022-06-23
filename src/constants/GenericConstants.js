export const maxBirthdayDate = new Date(
    new Date().getFullYear() - 18
    + '-' + ("0" + (new Date().getMonth() + 1)).slice(-2)
    + '-' + ("0" + new Date().getDate()).slice(-2)
);
