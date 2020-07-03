const { storageService } = require("./StorageService")

const Authentication = () => {
    const access = storageService.get("accessToken");
    if (access) {
        return true;
    }
    return false;
}

export { Authentication };